/** @odoo-module **/


import { registry } from "@web/core/registry";
const {Component, useState, onWillStart, useRef} = owl;

import { useService} from "@web/core/utils/hooks";

export class OwlTodoList extends Component{
    setup(){
        this.state = useState({
            task : {name : "", color: "#FFFF00", is_completed: false},
            taskList: [],
            isEdit : false,
            activeId : false
        });
        this.orm = useService('orm');
        this.model = 'todo.list';
        this.searchInput = useRef('search-input');
        onWillStart(async ()=>{
            await this.getAllTasks();
        })
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model,[],['name', 'color', 'is_completed']);
    }

    addTask(){
        this.resetForm();
        this.state.isEdit = false
        this.state.activeId = false
    }

    editTask(task){
        this.state.activeId = task.id;
        this.state.isEdit = true;
        this.state.task = {...task};
    }

    async saveTask(){
        if (!this.state.isEdit)
            await this.orm.create(this.model, [this.state.task]);
        else{
            await this.orm.write(this.model, [this.state.activeId], this.state.task);
        }
        await this.getAllTasks();
    }

    async deleteTask(task){
        await this.orm.unlink(this.model, [task.id]);
        await this.getAllTasks();
    }

    async searchTasks(){
        const text = this.searchInput.el.value;
        this.state.taskList =await this.orm.searchRead(this.model, [['name', 'ilike', text]], ['name', 'color', 'is_completed'])
    }

    async toggleTask(e, task){
        await this.orm.write(this.model, [task.id], {is_completed : e.target.checked});
        await this.getAllTasks();
    }

    async updateColor(e, task){
        await this.orm.write(this.model, [task.id], {color : e.target.value});
        await this.getAllTasks();
    }

    resetForm(){
        this.state.task = {name : "", color: "#FFFF00", is_completed: false}
    }
}


OwlTodoList.template = 'owl.TodoList';
registry.category("actions").add("owl.action_todo_list_js", OwlTodoList);

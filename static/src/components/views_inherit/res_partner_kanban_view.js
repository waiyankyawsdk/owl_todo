/** @odoo-module **/


import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { useService} from "@web/core/utils/hooks";

const { onWillStart} = owl;

class ResPartnerKanbanController extends KanbanController{
    setup(){
        super.setup();
        console.log("This is partner kanban controller");
        this.action = useService('action');
        this.orm = useService('orm');

        onWillStart(async ()=>{
            this.customerLocations = await this.orm.readGroup('res.partner', [], ['state_id'], ['state_id']);
            console.log(this.customerLocations)
        })
    }

    openSaleView(){
        console.log("This is sale views button.")
        this.action.doAction({
            type : "ir.actions.act_window",
            name : "Custom Sales",
            res_model : "sale.order",
            views : [[false, "list"], [false, "form"]]
        })
    }

    openInvoiceView(){
        console.log("This is invoice views button.")
        this.action.doAction({
            type : "ir.actions.act_window",
            name : "Custom Invoices",
            res_model : "account.move",
            views : [[false, "list"], [false, "form"]]
        })
    }

    openMeetingView(){
        console.log("This is meeting views button.")
        // this.action.doAction({
        //     type : "ir.actions.act_window",
        //     name : "Custom Invoices",
        //     res_model : "account.move",
        //     views : [[false, "list"], [false, "form"]]
        // })
    }

    selectLocations(state){
        this.env.searchModel.createNewFilters([{
            domain : [['state_id', '=', state[0]]],
            description : state[1]
        }])
    }
}

ResPartnerKanbanController.template = 'owl.ResPartnerKanbanView';

export const resPartnerKanbanView = {
    ...kanbanView,
    Controller : ResPartnerKanbanController, 
    buttonTemplate : "owl.ResPartnerKanbanView.Buttons"
}

registry.category('views').add('res_partner_kanban_view', resPartnerKanbanView);

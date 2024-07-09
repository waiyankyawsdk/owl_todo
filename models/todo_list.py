# -*- coding: utf-8 -*-
from odoo import api, fields, models

class ToDo(models.Model):
    _name = 'todo.list'
    _desciption ='OWL Todo List'

    name = fields.Char(string="Task Name")
    is_completed = fields.Boolean()
    color = fields.Char()

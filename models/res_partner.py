# -*- coding: utf-8 -*-

from odoo import fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'
    
    username = fields.Char()
    verify_email = fields.Char()

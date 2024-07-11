# -*- coding: utf-8 -*-
{
    'name': "OWL Tutorial",

    'summary': "OWL Tutorial with AJScript",

    'description': """
    Learn OWL with AJScript for Todo List Model
    """,

    'author': "AJScript",
    'website': "https://www.example.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'OWL',
    'version': '1.0',
    'sequence': -1,
    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'sale'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/todo_list_views.xml',
        'views/res_partner_views.xml'
    ],
    'application' : True,
    'installable' : True,
    'assets' : {
        'web.assets_backend':[
            'owl/static/src/components/**/*'
        ]
    }
}


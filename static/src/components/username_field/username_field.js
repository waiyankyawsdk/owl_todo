/** @odoo-module **/

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field";

export class UsernameField extends CharField{
    setup(){
        super.setup();
        console.log("Char fields inherited");
    }
}

UsernameField.supportedTypes = ["char"]

registry.category('fields').add('username', UsernameField)

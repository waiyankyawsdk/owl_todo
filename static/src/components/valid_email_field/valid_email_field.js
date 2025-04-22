/** @odoo-module **/


import { registry } from "@web/core/registry";
import { EmailField } from "@web/views/fields/email/email_field";

export class ValidEmailField extends EmailField{
    setup(){
        super.setup();
        console.log("Email fields inherited");
    }
}

ValidEmailField.supportedTypes = ["char"]

registry.category('fields').add('valid_email_field', ValidEmailField)

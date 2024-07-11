/** @odoo-module **/


import { registry } from "@web/core/registry";
import { listView } from "@web/views/list/list_view";
import { ListController } from "@web/views/list/list_controller";
import { useService} from "@web/core/utils/hooks";

class ResPartnerListController extends ListController{
    setup(){
        super.setup();
        console.log("This is partner controller");
        this.action = useService('action');
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

}

export const resPartnerListView = {
    ...listView,
    Controller : ResPartnerListController, 
    buttonTemplate : "owl.ResPartnerListView.Buttons"
}

registry.category('views').add('res_partner_list_view', resPartnerListView);

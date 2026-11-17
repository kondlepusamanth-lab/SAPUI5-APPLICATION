sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.sapui5application.controller.View2", {
        onInit() {
        },
        onBackpress: function(){
          this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    });
});
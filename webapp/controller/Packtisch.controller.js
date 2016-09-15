sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("mcl.controller.Packtisch", {
		onFormSuccess: function() {},

		onFormError: function() {},

		onFormSubmit: function(oEvent) {
			var oIconTabBar = this.getView().byId("icontabbar");
			oIconTabBar.setSelectedKey("filterpack");
		},

		onButtonSend: function() {
			var msg = "Erfolgreich hinzugef\xFCgt!";
			sap.m.MessageToast.show(msg);
			var oIconTabBar = this.getView().byId("icontabbar");
			oIconTabBar.setSelectedKey("filterscan");
			this.getView().byId("BarcodescanInput").focus();
		},

		submitKopftext: function() {
			var msg = "Kopftext erfolgreich hinzugef\xFCgt.";
			sap.m.MessageToast.show(msg);
		},

		selectPackmittel: function() {
			//	console.log("select Packmittel");
		},

		onAfterRendering: function() {
			 jQuery.sap.delayedCall(0, this,
			 	function() {
					this.getView().byId("BarcodescanInput").focus();
				});
		},

		focustest: function() {
			this.getView().byId("BarcodescanInput").focus();
		}
	});
});
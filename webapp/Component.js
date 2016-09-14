sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
<<<<<<< HEAD
	"mcl/model/models"
	],
=======
	"mcl/model/models"],
>>>>>>> branch 'master' of https://github.com/SpeTimo/SAPUI5_MPS.git
function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("mcl.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});

});

sap.ui.define([
		"opensap/manageproducts/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("mcl.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);
sap.ui.define([
], function() {
	"use strict";
	const aPropertyInfos = [{
		key: "name",
		label: "Error Name",
		path: "name",
		dataType: "sap.ui.model.type.String"
	},{
		key: "datetime",
		label: "Date and Time",
		path: "datetime",
		dataType: "sap.ui.model.type.String"
	},{
		key: "reprocess",
		label: "Reprocess",
		path: "reprocess",
		dataType: "sap.ui.model.type.String"
	},{
		key: "payload",
		label: "XML/Payload Before Reprocess",
		path: "payload",
		dataType: "sap.ui.model.type.String"
	}];

	return aPropertyInfos;
}, /* bExport= */false);

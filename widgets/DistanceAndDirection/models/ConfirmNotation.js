// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistanceAndDirection/models/ConfirmNotation.html":'\x3cdiv class\x3d\'coordinateContainer\'\x3e\r\n    \x3cspan class\x3d\'jimu-widget-subtitle\' data-dojo-attach-point\x3d\'label1\'\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n        \x3cdiv class\x3d"controlItem" style\x3d"padding-top: 10px;"\x3e\r\n            \x3cselect style\x3d"width: 225px" data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"comboOptions"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ConfirmNotation.html jimu/utils".split(" "),function(c,d,e,f,g,h){return c([d,e,f],{templateString:g,numberOfInputs:0,selectOptions:{},constructor:function(a,b){this.numberOfInputs=b.length;this.selectOptions=b},postCreate:function(){this.label1.innerHTML=h.sanitizeHTML(this.numberOfInputs+this.nls.multipleNotationsMessage);for(var a=0;a<this.selectOptions.length;a++)this.comboOptions.addOption({value:this.selectOptions[a].name,
label:this.selectOptions[a].notationType})}})});
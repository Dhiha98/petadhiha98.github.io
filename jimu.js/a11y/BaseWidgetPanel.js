// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/html dojo/query dojo/on dojo/keys ./../utils".split(" "),function(h,d,m,k,e,g){var c={frameSectionIndex:"91"};c.panelNls=window.jimuNls.panelHeader;c._addTagToGroupPanel=function(){var a=this.config.widgets;this.isGroupPanel=!0;a.forEach(function(a){a.inGroupPanel=!0})};c._setAriaLabel=function(a,f){var e;a.folded?(e=c.panelNls.expanded,d.setStyle(a.containerNode,"display","inherit")):(e=c.panelNls.collapsed,d.setStyle(a.containerNode,"display","none"));f=g.getSubstituteString(f,
e);d.setAttr(a.titleNode,"aria-label",f)};c._initFrameEvents=function(a,f,l){if(this.isGroupPanel){var n=g.getSubstituteString(f.label,c.panelNls.expanded);f=g.getSubstituteString(f.label,c.panelNls.pressToFocus);d.setAttr(a.titleNode,"aria-label",n);d.setAttr(a.titleNode,"tabindex",c.frameSectionIndex);d.setAttr(a.containerNode,"aria-label",f);d.setAttr(a.containerNode,"tabindex",c.frameSectionIndex);0===l?this.firstTitleNode=a.titleNode:l===this.config.widgets.length-1&&(this.lastTitleNode=a.titleNode,
this.lastContent=a.containerNode);this.own(k(a.titleNode,"click",h.hitch(this,function(){a.foldEnable&&this._setAriaLabel(a,a.label)})));this.own(k(a.titleNode,"keydown",h.hitch(this,function(b){d.hasClass(b.target,"title")&&(b.keyCode===e.TAB?b.target===this.firstTitleNode&&b.shiftKey?(b.preventDefault(),this.lastContent.focus()):b.target!==this.lastTitleNode||b.shiftKey||"none"!==d.getStyle(this.lastContent,"display")||(b.preventDefault(),this.firstTitleNode.focus()):!a.foldEnable||b.keyCode!==
e.ENTER&&b.keyCode!==e.SPACE||(b.stopPropagation(),this._setAriaLabel(a,a.label),a.onFoldableNodeClick()))})));this.own(k(a.containerNode,"keydown",h.hitch(this,function(b){var c=b.target;d.hasClass(c,"jimu-panel-content")?b.keyCode===e.ENTER?(b=m(".jimu-widget",c)[0])&&g.focusFirstFocusNode(b):b.target!==this.lastContent||b.shiftKey||b.keyCode!==e.TAB||(b.preventDefault(),this.firstTitleNode.focus()):b.keyCode===e.ESCAPE&&(b.stopPropagation(),a.containerNode.focus())})))}};c._onOpenAndFocus=function(){this.config.openAtStart&&
!this._isFirstOpenAtStart?this._isFirstOpenAtStart=!0:this.isGroupPanel&&this.firstTitleNode&&this.firstTitleNode.focus()};return c});
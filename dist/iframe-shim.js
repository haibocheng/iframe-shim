define("#iframe-shim/0.9.4/iframe-shim",["#position/0.9.2/position","#jquery/1.7.2/jquery"],function(require,exports,module){function Shim(target){this.target=$(target).eq(0)}function createIframe(target){return $("<iframe>",{src:"javascript:''",frameborder:0,css:{display:"none",border:"none",opacity:0,position:"absolute"}}).insertBefore(target)}var $=require("#jquery/1.7.2/jquery"),Position=require("#position/0.9.2/position");Shim.prototype.sync=function(){var target=this.target,iframe=this.iframe;if(!target.length)return this;var height=target.outerHeight(),width=target.outerWidth();return!height||!width||target.is(":hidden")?iframe&&iframe.hide():(iframe||(iframe=this.iframe=createIframe(target)),iframe.css({height:height,width:width}),Position.pin(iframe[0],target[0]),iframe.show()),this},Shim.prototype.destroy=function(){this.iframe&&(this.iframe.remove(),delete this.iframe),delete this.target};if($.browser.msie&&$.browser.version==6)module.exports=Shim;else{function Noop(){}Noop.prototype.sync=Noop,Noop.prototype.destroy=Noop,module.exports=Noop}});
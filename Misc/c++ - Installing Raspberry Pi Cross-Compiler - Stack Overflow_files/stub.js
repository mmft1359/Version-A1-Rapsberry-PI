"use strict";function IsMalwareProxy(){try{return"stackover.eu"===window.location.host}catch(e){return!1}}function prepareEditor(e){var t=e.postfix||"",n=function(){setTimeout(function(){StackExchange.editor.initIfShown(e)},1)};if(!e.onDemand)return StackExchange.using("editor",n),void 0;for(var a="bold-button italic-button spacer1 link-button quote-button code-button image-button spacer2 olist-button ulist-button heading-button hr-button spacer3 undo-button redo-button".split(" "),i=$('<ul id="wmd-button-row'+t+'" class="wmd-button-row" />').appendTo(".wmd-button-bar"),r=0,o=0;o<a.length;o++){var s=a[o],c=/spacer/.test(s),l=$("<li id='wmd-"+s+t+"' />").prop("className","wmd-"+(c?"spacer":"button")).css("left",25*o).appendTo(i);$("<span />").css("background-position",r+"px -20px").appendTo(l),c||(r-=20)}var u=!1;$("#wmd-input, #title, #tagnames, #edit-comment, #m-address, #display-name").one("focus click keydown",function(){if(!u){u=!0;var t=function(){i.remove(),e.autoShowMarkdownHelp&&(e.immediatelyShowMarkdownHelp=!0),n()};i.addSpinner({"float":"right"}),StackExchange.using("editor",t)}})}if(window.StackExchange={},top!=self)throw top.location.replace(document.location),$(function(){$("head").add("body").remove()}),alert("For security reasons, framing is not allowed; click OK to remove the frames."),new Error;if(StackExchange.init=function(){function e(){$(document).on("click",".convert-to-post",function(e){e.preventDefault();var t=$(this).attr("data-confirm");if(!t||confirm(t)){var n=$("<form method='post'/>").attr("action",$(this).attr("href")).appendTo("body");n.append($("<input type='hidden' name='fkey' />").attr("value",$(this).attr("data-fkey"))).submit()}})}function t(){function e(e){StackExchange.options.user.fkey!==e&&(StackExchange.options.user.fkey=e,$("input[name=fkey]").val(e))}function t(e,t){try{localStorage.setItem(a,e+","+t)}catch(n){}}function n(){var e=localStorage.getItem(a);if(!e)return{"time":0};var t=e.split(/,/);return{"fkey":t[0],"time":parseInt(t[1],10)}}var a="se:fkey";$(window).on("storage",function(t){t=t.originalEvent,t.key==a&&t.newValue&&e(t.newValue.split(/,/)[0])});try{var i=StackExchange.options.user.fkey,r=n();r.fkey!==i&&(StackExchange.options.serverTime>r.time?t(i,StackExchange.options.serverTime):e(r.fkey))}catch(o){}}function n(){if(StackExchange.options.timingsGuid&&window.performance&&window.performance.timing){var e=window.performance.timing,t=e.navigationStart,n={"guid":StackExchange.options.timingsGuid,"Info":StackExchange.options.timingsInfo,"fkey":StackExchange.options.user.fkey};for(var a in e)0!==e[a]&&(n[a]=0===e[a]?null:e[a]-t);$.post("/client-timings",n)}}var a=function(e){if(!window.jQuery){if("complete"!=document.readyState)return setTimeout(function(){a(e)},1e3),void 0;var t=document.createElement("div");t.id="noscript-padding";var n=document.createElement("div");n.id="noscript-warning",n.innerHTML=function(e){return e.siteName+" requires external JavaScript from another domain, which is blocked or failed to load."}({"siteName":e}),document.body.insertBefore(t,document.body.firstChild),document.body.appendChild(n)}},i=function(){var e=function(t,n){if(t){var a=$(t).filter(":not(.popup-stack-hidden)");if(!a.length)return;a.each(function(e,t){var n=$(t),i=n.data("_popup"),r=n.data("_lightbox");i&&(a=a.add(i)),r&&(a=a.add(r))}),a=$($.unique(a.get())),a=a.not(".popup-closing").addClass("popup-closing");var i={"closeTrigger":n},r=$.Event("popupClosing",i);if(a.trigger(r),r.isDefaultPrevented())return a.removeClass("popup-closing"),void 0;a=a.not(".popup-closed").addClass("popup-closed"),a.filter(":not(.esc-hide)").fadeOutAndRemove(),a.filter(".esc-hide").fadeOut(function(){a.removeClass("popup-closing").removeClass("popup-closed")}),a.trigger("popupClose",i)}else StackExchange.topbar&&StackExchange.topbar.hideAll(),e(".lightbox, .message-dismissable, .popup:not(.no-auto-close), .share-tip, .esc-remove, .esc-hide","esc")};$(document).keyup(function(t){27==t.which&&e()}),$("body").mousedown(function(t){var n=$(t.target);if(!n.closest(".ac_results, .popup, .wmd-prompt-dialog, .message, .modal").length){var a="click outside";if(n.closest(".share-tip").length||e(".share-tip",a),1==t.which){if(n.is(".wmd-prompt-background"))return e(".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload",a),void 0;n.closest(".popup, .modal").length||e(".popup:not(.no-auto-close), .lightbox:not(.no-auto-close), .modal:not(.no-auto-close)",a),n.closest(".message-config").length||e(".message-config.message-dismissable",a)}}}),$(document).bind("closePopups",function(t){e(t.selectorToClose,t.closeTrigger)});var t=[];$(document).on("popupLoad",function(e){var n=e.popup;if(e.lightbox)for(var a=0;a<t.length;a++)t[a].css("display","none").addClass("popup-stack-hidden");var i=n.data("_lightbox");i&&(n=n.add(i)),n.data("popup-stack-index",t.length),t.push(n)}).on("popupClosing",function(n){if(!n.isDefaultPrevented()){var a,i=$(n.target).data("popup-stack-index");if(null!=i&&!isNaN(i)){for((0>i||i>=t.length)&&StackExchange.debug.log("popupStack index out of bounds");t.length>i;)a=t.pop(),a.data("popup-stack-index",null),e(a,n.closeTrigger);for(;i>0&&(a=t[--i],a.removeClass("popup-stack-hidden").css("display","block"),!a.filter(".lightbox").length););}}})},r=function(){var e,t=$("#hlinks"),n=$("#search input[name=q]"),a=n.width(),i=2.5*a,r="expand",o=100,s=function(e){n.queue(r,e)},c=function(){n.dequeue(r)},l=!1,u=!("placeholder"in document.createElement("input"));u&&!StackExchange.options.isMobile&&(n.length&&""==n[0].value&&(n[0].value="search"),n.bind({"focus":function(){"search"==this.value&&(this.value="")}})),n.keydown(function(a){return l||a.keyCode<46&&8!=a.keyCode&&32!=a.keyCode?!0:(l=!0,clearTimeout(e),n.clearQueue(r),s(function(e){n.length&&(n[0].placeholder=""),t.fadeOut(o,e)}),s(function(e){n.animate({"width":i,"max-width":i},o,e)}),s(function(){0==n.parent().find(".search-prompt").length&&n.before('<span class="search-prompt">search:</span>')}),3==n.queue(r).length&&c(),void 0)}).focusout(function(){e=setTimeout(function(){s(function(e){n.parent().find(".search-prompt").remove(),e()}),s(function(e){n.animate({"width":a,"max-width":a},o,e)}),s(function(e){n.length&&(u&&""==n[0].value&&(n[0].value="Search Q&A"),n[0].placeholder="Search Q&A"),t.fadeIn(o,e)}),3==n.queue(r).length&&c(),l=!1},200)}),$("#search").keydown(function(e){return 13==e.which&&e.ctrlKey&&n.val()?(window.open("/search?q="+encodeURIComponent(n.val()),"_newtab"),!1):void 0}).find("input[name=q]").keyup(function(e){27==e.which&&$(this).blur()})};return function(o){StackExchange.options=o,o.serverTimeOffsetSec=o.serverTime-(new Date).getTime()/1e3,a(o.site.name),$.ajaxSetup({"cache":!1}),StackExchange.init.createJqueryExtensions(),o.enableLogging=(o.user.isEmployee||o.isDebugBuild)&&"undefined"!=typeof console&&"undefined"!=typeof console.log,$(function(){IsMalwareProxy()&&(window.location.href="http://stackexchange.com/about/malware?host="+window.location.hostname),i(),r(),t(),e(),StackExchange.using(StackExchange.options.user.isAnonymous?"anonymous":"loggedIn",function(){StackExchange.initialized.resolve()},!0,o.fullPostfix);var a=StackExchange.options.styleCodeAdditionalLang;a&&StackExchange.ifUsing("prettify",function(){return StackExchange.loadJsFile("third-party/prettify/additional-langs/"+a)}),StackExchange.ready(function(){o.user.messages&&StackExchange.notify.showMessages(o.user.messages,o.isMobile),o.enableUserHovercards&&StackExchange.usermenu.init(),o.site.universalAuthDisabled||UniversalAuth.performAuth(),StackExchange.tagPreferences?StackExchange.tagPreferences.init():StackExchange.tagmenu.init(),o.timingsGuid&&$(window).load(function(){setTimeout(n,50)}),$("*[data-tracker]").track(),StackExchange.helpers.bindShowMoreHotNetworkQuestions();var e=function(){var e=!1;$("body > script:not([src])").each(function(){return this.textContent.length>4e4&&/currentSelectable/.test(this.textContent)?(e=!0,!1):void 0}),(e||o.user.keyboardShortcuts)&&StackExchange.using("keyboardShortcuts",function(){StackExchange.keyboardShortcuts.init(e)})};document.readyState&&"complete"!==document.readyState?$(window).load(function(){setTimeout(e,10)}):setTimeout(e,10)})})}}(),StackExchange.debug={"log":function(){},"init":function(){this.log=function(e){$(function(){var t=$("#debug-messages");t.length||(t=$("<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />").append($("<span style='cursor:pointer;color:#999'>(close debug messages)</span>").click(function(){$("#debug-messages").remove()})).appendTo("body")),$("<div style='margin-top:10px' />").text(e).appendTo(t)})}}},StackExchange.initialized=$.Deferred(),StackExchange.ready=function(e){StackExchange.initialized.done(e)},window.serq)for(var i=0;i<window.serq.length;i++)StackExchange.ready(window.serq[i]);!function(){var e,t={"anonymous":"full-anon.js","loggedIn":"full.js","prettify":"prettify-full.js","pseudoModerator":"moderator.js","inlineEditing":"full.js","editor":"wmd.js","externalEditor":"external-editor.js","autocomplete":"third-party/jquery.autocomplete.min.js","tagAutocomplete":"tageditor.js","tagEditor":"tageditornew.js","tagSuggestions":"tagsuggestions.js","mobile":"mobile.js","help":"help.js","inlineTagEditing":"inline-tag-editing.js","mathjaxEditing":"mathjax-editing.js","revisions":"revisions.js","mockups":"external-editor.js","schematics":"external-editor.js","snippets":"snippet-javascript.js","snippetsJsCodeMirror":"snippet-javascript-codemirror.js","review":"review.js","translation":"full.js","gps":"full-anon.js","postValidation":"post-validation.js","exploreQuestions":"explore-qlist.js","eventCharts":"events.js","virtualKeyboard":"virtual-keyboard.js","keyboardShortcuts":"keyboard-shortcuts.js"},n={},a={},i={},r={},o={},s=function(e,t){return function(n){var a=e[n];return a||(a=e[n]=t(n)),a}},c=function(e){var t,n,a=i[e],r=$.Deferred(),o=$.when(r);if(a)for(var t=0;t<a.length;t++)n=a[t].call(null),n&&$.isFunction(n.promise)&&(o=$.when(o,n));return r.resolve(),o},l=function(){if(!e){var t=$("script[src]").filter(function(){return/stub.*\.js/.test($(this).attr("src"))}).first();0==t.length?(StackExchange.debug.log("couldn't figure out location of stub.js"),e="/content/js/"):e=t.attr("src").replace(/\/stub.*\.js.*$/,"/")}return e},u=function(e){var t=o["js/"+e];return t?"?v="+t:(StackExchange.debug.log("no cache breaker for "+e),"")},d=function(e){return e&&StackExchange.options.locale&&-1==e.indexOf("third-party")&&(e=e.replace(/^(.*)(\.js)(\?.*)?$/,"$1."+StackExchange.options.locale+"$2$3")),e},p=function(e,t){var n=$.Deferred(),a=document.createElement("script");return a.async="async",a.src=t?e:d(e),a.onload=a.onreadystatechange=function(e,t){(!a.readyState||/loaded|complete/.test(a.readyState))&&(t?n.reject():n.resolve())},a.onerror=function(){n.reject()},$("head")[0].appendChild(a),n.promise()},f=function(e){var n=t[e];return n?h(n):$.Deferred().reject().promise()},h=s(a,function(e){return p(l()+e+u(d(e)))}),g=s(n,function(e){function t(){return(a=StackExchange[e])?(c(e).done(function(){n.resolve()}),void 0):i>0?(i--,StackExchange.debug.log("retrying "+e),setTimeout(t,20),void 0):(StackExchange.debug.log("object StackExchange."+e+" not available although file was loaded"),n.reject(),void 0)}var n=$.Deferred(),a=StackExchange[e],i=3;return a?n.resolve():f(e).done(t).fail(n.reject),n.promise()}),m=$.Deferred(),v=function(e,n,a,i){if(!a&&"resolved"!==m.state())return m.done(function(){v(e,n)}),void 0;if(a)for(var r in t)t.hasOwnProperty(r)&&(t[r]=t[r].replace(/^(full(?:-anon)?).js$/,"$1"+(i||"")+".js"));var o=g(e);return a?m.resolve():o=$.when(o,StackExchange.initialized),o.done(function(){n()}).fail(function(){StackExchange.debug.log("failed to provide object "+e)}),o};v.setCacheBreakers=function(e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])};var b=function(e,t,n){if("undefined"!=typeof n){if(r["u_"+n])return;r["u_"+n]=!0}if(StackExchange[e])return t(),void 0;var a=i[e];a||(a=i[e]=[]),a.push(t)};StackExchange.using=v,StackExchange.ifUsing=b,StackExchange.loadJsFile=function(e,t){return p(l()+e,t)}}(),StackExchange.loadJqueryUi=function(){if($.ui)return $.Deferred().resolve();$("<link>").attr({"href":"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/smoothness/jquery-ui.css","rel":"stylesheet","type":"text/css","media":"all"}).appendTo("head");var result=$.Deferred(),locale=StackExchange.options.locale,datepickerLanguageGetter,datepickerLanguageScript;return $.ajaxSetup({"cache":!0}),"en"!==locale&&(datepickerLanguageGetter=$.ajax({"url":"/content/js/third-party/jquery-ui/datepicker-"+locale+".js","dataType":"text","type":"GET"}).done(function(e){datepickerLanguageScript=e})),$.when(datepickerLanguageGetter||$.Deferred().resolve(),$.getScript("//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js")).done(function(){eval(datepickerLanguageScript),result.resolve()}),$.ajaxSetup({"cache":!1}),result.promise()},String.prototype.formatUnicorn=function(){var e=this.toString();if(!arguments.length)return e;var t=typeof arguments[0],n="string"==t||"number"==t?Array.prototype.slice.call(arguments):arguments[0];for(var a in n)e=e.replace(new RegExp("\\{"+a+"\\}","gi"),n[a]);return e},String.prototype.truncate=function(e,t){var n=this.toString();return e&&n.length>e&&(n=n.substr(0,e)+t),n},String.prototype.splitOnLast=function(e){var t=this.lastIndexOf(e);return 0>t?[this]:[this.substr(0,t),this.substr(t)]},String.prototype.contains=function(e){return this.indexOf(e)>-1},String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),StackExchange.init.createJqueryExtensions=function(){var e=StackExchange.helpers;$.extend($.expr[":"],{"working":function(e){var t=$(e).data("working");return"undefined"!=typeof t&&t},"data":function(e,t,n){var a=n[3],i=$(e).data(a);switch(typeof i){case"undefined":return!1;case"boolean":return i;case"object":return null!==i}return!0},"containsCI":function(e,t,n){return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0}}),$.fn.extend({"working":function(e){return this.each(function(){$(this).data("working",e)})},"track":function(){return this.each(function(){var e=$(this),t=e.is("a[href]")?e:e.find("a[href]"),n=e.data("tracker");t.each(function(){var e=this.href.splitOnLast("#"),t=e[0];t+=(t.contains("?")?"&":"?")+n+(e[1]||""),this.href=t})})},"fadeOutAndRemove":function(){return this.each(function(){var e=$(this);e.fadeOut("fast",function(){e.trigger("removing").remove()})})},"charCounter":function(t){return this.each(function(){var n=t.target?$(t.target):$(this).parents("form").find("span.text-counter"),a=this,i=function(){var e=t.min,i=t.max,r=(t.setIsValid||function(){}).bind(a),o=a.value?a.value.replace(/\r\n/g,"\n").length:0,s=o>.8*i?"supernova":o>.6*i?"hot":o>.4*i?"warm":"cool",c="";if(0==o)0==e?(c=function(e){return 1==e.max?"enter up to "+e.max+" character":"enter up to "+e.max+" characters"}({"max":i}),r(!0)):(c=function(e){return 1==e.min?"enter at least "+e.min+" character":"enter at least "+e.min+" characters"}({"min":e}),r(!1));else if(e>o)c=function(e){return 1==e.count,e.count+" more to go..."}({"count":e-o}),r(!1);else{var l=i-o;c=l>=0?function(e){return 1==e.count?e.count+" character left":e.count+" characters left"}({"count":l}):function(e){return 1==e.count?"too long by "+e.count+" character":"too long by "+e.count+" characters"}({"count":Math.abs(l)}),r(i>=o)}n.text(c),n.hasClass(s)||n.removeClass("supernova hot warm cool").addClass(s)};$(this).bind("blur focus keyup paste charCounterUpdate",e.DelayedReaction(i,100,{"sliding":!0}).trigger)})},"selectRange":function(e,t){return this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()}})},"addSpinner":function(t){return this.each(function(){e.addSpinner(this,t)})},"addSpinnerAfter":function(t){return this.each(function(){$(this).after(e.getSpinnerImg(t))})},"addSpinnerBefore":function(t){return this.each(function(){$(this).before(e.getSpinnerImg(t))})},"removeSpinner":function(){return this.each(function(){$(this).find("img.ajax-loader").remove()})},"showErrorMessage":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showErrorPopup":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showInfoMessage":function(t,n){return this.each(function(){e.showInfoMessage(this,t,n)})},"center":function(e){if(StackExchange.options.isMobile)return this;e=e||{};var t=this.parent();"static"===t.css("position")&&(t=t.offsetParent());var n=t.offset(),a=$(window),i=e.top||Math.max((a.height()-this.outerHeight())/2+a.scrollTop()-n.top+(e.dy||0),0);this.css("position","absolute"),this.css("top",i+"px");var r=Math.max(20,(a.width()-this.outerWidth())/2+a.scrollLeft()-n.left);this.css("left",r+"px");var o="calc(50% - "+this.outerWidth()/2+"px)";return this.css("left",o),this.css("left","-webkit-"+o),this},"helpOverlay":function(){return e.bindHelpOverlayEvents(this),this},"hideHelpOverlay":function(){return e.hideHelpOverlay(this),this},"enable":function(){return 0==arguments.length||arguments[0]?this.removeAttr("disabled").css("cursor","pointer").removeClass("disabled-button"):this.attr("disabled","disabled").css("cursor","default").addClass("disabled-button"),this},"disable":function(){return this.enable(!1)},"checked":function(e){e?this.attr("checked","checked"):this.removeAttr("checked")},"loadPopup":function(t){var n=$.Deferred(),a=this,i=t.target||a.parent();t.html||t.noSpinner||a.addSpinnerAfter({"padding":"0 3px"}),t.loaded&&n.done(t.loaded);var r=function(r){var o,s=$(r).elementNodesOnly();s.find(".popup-actions-cancel, .popup-close a, .modal-close").click(function(){StackExchange.helpers.closePopups(o?s.add(o):s)}),s.find("input:radio[disabled=disabled] + label.action-label").addClass("action-disabled"),t.hideDescriptions&&s.find("ul.action-list > li:not(.action-selected) .action-desc").hide();var c=s.find("input:radio:not(.action-subform input)");c.closest("li").bind("hide-action",function(){var e=$(this),n=".action-subform"+(t.hideDescriptions?", .action-desc":"");e.removeClass("action-selected").find(n).slideUp("fast")}).bind("show-action",function(e){var n=$(this);return n.hasClass("action-selected")?(e.stopImmediatePropagation(),void 0):(n.siblings(".action-selected").trigger("hide-action"),n.addClass("action-selected").find(".action-subform").slideDown("fast",function(){if(t.subformShow&&t.subformShow($(this)),t.subformFocusInput){var e=$(this).find("input[type=text], textarea").not(".actual-edit-overlay").eq(0);e.length&&e.focus()}}),t.hideDescriptions&&n.find(".action-desc").slideDown("fast"),t.actionSelected&&t.actionSelected(n),s.find(".popup-submit").enable(),void 0)}),c.on("click",function(){$(this).closest("li").trigger("show-action")}),(t.insert||function(e){t.prepend?e.prependTo(i):e.appendTo(i)})(s),t.lightbox&&(o=$('<div class="lightbox"/>').appendTo($("body")).css("height",$(document).height()).data("_popup",s),s.css("z-index",+o.css("z-index")+1).data("_lightbox",o)),n.resolveWith(a,[s,o]),i.trigger($.Event("popupLoad",{"popup":s,"lightbox":o}));var l=function(){};if(t.subformShow){var u=s.find("li.action-selected .action-subform");u.length>0&&(l=function(){u.each(function(){t.subformShow($(this))})})}t.dontShow||(s.center().fadeIn("fast",l),o&&o.fadeIn("fast")),e.bindMovablePopups()};return t.html?r(t.html):$.ajax({"type":"GET","url":t.url,"dataType":"html","data":t.data,"success":r,"error":function(e){var a=e.responseText&&e.responseText.length<200?e.responseText:t.defaultErrorMessage||"Unable to load popup - please try again";(t.errorTarget||i).showErrorMessage(a,{"transient":409==e.status}),n.reject(a)},"complete":e.removeSpinner}),n.promise()},"asyncLoad":function(e){return e=$.extend({"callback":null,"cache":{}},e),this.each(function(){var t=".async-load",n=$(this),a=n.find(t);n.is(t)&&(a=a.add(n)),a.each(function(){var t=$(this),n=t.data("load-url")||"";if(n&&!t.is(":working")){t.working(!0).addSpinner();var a=function(n){t.html(n).removeClass("async-load").mathjax();var a=t.data("after-load")||"";if(a||e.callback){for(var i,r=a.split("."),o=0;o<r.length;o++)i=(i||window)[r[o]];i=i||e.callback,"function"==typeof i&&i(t)}},i=e.cache[n];i?window.setTimeout(function(){a(i)},0):$.ajax({"type":"GET","url":n,"dataType":"html"}).done(function(t){e.cache[n]=t,a(t)}).fail(function(){t.removeSpinner().showErrorMessage("An error has occurred; please try again")})}})})},"mathjax":function(){return this.each(function(){"undefined"!=typeof MathJax&&MathJax.Hub.Typeset(this)})},"elementNodesOnly":function(){return this.filter(function(){return 1===this.nodeType})},"outerHTML":function(){return $("<div>").append(this.eq(0).clone()).html()}})},StackExchange.helpers=function(){function e(e,t,n){for(var a=0;a<n.length;a++){var i=n[a];try{if(/\*/.test(i))for(var r=0;4>r;r++){var o=i.replace(/\*/g,c[r]),s=e.css(o);t.css(o,s)}else t.css(i,e.css(i))}catch(l){}}}function t(t,n,a,i){if(t.is(":visible")){var r=$.browser.msie?0:.4;if(!a())return t.css("opacity",1).css("filter","").removeClass("edit-field-overlayed"),void 0;t.css("opacity",r+(i?.2:0)),t.addClass("edit-field-overlayed");var o=t.prev(".actual-edit-overlay");if(0==o.length){var c=$.trim(s(t).html()),l=t.width(),u=t.height();o=t.clone().prop("className","actual-edit-overlay").attr("name",null).attr("id",null).attr("disabled","disabled").css({"position":"absolute","backgroundColor":"white","color":"black","-webkit-text-fill-color":"black","opacity":1,"width":l,"height":u}),o.is("textarea,input")?(o.val(c),e(n,o,["line-height"])):o.html(c).css("line-height",u+"px").prepend("&nbsp;"),e(n,o,["font-family","font-size","text-align"]),e(t,o,["border-*-style","border-*-color","border-*-width"]),t.css({"zIndex":1,"position":"relative"}),o.insertBefore(t);var d=t.offset().top-o.offset().top;if(0!=d){var p=parseInt(o.css("margin-top")),f=p+d;t.is("textarea")||(f=parseInt(o.prevAll(":visible").eq(0).css("margin-bottom"))+p),o.css("margin-top",f)}var h=t.offset().left-o.offset().left;if(0!=h){var g=parseInt(o.css("margin-left"));o.css("margin-left",g+h)}}}}function n(e,t){$(e).find("input[type='submit']").prop("disabled",t)}var a,i,r,o=function(){if(!StackExchange.options.isMobile){var e=function(){a=i=null,$("body").removeAttr("style")},t=$("div.popup");t.each(function(e,t){var n=$(t).find(".handle");n.length&&(n.css({"cursor":"move"}),n.unbind("mousedown").bind("mousedown",function(e){var n=$(t).offset();i={"x":n.left-e.pageX,"y":n.top-e.pageY},a=$(t);var r=a.offset();a.offset(r).offset(r),$("body").attr("style","cursor:move"),e.preventDefault()}))}),r||(r=!0,$(document).on("mousemove",function(e){if(a){var t=e.pageY+i.y,n=e.pageX+i.x;a.offset({"top":t,"left":n})}}).on("keypress",e).on("mouseup",e))}},s=function(e){return e.parent().find("span.edit-field-overlay")},c=["left","right","top","bottom"],l={"bindShowMoreHotNetworkQuestions":function(){var e,t=$("#hot-network-questions");if(t.length&&(e=t.find(".js-show-more")).length){var n=t.find(".js-hidden");e.click(function(){return n.show(),e.remove(),!1});var a=$("#mainbar").height(),i=$("#sidebar").height()+550;a>i&&(n.each(function(){return i+=$(this).show().height(),a>i}),0==n.filter(":hidden").length&&e.remove())}},"bindMovablePopups":o,"genericBindOverlayEvents":function(e,n,a){StackExchange.options.isMobile||n.not("[placeholder]").bind("keydown contextmenu",function(){l.hideHelpOverlay(e)}).focus(function(){t(e,n,a,!0)}).on("blur change",function(){t(e,n,a)}).each(function(){t(e,n,a)})},"bindHelpOverlayEvents":function(e){e.each(function(){var e=$(this);l.genericBindOverlayEvents(e,e,function(){return""===e.val()})})},"hideHelpOverlay":function(e){e.css("opacity",1),e.css("filter",""),e.removeClass("edit-field-overlayed")},"onClickDraftSave":function(e){return $(e).click(function(e){if(null!=StackExchange.cardiologist){e.preventDefault();var t=this.href;return StackExchange.cardiologist.ensureDraftSaved(function(){window.onbeforeunload=null,window.location.href=t}),!1}}),!0},"showMessage":function(e,t,n){if(e=$(e),e.length){var a={"messageElement":null,"position":"inside","dismissable":!0,"type":"error","closeOthers":!0,"shown":function(){},"lightbox":!1},i=$.extend({},a,n),r=9;i.closeOthers&&$(".message").fadeOutAndRemove();var o=$('<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'),s=o.find(".message-inner"),c=o.find(".message-text");if(o.addClass("message-"+i.type),i.cssClass&&o.addClass(i.cssClass),i.messageElement?c.append(i.messageElement):c.html(t),i.dismissable&&(o.addClass("message-dismissable"),c.css("padding-right","35px"),s.prepend($("<div />",{"title":n.closeTitle||"close this message (or hit Esc)","class":"message-close","text":"×"})),o.click(function(e){var t=$(e.target),n=i.dismissable===!0&&!t.is("a")||"x-or-esc"===i.dismissable&&t.hasClass("message-close");n&&(i.dismissing&&i.dismissing(),o.fadeOutAndRemove(),i.lightbox&&$(".lightbox").fadeOutAndRemove())})),i.dismissing&&o.on("popupClose",function(e,t){"esc"==t.closeTrigger&&i.dismissing()}),i.css&&o.css(i.css),"inside"==i.position||"inline"==i.position||i.tip||(i.tip=i.position.my),i.tip&&s.addClass("message-tip message-tip-"+i.tip.replace(" ","-")),"inline"==i.position)e.append(o);else if("inside"==i.position)o.css("position","absolute"),e.append(o);else{o.css("position","absolute");var l=e.offsetParent();l.append(o);var u,d=e.position(),p=e.outerWidth(!0),f=e.outerHeight(!0),h=o.outerWidth(),g=o.outerHeight();switch(i.position.at){case"top left":u={"top":0,"left":0};break;case"top center":u={"top":0,"left":p/2};break;case"top right":u={"top":0,"left":p};break;case"right top":u={"top":0,"left":p};break;case"right center":u={"top":f/2,"left":p};break;case"right bottom":u={"top":f,"left":p};break;case"bottom right":u={"top":f,"left":p};break;case"bottom center":u={"top":f,"left":p/2};break;case"bottom left":u={"top":f,"left":0};break;case"left bottom":u={"top":f,"left":0};break;case"left center":u={"top":f/2,"left":0};break;case"left top":u={"top":0,"left":0}}var m;switch(i.position.my){case"left top":m={"top":0,"left":-r};break;case"top left":m={"top":-r,"left":0};break;case"top center":m={"top":-r,"left":h/2};break;case"top right":m={"top":-r,"left":h};break;case"right top":m={"top":0,"left":h+r};break;case"right bottom":m={"top":g,"left":h+r};break;case"bottom right":m={"top":g+r,"left":h};break;case"bottom left":m={"top":g+r,"left":0};break;case"left bottom":m={"top":g,"left":-r}}var v={"left":d.left+u.left-m.left,"top":d.top+u.top-m.top};o.data("initialTop",v.top),o.animateOffsetTop=function(e){o.animate({"top":o.data("initialTop")+e})},i.position.offsetTop&&(v.top+=i.position.offsetTop),i.position.offsetLeft&&(v.left+=i.position.offsetLeft),o.css({"top":v.top,"left":v.left})}return i.showing&&i.showing(),i.lightbox&&$('<div class="lightbox"/>').appendTo($("body")).css("height",$(document).height()).fadeIn(),o.fadeIn(i.shown),i.transient&&setTimeout(function(){o.fadeOutAndRemove()},Math.max(2500,t.length*("jp"===StackExchange.options.locale?80:40))),i.removing&&o.on("removing",i.removing),o}},"showErrorMessage":function(e,t,n){var a={"position":"inside","type":"error"},i=$.extend({},a,n);return this.showMessage(e,t,i)},"showErrorPopup":function(e,t,n){return this.showErrorMessage(e,t,n)},"showInfoMessage":function(e,t,n){var a={"position":"inside","transient":!0,"type":"info"},i=$.extend({},a,n);return this.showMessage(e,t,i)},"removeMessages":function(){$(".message").fadeOutAndRemove()},"addSpinner":function(e,t){$(e).append(l.getSpinnerImg(t))},"getSpinnerImg":function(e){var t=$("<img />",{"class":"ajax-loader","src":"/content/img/progress-dots.gif","title":"loading...","alt":"loading..."});return e&&t.css(e),t},"removeSpinner":function(){$("img.ajax-loader").remove()},"closePopups":function(e,t){var n=$.Event("closePopups");n.selectorToClose=e,n.closeTrigger=t||"closePopups",$(document).trigger(n)},"enableSubmitButton":function(e){n(e,!1)},"disableSubmitButton":function(e){n(e,!0)},"loadTicks":function(e){var t;t=e?e.find(".edit-block"):$(".edit-block"),0==t.find("input[name=i1l]").length&&(t.data("loading-ticks")||(t.data("loading-ticks",!0),$.ajax({"url":"/questions/ticks","cache":!1,"success":function(e){t.append("<input type='hidden' name='i1l' value='"+e+"' />")},"complete":function(){t.data("loading-ticks",!1)}})))},"showFancyOverlay":function(e){e=e||{};var t=$("#overlay-header"),n=e.message||"",a=$.browser.msie?{"background":"#fff","opacity":0}:{};e.showClose!==!1&&(n+='<br><a class="close-overlay">close this message</a>'),t.html(n).css(a).animate({"opacity":"1","height":"show"},"slow",e.complete).find(".close-overlay").click(function(){t.animate({"opacity":"0","height":"hide"},"fast")})},"DelayedReaction":function(e,t,n){n=n||{};var a,i,r=n.always,o=function(){a=null,e.apply(null,i)};return{"trigger":function(){if(i=arguments,r&&r.apply(null,i),a){if(!n.sliding)return;clearTimeout(a),a=setTimeout(o,t)}else a=setTimeout(o,t)},"cancel":function(){a&&(clearTimeout(a),a=null)}}},"fireAndForget":function(e){$.ajax({"type":"POST","url":e,"async":!0})},"updateQueryStringParameter":function(e,t,n){var a=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=-1!==e.indexOf("?")?"&":"?";return e.match(a)?e.replace(a,"$1"+t+"="+n+"$2"):e+i+t+"="+n},"parseUrl":function(e){var t=document.createElement("a");return t.href=e,""===t.host&&(t.href=t.href),t},"getLikelyErrorMessage":function(e){if(!e||"string"!=typeof e.responseText||e.responseText.length>250)return"";var t=e.responseText;try{var n=JSON.parse(t);return n.ErrorMessage||n.Message||""}catch(a){return t}},"submitFormOnEnterPress":function(e){var t=e.find("textarea");t.keyup(function(n){13!==n.which||n.shiftKey||t.prev("#tabcomplete:visible").length||e.submit()}).keypress(function(e){return 13!==e.which||e.shiftKey})},"isInNetwork":function(e){if("string"!=typeof e)throw new TypeError;try{var t=StackExchange.helpers.parseUrl(e.trim()).hostname;if(t===window.location.hostname)return!0;for(var n=["stackoverflow.com","stackexchange.com","serverfault.com","superuser.com","stackauth.com","stackapps.com","askubuntu.com","askdifferent.com","mathoverflow.net","askpatents.com"],a=0;a<n.length;a++){var i=n[a];if(t===i||t.endsWith("."+i))return!0}}catch(r){}return!1}};return l}(),StackExchange.switchMobile=function(e){$.post("/mobile/"+e,{"returnurl":window.location.href,"fkey":StackExchange.options.user.fkey},function(e){window.location.href=e})},StackExchange.switchLocale=function(e,t){$.post("/locale/"+e,{"returnurl":t,"fkey":StackExchange.options.user.fkey},function(e){window.location=e})},jQuery.cookie=function(e,t,n){if("undefined"==typeof t){var a=null;if(document.cookie&&""!=document.cookie)for(var i=document.cookie.split(";"),r=0;r<i.length;r++){var o=jQuery.trim(i[r]);if(o.substring(0,e.length+1)==e+"="){a=decodeURIComponent(o.substring(e.length+1));break}}return a}n=n||{},null===t&&(t="",n.expires=-1);var s="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,s="; expires="+c.toUTCString()}var l=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,l,u,d].join("")},jQuery.expr[":"].regex=function(e,t,n){var a=n[3].split(","),i=/^(data|css):/,r={"method":a[0].match(i)?a[0].split(":")[0]:"attr","property":a.shift().replace(i,"")},o="ig",s=new RegExp(a.join("").replace(/^\s+|\s+$/g,""),o);return s.test(jQuery(e)[r.method](r.property))},$.extend($.expr[":"],{"containsExact":function(e,t,n){return $.trim(e.innerHTML.toLowerCase())===n[3].toLowerCase()},"containsExactCase":function(e,t,n){return $.trim(e.innerHTML)===n[3]
},"containsRegex":function(e,t,n){var a=/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,i=a.exec(n[3]);return RegExp(i[1],i[2]).test($.trim(e.innerHTML))}}),function(e){e.fn.typeWatch=function(t){function n(t,n){var a=e(t.el).val();(a.length>i.captureLength&&a.toUpperCase()!=t.text||n&&a.length>i.captureLength)&&(t.text=a.toUpperCase(),t.cb(a))}function a(t){if("TEXT"==t.type.toUpperCase()||"TEXTAREA"==t.nodeName.toUpperCase()){var a={"timer":null,"text":e(t).val().toUpperCase(),"cb":i.callback,"el":t,"wait":i.wait};i.highlight&&e(t).focus(function(){this.select()});var r=function(e){var t=a.wait,i=!1;13==e.keyCode&&"TEXT"==this.type.toUpperCase()&&(t=1,i=!0);var r=function(){n(a,i)};clearTimeout(a.timer),a.timer=setTimeout(r,t)};e(t).keydown(r).bind("paste",null,function(e){e.which||r(this)}).bind("input",null,function(e){e.which||r(this)})}}var i=e.extend({"wait":750,"callback":function(){},"highlight":!0,"captureLength":2},t);return this.each(function(){a(this)})}}(jQuery),function(e){function t(t){var n;return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?a.transparent:a[e.trim(t).toLowerCase()]}function n(n,a){var i;do{if(i=e.curCSS(n,a),""!=i&&"transparent"!=i||e.nodeName(n,"body"))break;a="backgroundColor"}while(n=n.parentNode);return t(i)}e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(a,i){e.fx.step[i]=function(e){e.colorInit||(e.start=n(e.elem,i),e.end=t(e.end),e.colorInit=!0),e.elem.style[i]="rgb("+[Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2]),255),0)].join(",")+")"}});var a={"transparent":[255,255,255]}}(jQuery),!function(e,t,n){"function"==typeof define?define(n):"undefined"!=typeof module?module.exports=n():t[e]=n(t)}("klass",this,function(e){function t(e){return r.call(n(e)?e:function(){},e,1)}function n(e){return typeof e===s}function a(e,t,n){return function(){var a=this.supr;this.supr=n[l][e];var i={}.fabricatedUndefined,r=i;try{r=t.apply(this,arguments)}finally{this.supr=a}return r}}function i(e,t,i){for(var r in t)t.hasOwnProperty(r)&&(e[r]=n(t[r])&&n(i[l][r])&&c.test(t[r])?a(r,t[r],i):t[r])}function r(e,t){function a(){}function o(){this.initialize?this.initialize.apply(this,arguments):(t||u&&s.apply(this,arguments),d.apply(this,arguments))}a[l]=this[l];var s=this,c=new a,u=n(e),d=u?e:this,p=u?{}:e;return o.methods=function(e){return i(c,e,s),o[l]=c,this},o.methods.call(o,p).prototype.constructor=o,o.extend=r,o[l].implement=o.statics=function(e,t){return e="string"==typeof e?function(){var n={};return n[e]=t,n}():e,i(this,e,s),this},o}e=e||this;var o=e.klass,s="function",c=/.*/,l="prototype";return t.noConflict=function(){return e.klass=o,this},t}),StackExchange.gps=function(){function e(e,t,n,a){t=t||{};var i=null;StackExchange.options&&StackExchange.options.user&&(t.user_type=StackExchange.options.user.userType,i=StackExchange.options.user.ab);var r={"evt":e,"properties":t,"now":(new Date).getTime()};i&&(r.ab=i),StackExchange._gps_track.push(r),a&&a()}if(StackExchange._gps_track=[],window.location.href.indexOf("utm_")>=0){var t=function(e){var t=new RegExp("[\\?&]utm_"+e+"=([^&#]*)").exec(window.location.href);return t?decodeURIComponent(t[1])||void 0:void 0},n={"source":t("source"),"medium_s":t("medium")||"unknown","campaign":t("campaign"),"content":t("content")};n.source&&n.campaign&&e("utm.view",n,!1),StackExchange.using("gps",function(){StackExchange.gps.sendPending()})}return{"track":e,"sendPending":function(e){e&&e()}}}();
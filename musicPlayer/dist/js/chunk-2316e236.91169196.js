(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2316e236"],{"2d26":function(t,i,s){"use strict";var e=s("40d3"),o=s.n(e);o.a},"40d3":function(t,i,s){},8902:function(t,i,s){var e;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */ /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function(o,n,r){var h=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){o.setTimeout(t,1e3/60)},a=function(){var t={},i=n.createElement("div").style,s=function(){for(var t,s=["t","webkitT","MozT","msT","OT"],e=0,o=s.length;e<o;e++)if(t=s[e]+"ransform",t in i)return s[e].substr(0,s[e].length-1);return!1}();function e(t){return!1!==s&&(""===s?t:s+t.charAt(0).toUpperCase()+t.substr(1))}t.getTime=Date.now||function(){return(new Date).getTime()},t.extend=function(t,i){for(var s in i)t[s]=i[s]},t.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},t.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},t.prefixPointerEvent=function(t){return o.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},t.momentum=function(t,i,s,e,o,n){var h,a,l=t-i,c=r.abs(l)/s;return n=void 0===n?6e-4:n,h=t+c*c/(2*n)*(l<0?-1:1),a=c/n,h<e?(h=o?e-o/2.5*(c/8):e,l=r.abs(h-t),a=l/c):h>0&&(h=o?o/2.5*(c/8):0,l=r.abs(t)+h,a=l/c),{destination:r.round(h),duration:a}};var h=e("transform");return t.extend(t,{hasTransform:!1!==h,hasPerspective:e("perspective")in i,hasTouch:"ontouchstart"in o,hasPointer:!(!o.PointerEvent&&!o.MSPointerEvent),hasTransition:e("transition")in i}),t.isBadAndroid=function(){var t=o.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"===typeof i&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),t.extend(t.style={},{transform:h,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin")}),t.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},t.addClass=function(i,s){if(!t.hasClass(i,s)){var e=i.className.split(" ");e.push(s),i.className=e.join(" ")}},t.removeClass=function(i,s){if(t.hasClass(i,s)){var e=new RegExp("(^|\\s)"+s+"(\\s|$)","g");i.className=i.className.replace(e," ")}},t.offset=function(t){var i=-t.offsetLeft,s=-t.offsetTop;while(t=t.offsetParent)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},t.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return r.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,s=.4;return 0===t?0:1==t?1:s*r.pow(2,-10*t)*r.sin((t-i/4)*(2*r.PI)/i)+1}}}),t.tap=function(t,i){var s=n.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},t.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||(i=n.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t.view,1,s.screenX,s.screenY,s.clientX,s.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,s.dispatchEvent(i))},t}();function l(t,i){for(var s in this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!a.hasPointer,disableTouch:a.hasPointer||!a.hasTouch,disableMouse:a.hasPointer||a.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"===typeof o.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function c(t,i,s){var e=n.createElement("div"),o=n.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),e.className="iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function p(t,i){for(var s in this.wrapper="string"==typeof i.el?n.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(a.addEvent(this.indicator,"touchstart",this),a.addEvent(o,"touchend",this)),this.options.disablePointer||(a.addEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.addEvent(o,a.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(a.addEvent(this.indicator,"mousedown",this),a.addEvent(o,"mouseup",this))),this.options.fade){this.wrapperStyle[a.style.transform]=this.scroller.translateZ;var e=a.style.transitionDuration;this.wrapperStyle[e]=a.isBadAndroid?"0.0001ms":"0ms";var r=this;a.isBadAndroid&&h(function(){"0.0001ms"===r.wrapperStyle[e]&&(r.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}l.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){var i;if(1!=a.eventType[t.type]&&(i=t.which?t.button:t.button<2?0:4==t.button?1:2,0!==i))return;if(this.enabled&&(!this.initiated||a.eventType[t.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var s,e=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,s=this.getComputedPosition(),this._translate(r.round(s.x),r.round(s.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,h=n.pageX-this.pointX,l=n.pageY-this.pointY,c=a.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=h,this.distY+=l,e=r.abs(this.distX),o=r.abs(this.distY),!(c-this.endTime>300&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}h=this.hasHorizontalScroll?h:0,l=this.hasVerticalScroll?l:0,i=this.x+h,s=this.y+l,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+h/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+l/3:s>0?0:this.maxScrollY),this.directionX=h>0?-1:h<0?1:0,this.directionY=l>0?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=a.getTime()-this.startTime,o=r.round(this.x),n=r.round(this.y),h=r.abs(o-this.startX),l=r.abs(n-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&h<100&&l<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?a.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?a.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,c=r.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var d=this._nearestSnap(o,n);this.currentPage=d,c=this.options.snapSpeed||r.max(r.max(r.min(r.abs(o-d.x),1e3),r.min(r.abs(n-d.y),1e3)),300),o=d.x,n=d.y,this.directionX=0,this.directionY=0,p=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(o>0||o<this.maxScrollX||n>0||n<this.maxScrollY)&&(p=a.ease.quadratic),void this.scrollTo(o,n,c,p);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||a.ease.circular,this.isInTransition=this.options.useTransition&&s>0;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t),t){var n=a.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=r.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=r.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=void 0===i||null===i||"auto"===i?r.max(r.abs(this.x-n.left),r.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){t=t||0;var i=a.style.transitionDuration;if(this.scrollerStyle[i]=t+"ms",!t&&a.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;h(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[a.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=r.round(t),i=r.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?a.removeEvent:a.addEvent,s=this.options.bindToWrapper?this.wrapper:o;i(o,"orientationchange",this),i(o,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,a.prefixPointerEvent("pointerdown"),this),i(s,a.prefixPointerEvent("pointermove"),this),i(s,a.prefixPointerEvent("pointercancel"),this),i(s,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=o.getComputedStyle(this.scroller,null);return this.options.useTransform?(s=s[a.style.transform].split(")")[0].split(", "),t=+(s[12]||s[4]),i=+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),i=+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:c("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:c("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new p(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){a.addEvent(this.wrapper,"wheel",this),a.addEvent(this.wrapper,"mousewheel",this),a.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,a.removeEvent(this.wrapper,"wheel",this),a.removeEvent(this.wrapper,"mousewheel",this),a.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,s=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,s=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,i>0?e--:i<0&&e++,s>0?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+r.round(this.hasHorizontalScroll?i:0),o=this.y+r.round(this.hasVerticalScroll?s:0),this.directionX=i>0?-1:i<0?1:0,this.directionY=s>0?-1:s<0?1:0,e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),o>0?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap){s=r.round(c/2),e=r.round(p/2);while(l>-this.scrollerWidth){this.pages[h]=[],t=0,o=0;while(o>-this.scrollerHeight)this.pages[h][t]={x:r.max(l,this.maxScrollX),y:r.max(o,this.maxScrollY),width:c,height:p,cx:l-s,cy:o-e},o-=p,t++;l-=c,h++}}else for(n=this.options.snap,t=n.length,i=-1;h<t;h++)(0===h||n[h].offsetLeft<=n[h-1].offsetLeft)&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=r.max(-n[h].offsetLeft,this.maxScrollX),o=r.max(-n[h].offsetTop,this.maxScrollY),s=l-r.round(n[h].offsetWidth/2),e=o-r.round(n[h].offsetHeight/2),this.pages[a][i]={x:l,y:o,width:n[h].offsetWidth,height:n[h].offsetHeight,cx:s,cy:e},l>this.maxScrollX&&a++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.x-this.startX),1e3),r.min(r.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(r.abs(t-this.absStartX)<this.snapThresholdX&&r.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&(s+=this.directionX,s<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||r.max(r.max(r.min(r.abs(o-this.x),1e3),r.min(r.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];a.addEvent(o,"keydown",this),this.on("destroy",function(){a.removeEvent(o,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=a.getTime(),h=this.keyTime||0,l=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(r.round(i.x),r.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-h<200?r.min(this.keyAcceleration+l,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=0,o=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(e>0?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(t,i,s,e){var o=this,n=this.x,r=this.y,l=a.getTime(),c=l+s;function p(){var d,u,m,f=a.getTime();if(f>=c)return o.isAnimating=!1,o._translate(t,i),void(o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd"));f=(f-l)/s,m=e(f),d=(t-n)*m+n,u=(i-r)*m+r,o._translate(d,u),o.isAnimating&&h(p)}this.isAnimating=!0,p()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation());break}}},p.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(a.removeEvent(this.indicator,"touchstart",this),a.removeEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.removeEvent(this.indicator,"mousedown",this),a.removeEvent(o,"touchmove",this),a.removeEvent(o,a.prefixPointerEvent("pointermove"),this),a.removeEvent(o,"mousemove",this),a.removeEvent(o,"touchend",this),a.removeEvent(o,a.prefixPointerEvent("pointerup"),this),a.removeEvent(o,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=a.getTime(),this.options.disableTouch||a.addEvent(o,"touchmove",this),this.options.disablePointer||a.addEvent(o,a.prefixPointerEvent("pointermove"),this),this.options.disableMouse||a.addEvent(o,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;a.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),a.removeEvent(o,"touchmove",this),a.removeEvent(o,a.prefixPointerEvent("pointermove"),this),a.removeEvent(o,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.scroller.x-i.x),1e3),r.min(r.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=a.style.transitionDuration;if(this.indicatorStyle[i]=t+"ms",!t&&a.isBadAndroid){this.indicatorStyle[i]="0.0001ms";var s=this;h(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[a.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(a.addClass(this.wrapper,"iScrollBothScrollbars"),a.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(a.removeClass(this.wrapper,"iScrollBothScrollbars"),a.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=r.max(r.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=r.max(r.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&r.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&r.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=r.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=r.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=r.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=r.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[a.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?r.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?r.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[a.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},l.utils=a,t.exports?t.exports=l:(e=function(){return l}.call(i,s,i,t),void 0===e||(t.exports=e))})(window,document,Math)},d56b:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"singerDetail"},[s("div",{staticClass:"header"},[s("span",[s("i",{on:{click:t.goBack}})]),s("h2",{domProps:{textContent:t._s(t.singerName)}})]),s("div",{staticClass:"con"},[s("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+t.singerMid+".jpg?max_age=2592000"}}),s("div",{style:t.autoHeight,attrs:{id:"songListWrapper"}},[s("ul",t._l(t.songList,function(i){return s("li",{key:i.musicData.songid,on:{click:function(s){return s.stopPropagation(),t.goPlayer(i)}}},[s("h2",{domProps:{textContent:t._s(i.musicData.songname)}}),s("p",[t._v(t._s(t.singerName)+"--"+t._s(i.musicData.albumname))])])}),0)])])])},o=[],n=s("cebc"),r=s("2eb0"),h=s("cb32"),a=s("8902"),l=s.n(a),c=s("2f62"),p=s("5118");console.log(l.a);var d={data:function(){return{singerMid:"",singerName:"",songList:[],songListWrapper:null,timer:null}},computed:Object(n["a"])({},Object(c["b"])(["getCurrentSong"]),{autoHeight:function(){return this.getCurrentSong?"height:calc(55vh - 60px)":"height:calc(55vh)"}}),created:function(){this.singerMid=this.$route.params.id,this.getSingerDetail()},mounted:function(){this.songListWrapper=new l.a("#songListWrapper",{mouseWheel:!0,scrollbars:!1,useTransfrom:!0,disableMouse:!0,disablePointer:!1,disableTouch:!1,tap:!0,click:!0})},methods:Object(n["a"])({},Object(c["c"])(["ADD_SONGS_LIST","SET_CURRENT_PLAYSTATE"]),{getSingerDetail:function(){var t=this,i=h["a"].singer.singerDetail+this.singerMid;r["a"].get(i,{param:"jsonpCallback"}).then(function(i){var s=i.data,e=s.list,o=s.singer_name;t.singerName=o,t.songList=e,Object(p["setTimeout"])(function(){t.songListWrapper.refresh()},0)})},goBack:function(){this.$router.go(-1)},goPlayer:function(t){var i=t.musicData,s=i.albummid,e=i.singer,o=i.songmid,n=i.songname;this.SET_CURRENT_PLAYSTATE("playing"),this.$router.push("/fullplayer/".concat(s)),this.ADD_SONGS_LIST({albummid:s,singer:e,songmid:o,songname:n})}})},u=d,m=(s("2d26"),s("2877")),f=Object(m["a"])(u,e,o,!1,null,"4ce19934",null);i["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2316e236.91169196.js.map
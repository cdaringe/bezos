(this["webpackJsonpbezos.rad"]=this["webpackJsonpbezos.rad"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(7),s=n.n(c),r=(n(16),n(3)),o=n(11),d=n(8),l=n(9),u={},v=function(){function e(t){var n=this;Object(d.a)(this,e),this.speedX=void 0,this.speedY=void 0,this.oldX=void 0,this.oldY=void 0,this.isFirstCalculation=void 0,this.timerId=void 0,this.onUpdate=void 0,this.lastUpdate=void 0,this.clearInterval=void 0,this.bindClearInterval=function(){n.clearInterval=window.setInterval((function(){Date.now()-n.lastUpdate<400||(n.clear(),n.onUpdate({isPaused:!0}),window.clearInterval(n.clearInterval),n.clearInterval=null)}),1e3)},this.update=function(e){var t=Date.now();n.clearInterval||n.bindClearInterval(),n.isFirstCalculation?(n.oldX=e.clientX,n.oldY=e.clientY,n.isFirstCalculation=!1):(n.speedX=e.clientX-n.oldX,n.speedY=e.clientY-n.oldY,n.oldX=e.clientX,n.oldY=e.clientY,n.onUpdate(u),n.clear()),n.lastUpdate=t},this.speedX=0,this.speedY=0,this.oldX=0,this.oldY=0,this.isFirstCalculation=!0,this.timerId=void 0,this.onUpdate=t,this.lastUpdate=Date.now(),this.clearInterval=null}return Object(l.a)(e,[{key:"clear",value:function(){this.speedX=0,this.speedY=0,this.onUpdate({})}},{key:"init",value:function(){window.addEventListener("mousemove",this.update)}},{key:"destroy",value:function(){window.removeEventListener("mousemove",this.update)}}]),e}(),b=(n(17),n(0));function j(){var e=i.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{className:"scene scene--card",onMouseOver:function(){n||(a(!0),setTimeout((function(){return a(!1)}),1e3))},children:Object(b.jsxs)("div",{className:"card ".concat(n?"is-flipped":""),children:[Object(b.jsx)("div",{className:"card__face card__face--front",children:Object(b.jsx)("img",{src:"coin.png",alt:"coin"})}),Object(b.jsx)("div",{className:"card__face card__face--back",children:Object(b.jsx)("img",{src:"bezos.png",alt:"bezos"})})]})})}var p=n(10),h=Math.pow,f=Math.sqrt;function O(e){var t=e.bezos,n=i.a.useRef(!1);return i.a.useEffect((function(){var e=new v(Object(p.debounce)((function(a){var i=a.isPaused,c=e.speedX,s=e.speedY,r=f(h(c,2)+h(s,2));if(i)n.current=!1,t.playbackRate=0;else{if(!r)return;var o=function(e){e>=50&&(e=50);var t=e/50*2;return t<.25&&(t=.25),t}(r);n.current||t.play(),t.playbackRate=o}}),20,{leading:!0,maxWait:100}));e.init()}),[t]),Object(b.jsx)(b.Fragment,{children:Object(o.a)(new Array(100)).map((function(e,t){return Object(b.jsx)(j,{},t)}))})}var m=n(6);n(21);function x(e){return Object(b.jsx)("div",{className:"go",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("button",Object(m.a)(Object(m.a)({},e),{},{type:"button",children:"Click to profit!"})),Object(b.jsxs)("p",{children:["Use your mouse to control",Object(b.jsx)("br",{})," playback speed :)"]})]})})}var w="bezos.mp3",g=new Audio(w);g.controls=!0,g.loop=!0,g.src=w;var y=function(){var e=i.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=i.a.useState(!1),s=Object(r.a)(c,2),o=s[0],d=s[1];return g.addEventListener("canplay",(function(e){return d(!0)})),Object(b.jsx)("div",{className:"App",children:n?o?Object(b.jsx)(O,{bezos:g}):Object(b.jsxs)("span",{children:["loading ",g.readyState," "]}):Object(b.jsx)(x,{onClick:function(){return a(!0)}})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.ee335253.chunk.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector(".html"),r=document.querySelector(".style"),e=document.querySelector(".draw"),a='/*你好，我是一名前端新人。\n下面开始画一个太极：*/\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n.html {\n    word-break: break-all; \n    padding: 10px;\n}\n\n/*无极生太极*/\n\n.draw {\n    border: 1px solid black;\n    width: 300px;\n    height: 300px;\n    border-radius: 50%;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n    border: none;\n    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);\n}\n\n/*太极生两仪*/\n\n.draw::before, .draw::after {\n    content: "";\n    display: block;\n    width: 150px;\n    height: 150px;\n    border: 1px solid black;\n    position: absolute; \n    left: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border: none;\n}\n.draw::before {\n    top: 0;\n    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n}\n.draw::after {\n    bottom: 0;\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);   \n}\n/*两仪生四象，四象生八卦*/\n\n\n.draw {\n    transition: 1.5s all;\n    transform: translateX(-50%) rotate(450deg);   \n}\n/* 巴啦啦能量---木拉拉---开！*/\n\n';console.log("字符长度：".concat(a.length));var o="",t=0,d=function d(){t<a.length&&(t===a.length-1&&setTimeout(function(){console.log("添加类"),e.classList+=" rotateInfinite animationStart"},1500),"\n"===a[t]?o+="<br>":" "===a[t]?o+="&nbsp":o+=a[t],n.innerHTML=o,r.innerHTML=a.substring(0,t+1),t+=1,window.scrollBy(0,9999),n.scrollBy(0,9999),setTimeout(function(){d()},20))};d();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.563f6e0f.js.map
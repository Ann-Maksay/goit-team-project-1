parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"D:\\Projekts\\goit-team-project-1\\src\\images\\svg\\arrow-right.svg":[["arrow-right.4e80b845.svg","WKeN"],"WKeN"],"./..\\images\\svg\\Group 4.svg":[["Group 4.1a36bef1.svg","WRF9"],"WRF9"],"./..\\images\\svg\\vect.svg":[["vect.713a96f2.svg","yMWR"],"yMWR"],"./..\\images\\background-lines.png":[["background-lines.1903ade9.png","Zkwu"],"Zkwu"],"./..\\images\\background-quotes.png":[["background-quotes.7652c3c3.png","LNk9"],"LNk9"],"./..\\images\\svg\\vectortwo.svg":[["vectortwo.9f8ad88e.svg","GNTu"],"GNTu"],"./..\\images\\sectionbg2one.png":[["sectionbg2one.c6fbdfea.png","BoQF"],"BoQF"],"./..\\images\\sectionbg2@2xtwo.png":[["sectionbg2@2xtwo.bc446070.png","koHm"],"koHm"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),function(){var e=document.querySelector(".header__burger"),c=document.querySelector(".header__close"),t=document.querySelector(".header__menu"),s=document.querySelector(".icon__open");e.addEventListener("click",function(){t.classList.toggle("header__menu--active"),s.classList.toggle("icon__open--close")}),c.addEventListener("click",function(){t.classList.toggle("header__menu--active"),s.classList.toggle("icon__open--close")})}();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-team-project-1/src.33a147a9.js.map
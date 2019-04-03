"use strict";
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
//SelfInvoked
var init = (function(){
  console.log("Hola mundo");
})();

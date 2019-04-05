"use strict";
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
var wHome = _("#homeUno"),
    wLoadCoupon = _("#loading"),
    textoEdo = _("#textoEdo"),
    cuponUno = _("#cuponUno"),
    mensajeUno = _("#mensajeUno"),
    proveedorUno = _("#proveedorUno"),
    preventW = _("#prevent"),
    preventTx = preventW.children[0];

var checkMobile = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkMobile = true;

function preventHeight(){
  if(!checkMobile){
  	var h = window.innerHeight;
  	if(h <= 350){
      preventTx.innerHTML = "Porfavor haz más grande tu ventana";
  		preventW.setAttribute("class", "displayFlex");
  	} else {
      preventTx.innerHTML = " ";
  		preventW.setAttribute("class", "displayNone");
  	}
  }
}

function preventRot(){
  if(checkMobile){
    if(window.orientation == 90 || window.orientation == -90){
      preventTx.innerHTML = "Porfavor voltea tu celular";
      preventW.setAttribute("class", "displayFlex");
    } else {
      preventTx.innerHTML = " ";
      preventW.setAttribute("class", "displayNone");
    }
  }
}


loadingImages();
function loadingImages(){
  var wLoad = _("#loading"),
      wHome = _("#homeUno"),
    back = false, bottle = false;
  loadEl("ui/img/back/", imgBack);
  loadEl("ui/img/producto/", imgBottle);
  function loadEl(url, name){
    var el = new XMLHttpRequest();
    el.open("GET", url+name, true);
    el.responseType = "blob";
    el.onload = function(e){
      if(this.readyState == 4){
        if(url === "ui/img/back/")back = true;
        if(url === "ui/img/back/")bottle = true;
        if(back && bottle){
          imgReady();
        }
      }
    }
    el.send();
  }
  function imgReady(){
    setTimeout(function(){
      wLoad.style.opacity = "0";
      wHome.setAttribute("class", "trans5");
      setTimeout(function(){
        wLoad.style.display = "none";
        wHome.style.opacity = "1";
      },700);
    },2000);
  }
}

function showLoadCoupon(){
  textoEdo.innerHTML = "Carga de cupón";
  wHome.style.opacity = "0";
  setTimeout(function(){
    textoEdo.setAttribute("style", " ");
    wLoadCoupon.setAttribute("style", "background:none");
    wHome.style.display = "none";
  },700);
}

function showCoupon(){
  textoEdo.style.opacity = "0";
  wLoadCoupon.style.opacity = "0";
  cuponUno.style.display = "block";
  setTimeout(function(){
    wLoadCoupon.setAttribute("style", "display:none");
    cuponUno.style.opacity = "1";
    textoEdo.innerHTML = "Cupón Listo";
    textoEdo.style.opacity = "1";
    proveedorUno.style.opacity = "1";
  },700);
}

function hideCoupon(){
  cuponUno.style.opacity = "0";
  setTimeout(function(){
    cuponUno.style.display = "none";
  },700)
}

function showMsg(n){
  var msg = mensajeUno.children[n];
  msg.setAttribute("style", " ");
  mensajeUno.setAttribute("style", " ");
  setTimeout(function(){
    mensajeUno.style.opacity = "1";
  },100);
}

function ctaCoupon(){
  showLoadCoupon();
  setTimeout(function(){
    showCoupon();
  },3000);
}

function ctaDownloadImg(){
  hideCoupon();
  //Si 0 = Mensaje de éxito
  //Si 1 = Mensaje de error
  showMsg(0);
}

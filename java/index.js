function btnClicked(){
    setTimeout(function () { window.location.href="https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacao?e=KL2BucbW1Ptm5UTtDwv%2BQuahPSYUaG2U"; }, 1100);
}

var ua = navigator.userAgent || window.opera || navigator.vendor;
var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
console.log(ua)
if (document.documentElement.classList ){
	if (isInstagram) {
        var element = document.getElementById('advice')
		element.classList.add('instagram-browser');
	}else{
        var element = document.getElementById('advice')
        element.classList.add('notvisible');
    }
}


const firstIntervalId = setInterval(() => {


    var element = document.getElementById("shine");
    element.classList.toggle("shiny-logo");
  }, 6000);
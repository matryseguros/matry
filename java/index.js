function btnClicked(){
    setTimeout(function () { window.location.href="https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacao?e=KL2BucbW1Ptm5UTtDwv%2BQuahPSYUaG2U"; }, 1100);
}

var ua = navigator.userAgent || window.opera || navigator.vendor;
var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

if (document.documentElement.classList ){
	if (isInstagram) {
		window.document.body.classList.add('instagram-browser');
	}
}

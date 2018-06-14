var headerShow, yyPos;

window.addEventListener("scroll", headerScroll);

function headerScroll() {
	headerShow = document.getElementById('header');
	yyPos = window.pageYOffset;

	if (yyPos > 500) {
		headerShow.style.height = '60px';
	}
	else {
		headerShow.style.height = '0px';
	}
}

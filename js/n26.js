var headerShow, pagebtm, yPos, yyPos, changeA, changeB, changeC;

window.addEventListener("scroll", yScroll);

function yScroll(){
    pagebtm = document.getElementById('btm_process');
    changeA = document.getElementById('processA');
    changeB = document.getElementById('processB');
    changeC = document.getElementById('processC');
    yPos = window.pageYOffset;

    if(yPos >= 200 && yPos <= 1400){ //resets
        pagebtm.style.height = "60px";
        changeA.style.color = '#4A4A4A'; 
        changeA.style.backgroundColor = 'transparent';
        changeB.style.color = '#4A4A4A'; 
        changeB.style.backgroundColor = 'transparent';
        changeC.style.color = '#4A4A4A'; 
        changeC.style.backgroundColor = 'transparent';
    } 
    else if(yPos >= 1401 && yPos <= 2050){ //problem
    	pagebtm.style.height = "60px";
    	changeA.style.color = '#FFFFFF'; 
        changeA.style.backgroundColor = '#4A4A4A'; 
        changeB.style.color = '#4A4A4A'; 
        changeB.style.backgroundColor = 'transparent'; 
        changeC.style.color = '#4A4A4A'; 
        changeC.style.backgroundColor = 'transparent';
    } 
    else if(yPos >= 2051 && yPos <= 4000){ //process
    	pagebtm.style.height = "60px";
    	changeA.style.color = '#4A4A4A'; 
        changeA.style.backgroundColor = 'transparent'; 
        changeB.style.color = '#FFFFFF'; 
        changeB.style.backgroundColor = '#4A4A4A'; 
        changeC.style.color = '#4A4A4A'; 
        changeC.style.backgroundColor = 'transparent';
    } 
    else if(yPos >= 4001 && yPos <= 5500){ //design
    	pagebtm.style.height = "60px";
    	changeA.style.color = '#4A4A4A'; 
        changeA.style.backgroundColor = 'transparent'; 
        changeB.style.color = '#4A4A4A'; 
        changeB.style.backgroundColor = 'transparent'; 
        changeC.style.color = '#FFFFFF'; 
        changeC.style.backgroundColor = '#4A4A4A';
    } 
    else {
        pagebtm.style.height = "0px";
        changeA.style.backgroundColor = 'transparent';
        changeB.style.backgroundColor = 'transparent';
        changeC.style.backgroundColor = 'transparent';
    }
}

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

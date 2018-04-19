
window.onload = function(){
	document.querySelector('.open-panel').addEventListener('click',function(){
		openPanel();
	})
	document.querySelector('.panel-overlay').addEventListener('click',function(){
		panelOverlay();
	},false)
}

function openPanel(){
	document.body.classList.add('with-panel-left-reveal');
	document.querySelector('.panel').style.display="block";
}
function panelOverlay(){
	document.body.classList.remove('with-panel-left-reveal');
	setTimeout(function () {
	    document.querySelector('.panel').style.display="";
	}, 400)
}


(function(){
	window.onload = function(){
		document.querySelector('body').addEventListener('click',function(e){
			let ev = e.target;
			if(document.querySelector('.home')){
				if (ev.classList.contains('open-panel')) {
					openPanel();
				}else if(ev.classList.contains('panel-overlay')){
					panelOverlay();
				}
			}
			
			
		})
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

})()
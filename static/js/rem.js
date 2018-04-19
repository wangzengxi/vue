(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
        clientWidth = (clientWidth > 540 ) ? 540 : clientWidth ;
        clientWidth = (clientWidth < 320 ) ? 320 : clientWidth ; 
        docEl.style.fontSize = 10 * (clientWidth / 320 ) + 'px';
	};
	if (!doc.addEventListener) return; 
	win.addEventListener(resizeEvt, recalc, false);
	recalc();
})(document, window);

(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			var clientHeight = docEl.clientHeight;
			if (!clientWidth && !clientHeight) return;
			docEl.style.fontSize = 50 * (clientWidth / 540) + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	//load
	recalc();
})(document, window);
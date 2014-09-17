(function() {

	"use strict";


// no scrolling in app
	document.ontouchmove = function(e) {
		e.preventDefault();
	};

	document.addEventListener("deviceready", function() {
		// device is ready, start app
		start();
	}, false);

	var isCordovaApp = !!window.cordova;
	if (!isCordovaApp) {
		// this is a browser...
		// ...so let's emulate vibration
		navigator.notification = {
			vibrate: function(amount) {
				console.log('vibrate ' + amount + 'ms');
			}
		};
		// and start app manually
		start();
	}


	function start() {
		// show app
		document.body.style.display = 'block';

		// make mathafakah shake
		document.getElementById('yeah').addEventListener('click', function() {
			navigator.notification.vibrate(100);
			var that = this;
			that.className = 'shake';
			setTimeout(function() {
				that.className = '';
			}, 500);
		}, false);
	}


})();
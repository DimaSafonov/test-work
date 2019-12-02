;(function() {

	var overlay	= document.querySelector('.overlay'),
		mOpen	= document.querySelectorAll('[data-modal]'),
		mClose	= document.querySelectorAll('[data-close]'),
		mStatus	= false;

	if (mOpen.length == 0) return;

	[].forEach.call(mOpen, function(el) {
		el.addEventListener('click', function(e) {
			var modalId	= el.getAttribute('data-modal'),
				modal	= document.getElementById(modalId);

			modalShow(modal);
		});
	});

	[].forEach.call(mClose, function(el) {
		el.addEventListener('click', modalClose);
	});

	document.addEventListener('keydown', modalClose);

	function modalShow(modal) {
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');
		if (typeAnimate == 'fade') {
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
		} else if (typeAnimate == 'slide') {
			modal.classList.remove('slideOutUp');
			modal.classList.add('slideInDown');
		}
		mStatus = true;
	}

	function modalClose(event) {
		if (mStatus && ( !event.keyCode || event.keyCode === 27 ) ) {
			var modals = document.querySelectorAll('.dlg-modal');

			[].forEach.call(modals, function(modal) {
				if (typeAnimate == 'fade') {
					modal.classList.remove('fadeIn');
					modal.classList.add('fadeOut');
				} else if (typeAnimate == 'slide') {
					modal.classList.remove('slideInDown');
					modal.classList.add('slideOutUp');
				}
			});

			overlay.classList.remove('fadeIn');
			overlay.classList.add('fadeOut');
			mStatus = false;
		}
	}
})();
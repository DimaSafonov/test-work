;(function() {
	var overlay = document.getElementById('overlay'),
		mOpen = document.querySelectorAll('[data-modal]'),
		mClose = document.querySelectorAll('[data-close]'),
		outer = document.querySelector('.modal-outer'),
		modals = document.querySelectorAll('.modal-outer > div'),
		duration = 400,
		mStatus = false,
		h = null;

	if (mOpen.length == 0) return;

	setTopOuter();

	function setTopOuter() {
		outer.style.top = -outer.offsetHeight + 'px';
	}

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
		mStatus = true;
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');
		modal.style.display = 'block';

		var start		= new Date().getTime(),
			startTop	= outer.getBoundingClientRect().top,
			finalTop	= (window.innerHeight - outer.offsetHeight) / 2,
			offset		= outer.offsetHeight + finalTop;

		var fn = function() {
			var now		= new Date().getTime() - start,
				currTop	= Math.round(startTop + offset * now / duration);

			currTop = (currTop > finalTop) ? finalTop : currTop;
			outer.style.top = currTop + 'px';

			if (currTop < finalTop) {
				requestAnimationFrame(fn);
			}
		}
		requestAnimationFrame(fn);
		window.addEventListener('resize', setTopOpenOuter);
	}

	function modalClose(event) {
		if (mStatus && ( !event.keyCode || event.keyCode === 27 ) ) {
			mStatus = false;

			var start		= new Date().getTime(),
				startTop	= outer.getBoundingClientRect().top,
				finalTop	= -outer.offsetHeight,
				offset		= outer.offsetHeight + (window.innerHeight - outer.offsetHeight) / 2;

			var fn = function() {
				var now		= new Date().getTime() - start,
					currTop	= Math.round(startTop - offset * now / duration);

				currTop = (currTop < finalTop) ? finalTop : currTop;
				outer.style.top = currTop + 'px';

				if (currTop > finalTop) {
					requestAnimationFrame(fn);
				} else {
					overlay.classList.remove('fadeIn');
					overlay.classList.add('fadeOut');
					[].forEach.call(modals, function(modal){
						modal.removeAttribute('style');
					});
				}
			}
			requestAnimationFrame(fn);
			window.removeEventListener('resize', setTopOpenOuter);
		}
	}

	function setTopOpenOuter() {
		outer.style.top = (window.innerHeight - outer.offsetHeight) / 2 + 'px';
	}
})();
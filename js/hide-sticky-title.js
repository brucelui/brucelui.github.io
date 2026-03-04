// Hide sticky "Results" title when projectEnd section enters viewport (mobile only)
(function() {
	'use strict';
	
	function isMobile() {
		return window.innerWidth <= 599;
	}
	
	document.addEventListener('DOMContentLoaded', function() {
		// Only run on mobile viewport
		if (!isMobile()) {
			return;
		}
		
		const projectEnd = document.querySelector('.projectEnd');
		
		// Find the "Results" title border by checking all projectTitleBorder elements
		const allTitleBorders = document.querySelectorAll('.projectTitleBorder');
		let resultsSectionLeft = null;
		
		for (let i = 0; i < allTitleBorders.length; i++) {
			const titleBorder = allTitleBorders[i];
			const h2 = titleBorder.querySelector('h2');
			if (h2 && h2.textContent.trim() === 'Results') {
				// Find the projectSectionLeft inside this title border
				resultsSectionLeft = titleBorder.querySelector('.projectSectionLeft');
				break;
			}
		}
		
		// Check if both elements exist
		if (!projectEnd || !resultsSectionLeft) {
			return;
		}
		
		// Create Intersection Observer
		const observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					// projectEnd is visible or approaching, hide the sticky title content
					resultsSectionLeft.classList.add('hide-sticky-title');
				} else {
					// projectEnd is not visible, show the sticky title content
					resultsSectionLeft.classList.remove('hide-sticky-title');
				}
			});
		}, {
			// Trigger when projectEnd is approaching (100px before it enters viewport)
			rootMargin: '100px 0px 0px 0px',
			threshold: 0
		});
		
		// Start observing projectEnd
		observer.observe(projectEnd);
		
		// Also handle window resize to re-check on orientation change
		let resizeTimer;
		window.addEventListener('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				if (!isMobile()) {
					// If no longer mobile, remove the class and stop observing
					resultsSectionLeft.classList.remove('hide-sticky-title');
					observer.disconnect();
				}
			}, 250);
		});
	});
})();


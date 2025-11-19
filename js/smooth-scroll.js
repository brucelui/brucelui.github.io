// Modern vanilla JavaScript smooth scroll implementation
// Replaces jQuery-based smooth scroll
(function() {
	'use strict';
	
	document.addEventListener('DOMContentLoaded', function() {
		document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
			anchor.addEventListener('click', function(e) {
				const href = this.getAttribute('href');
				
				// Skip empty hash links
				if (href === '#' || href === '#!') {
					return;
				}
				
				// Only handle same-page anchor links
				if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && 
				    location.hostname === this.hostname) {
					
					e.preventDefault();
					
					const targetId = href.substring(1);
					const target = document.getElementById(targetId) || 
					              document.querySelector('[name="' + targetId + '"]');
					
					if (target) {
						const offsetTop = target.offsetTop - 40;
						
						window.scrollTo({
							top: offsetTop,
							behavior: 'smooth'
						});
					}
				}
			});
		});
	});
})();


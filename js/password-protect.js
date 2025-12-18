/**
 * Password Protection Script
 * Redirects to password.html if user is not authenticated
 */

(function() {
	'use strict';

	const SESSION_STORAGE_KEY = 'case_study_authenticated';

	// Check if already authenticated in this session
	function isAuthenticated() {
		return sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
	}

	// Redirect to password page with return URL
	function redirectToPasswordPage() {
		const currentUrl = window.location.pathname;
		const passwordUrl = './password.html?return=' + encodeURIComponent(currentUrl);
		window.location.href = passwordUrl;
	}

	// Initialize password protection
	function init() {
		if (!isAuthenticated()) {
			redirectToPasswordPage();
		}
	}

	// Run when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

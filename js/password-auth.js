/**
 * Password Authentication Script
 * Handles password verification on password.html page
 * 
 * To change the password:
 * 1. Open browser console
 * 2. Run: async function hashPassword(pwd) { const encoder = new TextEncoder(); const data = encoder.encode(pwd); const hash = await crypto.subtle.digest('SHA-256', data); return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join(''); } hashPassword('yourNewPassword').then(console.log);
 * 3. Replace PASSWORD_HASH below with the output
 */

(function() {
	'use strict';

	// Password hash (SHA-256) - replace this with your desired password hash
	// Default password: "password" (change this!)
	const PASSWORD_HASH = '57168661084555e5d27d75eec6ebd279154bd912d27f2aab81b8a84bdf163ac5';

	const SESSION_STORAGE_KEY = 'case_study_authenticated';

	// Mark as authenticated
	function setAuthenticated() {
		sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
	}

	// Hash password using SHA-256
	async function hashPassword(password) {
		const encoder = new TextEncoder();
		const data = encoder.encode(password);
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	}

	// Verify password
	async function verifyPassword(password) {
		const hashedInput = await hashPassword(password);
		return hashedInput === PASSWORD_HASH;
	}

	// Get return URL from query parameters
	function getReturnUrl() {
		const params = new URLSearchParams(window.location.search);
		const returnUrl = params.get('return');
		return returnUrl || './index.html';
	}

	// Handle form submission
	async function handleSubmit(e) {
		e.preventDefault();

		const input = document.getElementById('password-input');
		const errorMsg = document.getElementById('password-error');
		const button = document.getElementById('password-submit');
		const password = input.value.trim();

		errorMsg.style.display = 'none';
		errorMsg.textContent = '';

		if (!password) {
			errorMsg.textContent = 'Please enter a password.';
			errorMsg.style.display = 'block';
			input.focus();
			return;
		}

		button.disabled = true;
		button.textContent = 'Checking...';

		try {
			const isValid = await verifyPassword(password);

			if (isValid) {
				setAuthenticated();
				const returnUrl = getReturnUrl();
				window.location.href = returnUrl;
			} else {
				errorMsg.textContent = 'Incorrect password. Please try again.';
				errorMsg.style.display = 'block';
				input.value = '';
				input.focus();
				button.disabled = false;
				button.textContent = 'Submit';
			}
		} catch (error) {
			console.error('Password verification error:', error);
			errorMsg.textContent = 'An error occurred. Please try again.';
			errorMsg.style.display = 'block';
			button.disabled = false;
			button.textContent = 'Submit';
		}
	}

	// Initialize
	function init() {
		const form = document.getElementById('password-form');
		const input = document.getElementById('password-input');

		if (form) {
			form.addEventListener('submit', handleSubmit);
		}

		// Focus input on load
		if (input) {
			input.focus();
		}

		// Allow Enter key to submit
		if (input) {
			input.addEventListener('keydown', function(e) {
				if (e.key === 'Enter') {
					e.preventDefault();
					handleSubmit(e);
				}
			});
		}
	}

	// Run when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();


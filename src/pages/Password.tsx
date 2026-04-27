import { StrictMode, useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from '../components/Header';

const SESSION_KEY = 'case_study_authenticated';
const PASSWORD_HASH = '57168661084555e5d27d75eec6ebd279154bd912d27f2aab81b8a84bdf163ac5';

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function getReturnUrl(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('return') || './index.html';
}

export const Password = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const password = inputRef.current?.value.trim() ?? '';

    if (!password) {
      setError('Please enter a password.');
      inputRef.current?.focus();
      return;
    }

    setError('');
    setLoading(true);

    try {
      const hash = await hashPassword(password);
      if (hash === PASSWORD_HASH) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        window.location.href = getReturnUrl();
      } else {
        setError('Incorrect password. Please try again.');
        if (inputRef.current) inputRef.current.value = '';
        inputRef.current?.focus();
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="passwordContainer" id="main-content">
        <div className="passwordModal">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxaGZmdDhhc241anlhOTR5NW54aDQ4YjM1M2YxdzJoN2FtN2R2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orieXilvlk5psxl7y/giphy.gif"
            alt="Password Required"
            className="passwordIcon"
          />
          <p>Please enter the password to view my case studies.</p>
          <form className="passwordForm" onSubmit={handleSubmit}>
            <label htmlFor="password-input" className="srOnly">Password</label>
            <input
              type="password"
              id="password-input"
              ref={inputRef}
              placeholder="Enter password"
              autoComplete="off"
            />
            {error && <div id="password-error">{error}</div>}
            <button type="submit" id="password-submit" disabled={loading}>
              {loading ? 'Checking...' : 'Submit'}
            </button>
          </form>
        </div>
        <br />
        <p>If you would like access, please <a href="mailto:brucelui9@gmail.com">email me</a>!</p>
      </div>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Password />
  </StrictMode>
);

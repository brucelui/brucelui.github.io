import { useEffect, useState } from 'react';

const SESSION_KEY = 'case_study_authenticated';

interface PasswordGateProps {
  children: React.ReactNode;
}

export const PasswordGate = ({ children }: PasswordGateProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setAuthenticated(true);
    } else {
      const returnUrl = window.location.pathname + window.location.search;
      window.location.href = `./password.html?return=${encodeURIComponent(returnUrl)}`;
    }
  }, []);

  if (!authenticated) return null;

  return <>{children}</>;
};

import { Button } from './Button';
import { trackEvent } from '../hooks/useAnalytics';

export const Footer = () => (
  <section id="goto_contact">
    <footer>
      <h2>
        you made it to the end! <br />
        perhaps we can keep in touch?
      </h2>
      <div className="buttonRow">
        <Button
          href="mailto:brucelui9@gmail.com"
          target="_blank"
          onClick={() => trackEvent('contact_click', { method: 'email' })}
        >
          shoot me an email
        </Button>
        <Button
          href="https://www.linkedin.com/in/brucelui/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('contact_click', { method: 'linkedin' })}
        >
          LinkedIn
        </Button>
      </div>
      <br />
      Designed with intent. Vibe coded via Cursor. Fueled by coffee.
      <br />&copy; {new Date().getFullYear()} Bruce Lui
    </footer>
  </section>
);

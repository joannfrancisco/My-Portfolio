export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Socials */}
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/joannfrancisco"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/joannfrancisco"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.behance.net/joannvfrancisco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          href="https://www.instagram.com/joannfrancisco.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <p className="footer-text">
        &copy; {currentYear} Jo Ann Francisco. All rights reserved.
      </p>
    </footer>
  );
}

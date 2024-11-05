import React from 'react';
import Logo from './Logo';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <Logo/>
    <p data-testid="footer-text">
      Sample project provided by <a href="https://neuralinverse.com">Neural Inverse</a>
    </p>
  </footer>
);

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container-fluid">
          <nav>
            <p class="copyright text-center">
              <Link href="/"> donstore</Link>, made with love for a better web
            </p>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;

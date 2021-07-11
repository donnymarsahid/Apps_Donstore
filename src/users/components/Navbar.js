import React from 'react';
import logo from '../img/logo.svg';
import { Person, Cart3, List } from 'react-bootstrap-icons';
import '../css/Style.css';
import '../css/Responsive.css';
import LinkCategory from './Link Nav/LinkCategory';
import LinkStore from './Link Nav/LinkStore';

function Navbar() {
  return (
    <>
      {/*Details Category Start */}
      <LinkCategory />
      {/*Details Category End */}
      {/*Details Store Start */}
      <LinkStore />
      {/*Details Store End */}
      <nav className="fixed-top shadow-sm">
        <div class="nav-store">
          <div class="profile">
            <h3>
              <Person size={35} className="profile-icons" />
            </h3>
          </div>
          <div class="logo-nav-link">
            <img src={logo} alt="donstore" className="donstore" />
            <div class="link">
              <a className="link-category">Category</a>
              <a className="link-store">Store</a>
              <a>Collection</a>
            </div>
          </div>
          <div class="basket basket-icons">
            <Cart3 size={30} className="basket-icon" />
            <p>(0)</p>
          </div>
          <div class="hamburger-menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <List size={30} />
          </div>
          {/* Hamburger Menu */}
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header" style={{ marginTop: '20px' }}>
              <img style={{ width: '100px' }} src={logo} alt="donstore" className="offcanvas-title donstore" id="offcanvasScrollingLabel" />
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div class="offcanvas-body">
              <a>Category</a>
              <br />
              <br />
              <a>Store</a>
              <br />
              <br />
              <a>Collection</a>
              <br />
              <hr />
              <a>Account</a>
            </div>
          </div>
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Backdroped with scrolling
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

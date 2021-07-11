import React from 'react';
import logo from '../img/logo.svg';
import { Person, Cart3, List } from 'react-bootstrap-icons';
import '../css/Style.css';
import '../css/Responsive.css';
import svg1 from '../img/1.svg';
import svg2 from '../img/2.svg';
import svg3 from '../img/3.svg';
import $ from 'jquery';

function Navbar() {
  $(document).ready(function () {
    $('.link-category').hover(() => {
      $('#details-nav').addClass('showDetailsNav');
    });
    $('.showDetailsNav').hover(
      () => {
        $('#details-nav').addClass('showDetailsNav');
      },
      () => {
        $('#details-nav').removeClass('showDetailsNav');
      }
    );
  });
  return (
    <>
      {/* Details Navbar Start */}
      <nav class="details fixed-top" id="details-nav">
        <div class="details-nav">
          <div class="container-nav-details">
            <div class="link-nav-details">
              <div class="link-nav">
                <p className="text-uppercase fw-bolder">shop by category</p>
                <p className="text-uppercase">all</p>
                <p className="text-uppercase">women</p>
                <p className="text-uppercase">man</p>
                <p className="text-uppercase">jacket</p>
              </div>
            </div>
            <div class="nav-images-sort">
              <div class="1">
                <img src={svg1} />
                <p className="text-uppercase">women</p>
              </div>
              <div class="2">
                <img src={svg2} />
                <p className="text-uppercase">man</p>
              </div>
              <div class="3">
                <img src={svg3} />
                <p className="text-uppercase">all</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Details Navbar End */}
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
              <a>Store</a>
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

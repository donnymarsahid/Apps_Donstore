import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';
import './css/Style.css';
import api from '../api/database';
import { Person, Cart3, Instagram, Linkedin, Github } from 'react-bootstrap-icons';

function User() {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(async () => {
    const response = await api.get('/category');
    setDataCategory(response.data);
  }, []);

  return (
    <>
      <nav>
        <div class="nav-store">
          <div class="profile">
            <h3>
              <Person size={35} className="profile-icons" />
            </h3>
          </div>
          <div class="logo-nav-link">
            <img src={logo} alt="donstore" className="donstore" />
            <div class="link">
              <a>Category</a>
              <a>Store</a>
              <a>Collection</a>
            </div>
          </div>
          <div class="basket basket-icons">
            <Cart3 size={30} className="basket-icons" /> (0)
          </div>
        </div>
      </nav>
      <div class="jumbotron text-center">
        <h3 class="display-4">ONLY HERE !</h3>
        <p>Various kinds of fashion are here</p>
        <a class="btn btn-lg">SHOW NOW</a>
      </div>
      <div class="category">
        <div class="text-category text-center">
          <h3>Category</h3>
        </div>
        <div class="row row-category ">
          {dataCategory.map((category) => {
            return (
              <div class="col-md-3">
                <img src={`http://localhost:3001/${category.images}`} alt={`http://localhost:3001/${category.images}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div class="brand ">
        <div class="text-brand">
          <div class="container-fluid">
            <h3>Leading Brand</h3>
          </div>
        </div>
        <div class="row row-brand ">
          {dataCategory.map((category) => {
            return (
              <div class="col-md-3 mb-5">
                <img src={`http://localhost:3001/${category.images}`} alt={`http://localhost:3001/${category.images}`} />
              </div>
            );
          })}
          <div class="col-md-3">
            <img src="" alt="" />
          </div>
          <div class="col-md-3">
            <img src="" alt="" />
          </div>
          <div class="col-md-6 btn-see">
            <button className="btn btn-see-more">see more</button>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-content">
          <div class="social-media">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <div class="social-media">
              <Instagram size={30} className="me-3 icons-social" />
              <Linkedin size={30} className="me-3 icons-social" />
              <Github size={30} className="icons-social" />
            </div>
          </div>
          <div class="copyright"> &copy; copyright Donny 2021 | all rights reserved</div>
          <div class="privacy">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default User;

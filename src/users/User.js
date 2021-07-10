import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';
import './css/Style.css';
import api from '../api/database';
import { Person, Cart3, Instagram, Linkedin, Github } from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function User() {
  const [dataCategory, setDataCategory] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(async () => {
    const response = await api.get('/category');
    setDataCategory(response.data);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <nav className="fixed-top shadow-lg">
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
        <div class="row row-category  ">
          {dataCategory.map((category) => {
            return (
              <div class="col-md-3">
                <p className="text-center">{category.name}</p>
                <div class="overlay">
                  <a class="btn btn-lg">SHOW NOW</a>
                </div>
                <img src={`http://localhost:3001/${category.images}`} alt={`http://localhost:3001/${category.images}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div class="women-man">
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="women d-block w-100" alt="First slide" />
            <Carousel.Caption className="caption-women">
              <div class="description">
                <h3>there are some fashion</h3>
                <a class="btn btn-style">
                  <h3>FOR WOMEN</h3>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="man d-block w-100" alt="Second slide" />
            <Carousel.Caption className="caption-women">
              <div class="description">
                <h3 className="fw-light">there are some fashion</h3>
                <a class="btn btn-style">
                  <h3>FOR MAN</h3>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="leading-brand row-slick">
        <div class="container-fluid">
          <div class="text-category ">
            <h3>Leading Brand</h3>
          </div>
        </div>
        <Slider {...settings}>
          {dataCategory.map((category) => {
            return (
              <div class="col-md-12">
                <div class="details">
                  <img src={`http://localhost:3001/${category.images}`} />
                </div>
              </div>
            );
          })}
        </Slider>
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

import React, { useState, useEffect } from 'react';
import './css/Style.css';
import api from '../api/database';
import { Carousel } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import women from './img/women.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrow: true,
};
function User() {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataLeadingBrand, setDataLeadingBrand] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(async () => {
    const response = await api.get('/category');
    setDataCategory(response.data);
  }, []);

  api.get('/leadingBrand').then((response) => {
    setDataLeadingBrand(response.data);
  });

  return (
    <>
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}
      {/* Jumbotron Start */}
      <div class="jumbotron text-center">
        <h3 class="display-4">ONLY HERE !</h3>
        <p>Various kinds of fashion are here</p>
        <a class="btn btn-lg">SHOW NOW</a>
      </div>
      {/* Jumbotron End */}
      {/* Leading Brand Start */}
      <div class="leading-brand">
        <div class="container-fluid">
          <div class="text-brand">
            <h3>Leading Brand</h3>
          </div>
          <div class="row">
            {dataLeadingBrand.map((brand) => {
              return (
                <div class="col-md-3">
                  <img src={`http://localhost:3001/brand/${brand.images}`} alt={`http://localhost:3001/brand/${brand.images}`} />
                  <p>{brand.name}</p>
                  <p className="text-decoration-underline">Shop Now</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Leading Brand End */}
      {/* Content Jumbotron Start */}
      <div class="jumbotron-content">
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="women d-block w-100" alt="First slide" />
            <Carousel.Caption className="container-carousel">
              <div class="content">
                <h3>fashion brand available</h3>
                <a class="btn btn-lg">for women</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="man d-block w-100" alt="Second slide" />
            <Carousel.Caption className="container-carousel">
              <div class="content">
                <h3>fashion brand available</h3>
                <a class="btn btn-lg">for man</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Content Jumbotron End */}
      {/* Category Start */}
      <div class="container-fluid">
        <div class="category">
          <div class="text-category">
            <h3>Shop by Category</h3>
          </div>
          <div className="row-category">
            <Slider {...settings} className="row">
              {dataCategory.map((category) => {
                return (
                  <div class="col-md-12">
                    <img src={`http://localhost:3001/${category.images}`} alt={`http://localhost:3001/${category.images}`} />
                    <p className="text-decoration-underline text-uppercase">{category.name}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Category End */}
      {/* Promo Start */}
      <div class="promo text-center">
        <p>Discount 20% | for first order</p>
        <p>Register first to get a Discount 20%</p>
        <button className="btn btn-sign-up">Sign Up</button>
      </div>
      {/* Promo End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}

export default User;

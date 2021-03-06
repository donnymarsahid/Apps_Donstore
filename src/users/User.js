import React, { useState, useEffect } from 'react';
import './css/Style.css';
import api from '../api/database';
import { Carousel } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Link } from 'react-router-dom';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrow: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
function User() {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCollections, setDataCollections] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    api.get('/category/').then((response) => {
      setDataCategory(response.data);
    });
  }, []);

  api.get('/collections/').then((response) => {
    setDataCollections(response.data);
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
        <Link to="/comingsoon">
          <p class="btn btn-lg">SHOW NOW</p>
        </Link>
      </div>
      {/* Jumbotron End */}
      {/* Collections Start */}
      <div class="collections">
        <div class="container-fluid">
          <div class="text-collection">
            <h3 class="textHeading">Collections</h3>
          </div>
          <div class="row">
            {dataCollections.map((collections) => {
              return (
                <div class="col-md-3">
                  <Link to="/comingsoon">
                    <img src={`http://localhost:3001/collections/${collections.images}`} alt={`http://localhost:3001/collections/${collections.images}`} />
                  </Link>
                  <p>{collections.name}</p>
                  <Link to="/comingsoon">
                    <p className="text-decoration-underline">Shop Now</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Collections End */}
      {/* Content Jumbotron Start */}
      <div class="jumbotron-content">
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="women d-block w-100" alt="First slide" />
            <Carousel.Caption className="container-carousel">
              <div class="content">
                <h3>fashion brand available</h3>
                <Link to="/comingsoon">
                  <p class="btn btn-lg ">for women</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="man d-block w-100" alt="Second slide" />
            <Carousel.Caption className="container-carousel">
              <div class="content">
                <h3>fashion brand available</h3>
                <Link to="/comingsoon">
                  <p class="btn btn-lg ">for man</p>
                </Link>
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
            <h3 class="textHeading">Shop by Category</h3>
          </div>
          <div className="row-category">
            <Slider {...settings} className="row">
              {dataCategory.map((category) => {
                return (
                  <div class="col-md-12">
                    <Link to="/comingsoon">
                      <img src={`http://localhost:3001/category/${category.images}`} alt={`http://localhost:3001/category/${category.images}`} />
                    </Link>
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
        <Link to="/comingsoon">
          <button className="btn btn-sign-up">Sign Up</button>
        </Link>
      </div>
      {/* Promo End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}

export default User;

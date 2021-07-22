import React from 'react';
import svg1 from '../../img/1.svg';
import svg2 from '../../img/2.svg';
import svg3 from '../../img/3.svg';
import $ from 'jquery';

function LinkCategory() {
  $(document).ready(function () {
    $('.link-category').hover(() => {
      $('#details-store').removeClass('showDetailsStore');
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
      <nav class="details fixed-top" id="details-nav">
        <div class="details-nav">
          <div class="container-nav-details">
            <div class="link-nav-details">
              <div class="link-nav">
                <p className="text-uppercase fw-bolder">shop by category</p>
                <p className="text-uppercase">
                  <a href="#">all</a>
                </p>
                <p className="text-uppercase">
                  <a href="#">women</a>
                </p>
                <p className="text-uppercase">
                  <a href="#">man</a>
                </p>
                <p className="text-uppercase">
                  <a href="#">jacket</a>
                </p>
              </div>
            </div>
            <div class="nav-images-sort">
              <div class="1">
                <img src={svg1} />
                <p className="text-uppercase">
                  <a href="#">women</a>
                </p>
              </div>
              <div class="2">
                <img src={svg2} />
                <p className="text-uppercase">
                  <a href="#">man</a>
                </p>
              </div>
              <div class="3">
                <img src={svg3} />
                <p className="text-uppercase">
                  <a href="#">all</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LinkCategory;

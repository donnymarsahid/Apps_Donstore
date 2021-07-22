import React from 'react';
import store from '../../img/store.svg';
import $ from 'jquery';

function LinkStore() {
  $(document).ready(function () {
    $('.link-store').hover(() => {
      $('#details-nav').removeClass('showDetailsNav');
      $('#details-store').addClass('showDetailsStore');
    });
    $('.showDetailsStore').hover(
      () => {
        $('#details-store').addClass('showDetailsStore');
      },
      () => {
        $('#details-store').removeClass('showDetailsStore');
      }
    );
  });
  return (
    <>
      <nav class="details-store fixed-top" id="details-store">
        <div class="details-nav-store">
          <div class="container-nav-details-store">
            <div class="nav-images-sort-store">
              <div class="1">
                <img src={store} />
                <p className="text-uppercase">
                  <a href="#">Donstore in jakarta city</a>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LinkStore;

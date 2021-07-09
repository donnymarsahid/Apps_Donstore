import React, { Component } from 'react';
import api from '../api/database';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default class AddCategory extends Component {
  // Add Post Category to Database
  state = {
    name: '',
    images: '',
  };

  // Get Value Input
  addCategoryName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addCategoryImages = (e) => {
    this.setState({ [e.target.name]: e.target.files[0].name });
  };

  // Event Submit
  submitAdd = async (e) => {
    e.preventDefault();
    const response = await api.post('/addCategory', this.state);
    console.log(response);
  };

  render() {
    return (
      <div>
        <div class="wrapper">
          {/* Sidebar Start */}
          <Sidebar />
          {/* Sidebar End */}
          <div class="main-panel setting-for-sidebar">
            {/* Navbar Start */}
            <Navbar />
            {/* Navbar End */}
            {/* addCategory-content Start */}
            <div class="content">
              <div class="container-fluid ">
                <h3>Add Category</h3>
                <form onSubmit={this.submitAdd}>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name :
                    </label>
                    <input type="text" class="form-control" id="name" name="name" onChange={this.addCategoryName} autoComplete="off" />
                  </div>
                  <div class="mb-3">
                    <label for="images" class="form-label">
                      Images :
                    </label>
                    <input type="file" class="form-control" id="images" name="images" onChange={this.addCategoryImages} />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            {/* addCategory-content End */}
            {/* Footer Start */}
            <Footer />
            {/* Footer End */}
          </div>
        </div>
      </div>
    );
  }
}

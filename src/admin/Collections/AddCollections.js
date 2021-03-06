import React, { Component } from 'react';
import api from '../../api/database';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';

export default class AddCollections extends Component {
  // Add Post Category to Database
  state = {
    name: '',
    images: '',
    status: '',
  };

  // Get Value Input
  addCollection = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addCollectionImages = (e) => {
    this.setState({ [e.target.name]: e.target.files[0].name });
  };

  // Event Submit
  submitAdd = async (e) => {
    e.preventDefault();
    const response = await api.post('/addCollections', this.state);
    if (response.data.message) {
      this.setState({
        status: response.data.message,
      });
    }
    console.log(response);
  };

  render() {
    // Access Token
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }
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
                <h3>Add Collections</h3>
                {this.state.status && (
                  <div class="alert alert-success" role="alert">
                    {this.state.status}
                  </div>
                )}
                <form onSubmit={this.submitAdd}>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name :
                    </label>
                    <input type="text" class="form-control" id="name" name="name" onChange={this.addCollection} autoComplete="off" />
                  </div>
                  <div class="mb-3">
                    <label for="images" class="form-label">
                      Images :
                    </label>
                    <input type="file" class="form-control" id="images" name="images" onChange={this.addCollectionImages} />
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

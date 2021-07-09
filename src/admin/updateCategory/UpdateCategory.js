import React, { Component } from 'react';
import api from '../../api/database';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';

export default class UpdateCategory extends Component {
  // Add Post Category to Database
  state = {
    name: '',
    images: '',
    message: '',
  };

  componentDidMount() {
    const id = this.props.match.params.idEdit;
    api.get(`/editCategory/${id}`).then((response) => {
      this.setState({
        name: response.data.name,
      });
    });
  }

  // Get Value Input
  addCategoryName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addCategoryImages = (e) => {
    this.setState({ [e.target.name]: e.target.files[0].name });
  };

  // Event Submit
  submitUpdate = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.idEdit;
    const response = await api.put(`/updateCategory/${id}`, this.state);
    if (response.data.message) {
      this.setState({
        message: response.data.message,
      });
    }
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
                <h3>Edit Category</h3>
                {this.state.message && (
                  <div class="alert alert-success" role="alert">
                    {this.state.message}
                  </div>
                )}
                <form onSubmit={this.submitUpdate}>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name :
                    </label>
                    <input type="text" class="form-control" id="name" value={this.state.name} name="name" onChange={this.addCategoryName} autoComplete="off" />
                  </div>
                  <div class="mb-3">
                    <label for="images" class="form-label">
                      Images :
                    </label>
                    <input type="file" class="form-control" id="images" name="images" onChange={this.addCategoryImages} required />
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

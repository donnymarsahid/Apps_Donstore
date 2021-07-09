import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/style.css';
import api from '../api/database';
import EditCategory from './EditCategory';
import { Redirect } from 'react-router-dom';

export default class CardEditCategory extends Component {
  // Get Data Category
  state = {
    category: [],
  };

  componentDidMount = async () => {
    const response = await api.get('/category');
    this.setState({
      category: response.data,
    });
  };

  render() {
    // Access Token
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }

    const dataCategory = this.state.category.map((category, index) => {
      return <EditCategory category={category} key={category.id_category} number={index + 1} refresh={this.componentDidMount} />;
    });
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
            {/* dashboard-content Start */}
            <div class="content">
              <div class="container-fluid table-full-width table-responsive">
                <div class="card-header">
                  <h4 class="card-title">Edit Category</h4>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                  </thead>
                  <tbody>{dataCategory}</tbody>
                </table>
              </div>
            </div>
            {/* dashboard-content End */}
            {/* Footer Start */}
            <Footer />
            {/* Footer End */}
          </div>
        </div>
      </div>
    );
  }
}

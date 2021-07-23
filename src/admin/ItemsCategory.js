import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import api from '../api/database';
import { Redirect } from 'react-router-dom';
// Get Data Category

export default class ItemsCategory extends Component {
  state = {
    category: [],
  };

  componentDidMount = async () => {
    const response = await api.get('/category/');
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

    const dataCategory = this.state.category.map((category) => {
      return (
        <div class="col-md-4">
          <div class="card" style={{ width: '18rem' }}>
            <img src={`http://localhost:3001/category/${category.images}`} class="card-img-top" alt={category.images} />
            <div class="card-body">
              <h5 class="card-title">{category.name}</h5>
              <a href="/" class="btn btn-primary">
                Item
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
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
                <h3>Items Category</h3>
                <div class="row">{dataCategory}</div>
              </div>
              {/* addCategory-content End */}
              {/* Footer Start */}
              <Footer />
              {/* Footer End */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

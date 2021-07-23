import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import api from '../api/database';
import { Redirect } from 'react-router-dom';
// Get Data Category

export default class ItemsCollections extends Component {
  state = {
    collections: [],
  };

  componentDidMount = async () => {
    const response = await api.get('/collections/');
    this.setState({
      collections: response.data,
    });
  };

  render() {
    // Access Token
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }

    const dataCollections = this.state.collections.map((collections) => {
      return (
        <div class="col-md-4">
          <div class="card" style={{ width: '18rem' }}>
            <img src={`http://localhost:3001/collections/${collections.images}`} class="card-img-top" alt={collections.images} />
            <div class="card-body">
              <h5 class="card-title">{collections.name}</h5>
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
                <h3>Items Collections</h3>
                <div class="row">{dataCollections}</div>
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

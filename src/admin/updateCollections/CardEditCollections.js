import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../components/style.css';
import api from '../../api/database';
import { Redirect } from 'react-router-dom';
import EditCollections from './EditCollections';

export default class CardEditCollections extends Component {
  // Get Data Category
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

    const dataCollections = this.state.collections.map((collections, index) => {
      return <EditCollections collections={collections} key={collections.id_collections} number={index + 1} refresh={this.componentDidMount} />;
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
                  <h4 class="card-title">Edit Collections</h4>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                  </thead>
                  <tbody>{dataCollections}</tbody>
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

import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/style.css';
import api from '../api/database';
import CardCategory from './CardCategory';
import CardCollections from './CardCollections';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
  // Get Data Category
  state = {
    category: [],
    collections: [],
  };

  async componentDidMount() {
    const response = await api.get('/category/');
    this.setState({
      category: response.data,
    });
    const responseCollections = await api.get('/collections/');
    this.setState({
      collections: responseCollections.data,
    });
  }

  render() {
    const dataCategory = this.state.category.map((category, index) => {
      return <CardCategory category={category} key={category.id_category} number={index + 1} />;
    });
    const dataCollections = this.state.collections.map((collections, index) => {
      return <CardCollections collections={collections} key={collections.id_collections} number={index + 1} />;
    });

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
            {/* dashboard-category Start */}
            <div class="content">
              <div class="container-fluid table-full-width table-responsive">
                <div class="card-header">
                  <h4 class="card-title">Category Products</h4>
                  <p class="card-category text-muted">Details category</p>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Update at</th>
                    <th>Images</th>
                  </thead>
                  <tbody>{dataCategory}</tbody>
                </table>
              </div>
            </div>
            {/* dashboard-category End */}
            {/* dashboard-collections Start */}
            <div class="content">
              <div class="container-fluid table-full-width table-responsive">
                <div class="card-header">
                  <h4 class="card-title">Collections</h4>
                  <p class="card-category text-muted">Details collections</p>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Update at</th>
                    <th>Images</th>
                  </thead>
                  <tbody>{dataCollections}</tbody>
                </table>
              </div>
            </div>
            {/* dashboard-collections End */}
            {/* Footer Start */}
            <Footer />
            {/* Footer End */}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/style.css';
import api from '../api/database';
import CardCategory from './CardCategory';

export default class Dashboard extends Component {
  // Get Data Category
  state = {
    category: [],
  };

  async componentDidMount() {
    const response = await api.get('/category');
    this.setState({
      category: response.data,
    });
  }

  render() {
    const dataCategory = this.state.category.map((category, index) => {
      return <CardCategory category={category} key={category.id_category} number={index + 1} />;
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
                  <h4 class="card-title">Category Products</h4>
                  <p class="card-category text-muted">Details category</p>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Update at</th>
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

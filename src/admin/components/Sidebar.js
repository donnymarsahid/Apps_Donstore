import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-wrapper">
          <div class="logo">
            <Link to="/admin" class="simple-text" style={{ textDecoration: 'none' }}>
              DONSTORE
            </Link>
          </div>
          <ul class="nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/admin" style={{ backgroundColor: 'transparent' }}>
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Dashboard</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/addCategory">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Add Category</p>
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/edit">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Edit Category</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/addCollections">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Add Collections</p>
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/editCollect">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Edit Collections</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

import React, { useState, Fragment } from 'react';
import api from '../api/database';
import { Redirect } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [statusLogin, setStatusLogin] = useState('');

  const [redirect, setRedirect] = useState(false);

  const submitLogin = async (e) => {
    e.preventDefault();
    const response = await api.post('/login', {
      username: username,
      password: password,
    });
    if (response.data.message) {
      setStatusLogin(response.data.message);
    } else {
      localStorage.setItem('token', response.data.token);
      setRedirect(true);
    }
  };

  return (
    <Fragment>
      {redirect && <Redirect to="/admin" />}
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src="./assetsLogin/images/img-01.png" alt="IMG" />
            </div>

            <form class="login100-form validate-form" onSubmit={submitLogin}>
              <span class="login100-form-title">Admin Login</span>
              {statusLogin && (
                <div class="alert alert-success" role="alert">
                  {statusLogin}
                </div>
              )}

              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="username"
                  autoComplete="off"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  class="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">Login</button>
              </div>

              <div class="text-center p-t-12">
                <span class="txt1">Forgot</span>
                <a class="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div class="text-center p-t-136">
                <a class="txt2" href="#">
                  Create your Account
                  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;

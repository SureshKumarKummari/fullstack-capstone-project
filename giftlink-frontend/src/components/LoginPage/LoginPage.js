import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // If you already have a backend login endpoint, wire it here.
    // This keeps the UI functional and avoids a build-breaking syntax error.
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    navigate('/app');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error ? <div className="text-danger mb-3">{error}</div> : null}

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>
            </form>

            <p className="mt-4 text-center">
              New here? <a href="/app/register" className="text-primary">Register Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addEmail } from '../services/funcs';
import loginImage from '../images/login-image.svg';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let disabled = true;
  const regexEmail = /[\w\d]*@[\w\d]*[.][\w]{2,3}/i;
  if (regexEmail.test(email) && password.length > +'6') {
    disabled = false;
  }

  return (
    <div className="page-login">
      <div className="login-box">
        <img src={ loginImage } alt="logo" />
        <label htmlFor="email">
          <p>Email:</p>
          <input
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            id="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            id="password"
            type="password"
            data-testid="password-input"
          />
        </label>
        <Link to="/comidas">
          <button
            disabled={ disabled }
            data-testid="login-submit-btn"
            type="button"
            onClick={ () => addEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addEmail } from '../services/funcs';
import loginImage from '../images/login-image.svg';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '../css/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
            placeholder="email@email.com"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            autoComplete="off"
            id="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label
          className="password"
          htmlFor="password"
        >
          <p>Password:</p>
          <input
            value={ password }
            placeholder='Password...'
            onChange={ ({ target: { value } }) => setPassword(value) }
            id="password"
            type={ showPassword ? "text" : "password" }
            data-testid="password-input"
          />
          <button
            className="password-button"
            onClick={ () => setShowPassword(!showPassword) }
          >
            { showPassword ? <AiFillEye /> : <AiFillEyeInvisible /> }
          </button>
        </label>
        <Link to="/recipes-app/comidas">
          <button
            className="login-bot"
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

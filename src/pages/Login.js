import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  isFormValid = () => {
    const { email, password } = this.state;
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const minPasswordLength = 6;
    return emailPattern.test(email) && password.length >= minPasswordLength;
  };

  handleLogin = () => {
    const { isFormValid, history, dispatch } = this.props;

    if (isFormValid()) {
      const { email } = this.state;
      dispatch(setEmail(email));
      history.push('/carteira');
    }
  };

  render() {
    const { email, password } = this.state;
    const isFormValid = this.isFormValid();

    return (
      <div>
        <label htmlFor="email-input">E-mail:</label>
        <input
          type="email"
          id="email-input"
          data-testid="email-input"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={ email }
          onChange={ this.handleEmailChange }
          required
        />

        <br />

        <label htmlFor="password-input">Senha:</label>
        <input
          type="password"
          id="password-input"
          data-testid="password-input"
          minLength={ 6 }
          value={ password }
          onChange={ this.handlePasswordChange }
          required
        />

        <br />

        <button type="button" disabled={ !isFormValid } onClick={ this.handleLogin }>
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  isFormValid: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    // other expected properties of the history object
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);

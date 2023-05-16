import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    totalExpenses: 0,
    exchange: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { totalExpenses, exchange } = this.state;
    return (
      <>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{totalExpenses}</div>
        <div data-testid="header-currency-field">{exchange}</div>
      </>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);

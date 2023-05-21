import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  somaExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses);
    const somaTotal = expenses
      .reduce((previousValue, { currency, exchangeRates, value }) => {
        const convertedValue = parseFloat(value) * exchangeRates[currency].ask;
        return previousValue + convertedValue;
      }, 0);

    const somaTotalRounded = somaTotal.toFixed(2);

    return somaTotalRounded;
  };

  render() {
    const { email } = this.props;
    return (
      <>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{this.somaExpenses()}</div>
        <div data-testid="header-currency-field">BRL</div>
      </>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);

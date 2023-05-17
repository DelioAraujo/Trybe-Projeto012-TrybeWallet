import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    totalExpenses: 0,
    exchange: 'BRL',
  };

  componentDidMount() {
    this.somaExpenses();
  }

  componentDidUpdate(prevProps) {
    const { totalExpenses, rates } = this.props;

    if (totalExpenses !== prevProps.totalExpenses || rates !== prevProps.rates) {
      this.somaExpenses();
    }
  }

  somaExpenses = () => {
    const { totalExpenses, rates } = this.props;
    const somaTotal = totalExpenses
      .reduce((previousValue, { currency, expenseValue }) => {
        const convertedValue = parseFloat(expenseValue) * rates[currency].ask;
        return previousValue + convertedValue;
      }, 0);

    const somaTotalRounded = somaTotal.toFixed(2);

    this.setState({ totalExpenses: somaTotalRounded });

    return somaTotal;
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
  totalExpenses: globalState.wallet.expenses,
  rates: globalState.wallet.rates,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);

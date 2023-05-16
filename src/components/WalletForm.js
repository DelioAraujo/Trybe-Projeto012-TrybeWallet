import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAndSetCurrencies } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAndSetCurrencies());
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="value-input">Valor da Despesa:</label>
            <input type="number" id="value-input" data-testid="value-input" />
          </div>
          <div>
            <label htmlFor="description-input">Descrição da Despesa:</label>
            <input type="text" id="description-input" data-testid="description-input" />
          </div>
          <div>
            <label htmlFor="currency-input">Moeda:</label>
            <select id="currency-input" data-testid="currency-input">
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="method-select">Método de Pagamento:</label>
            <select id="method-select" data-testid="method-input">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </div>
          <div>
            <label htmlFor="tag-select">Categoria:</label>
            <select id="tag-select" data-testid="tag-input">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

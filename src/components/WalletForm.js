import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAndSetCurrencies, newExpenseUpdate } from '../redux/actions';
import { apiRequest } from '../services/API';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,

  };

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAndSetCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const exchangeRates = await apiRequest(); // Aguarda a conclusão da chamada da API

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    const { value, description, currency, method, tag, id } = this.state;
    const newExpense = {
      value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates,
    };

    const { dispatch } = this.props;
    dispatch(newExpenseUpdate(newExpense));

    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency } = this.state;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="value-input">Valor da Despesa:</label>
            <input
              name="value"
              onChange={ this.handleChange }
              value={ value }
              type="number"
              id="value-input"
              data-testid="value-input"
            />
          </div>
          <div>
            <label htmlFor="description-input">Descrição da Despesa:</label>
            <input
              name="description"
              onChange={ this.handleChange }
              value={ description }
              type="text"
              id="description-input"
              data-testid="description-input"
            />
          </div>
          <div>
            <label htmlFor="currency-input">Moeda:</label>
            <select
              id="currency-input"
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleInput }
            >
              {currencies.map((item) => (
                <option key={ item } value={ item }>{item}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="method-select">Método de Pagamento:</label>
            <select
              name="method"
              onChange={ this.handleInput }
              id="method-select"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </div>
          <div>
            <label htmlFor="tag-select">Categoria:</label>
            <select
              name="tag"
              onChange={ this.handleInput }
              id="tag-select"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={ this.handleClick }>
              Adicionar despesa
            </button>
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

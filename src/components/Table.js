import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { totalExpenses, rates } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  totalExpenses: globalState.wallet.expenses,
  rates: globalState.wallet.rates,
});

export default connect(mapStateToProps)(Table);

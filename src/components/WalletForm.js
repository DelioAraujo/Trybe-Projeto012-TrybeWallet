import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    return (
      <div>WalletForm</div>
    );
  }
}

const mapStateToProps = (globalState) => {
  console.log(globalState);
};

export default connect(mapStateToProps)(WalletForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    return (
      <div>Table</div>
    );
  }
}

const mapStateToProps = (globalState) => {
  console.log(globalState);
};

export default connect(mapStateToProps)(Table);

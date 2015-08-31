import React, { Component } from 'react';
import { connect } from 'react-redux';

import Register from '../../components/Register/Register';

// Actions
import {
  addTodo
} from '../../stores';


// function mapDispatchToProps(dispatch) {
//     return {
//         onIncrement: () => dispatch(increment())
//     };
// }

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    i18: state.i18
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
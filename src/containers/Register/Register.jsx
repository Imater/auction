import React, { Component } from 'react';
import { connect } from 'react-redux';

import Register from '../../components/Register/Register';

// Actions
import {
  createUser
} from '../../stores/user';


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
    onCreateUser: (body) => dispatch(createUser(body))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

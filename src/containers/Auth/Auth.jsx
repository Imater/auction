import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../../components/Auth/Auth';

// Actions
import {
  addTodo
} from '../../stores';
//
// Actions
import {
  userInfo,
  restorePassword
} from '../../stores/user';


// function mapDispatchToProps(dispatch) {
//     return {
//         onIncrement: () => dispatch(increment())
//     };
// }

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    i18: state.i18,
    user: state.user.toObject ? state.user.toObject() : state.user
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onUserInfo: (body, cb) => dispatch(userInfo(body, cb)),
    onRestorePassword: (body) => dispatch(restorePassword(body))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

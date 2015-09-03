import React, { Component } from 'react';
import { connect } from 'react-redux';

import Register from '../../components/Register/Register';

// Actions
import {
  createUser,
  userInfo,
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
    onCreateUser: (body, cb) => dispatch(createUser(body, cb)),
    onUserInfo: (body, cb) => dispatch(userInfo(body, cb)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

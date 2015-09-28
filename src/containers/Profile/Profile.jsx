import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../components/Profile/Profile';

// Actions
import {
  createUser,
  userInfo,
  userExit
} from '../../stores/user';

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    i18: state.i18,
    user: state.user.toObject ? state.user.toObject() : state.user
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onCreateUser: (body, cb) => dispatch(createUser(body, cb)),
    onUserInfo: (body, cb) => dispatch(userInfo(body, cb)),
    onUserExit: (body, cb) => dispatch(userExit(body, cb))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../../components/Auth/Auth';

// Actions
import {
  addTodo
} from '../../actions/todoActions';


// function mapDispatchToProps(dispatch) {
//     return {
//         onIncrement: () => dispatch(increment())
//     };
// }

class AuthContainer extends Component {
  render() {
    return (
      <Auth {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray()
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

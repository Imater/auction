import { connect } from 'react-redux';

import Main from '../../components/Main/Main';

// Actions
import {
  addTodo,
  deleteTodo
} from '../../stores/todos';
//
// Actions
import {
  userExit
} from '../../stores/user';

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    language: state.i18.language ? state.i18.language.toString() : 'ru',
    user: state.user.toObject ? state.user.toObject() : state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id)),
    onUserExit: (data) => dispatch(userExit(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

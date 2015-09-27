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

import {
  changeSort
} from '../../stores/options';

function mapStateToProps(state) {
  return {
    listData: state.todos,
    language: state.i18.toObject ? state.i18.toObject().language : state.i18.language,
    user: state.user.toObject ? state.user.toObject() : state.user,
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id)),
    onUserExit: (data) => dispatch(userExit(data)),
    onChangeSort: (sort) => dispatch(changeSort(sort))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

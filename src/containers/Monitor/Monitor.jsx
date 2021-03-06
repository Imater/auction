import { connect } from 'react-redux';

import Monitor from '../../components/Monitor/Monitor';

// Actions
import {
  addTodo,
  deleteTodo
} from '../../stores/todos';

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    language: state.i18.language ? state.i18.language.toString() : 'ru'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);

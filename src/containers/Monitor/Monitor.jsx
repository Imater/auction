import { connect } from 'react-redux';

import Monitor from '../../components/Monitor/Monitor';

// Actions
import {
  addTodo,
  deleteTodo
} from '../../stores/todos';

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);

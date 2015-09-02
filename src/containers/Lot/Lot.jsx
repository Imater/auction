import { connect } from 'react-redux';

import Lot from '../../components/Lot/Lot';

// Actions
import {
  addTodo,
  deleteTodo,
  addBid
} from '../../stores/todos';

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
    onAddBid: (body) => dispatch(addBid(body)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lot);

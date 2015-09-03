import { connect } from 'react-redux';

import Lot from '../../components/Lot/Lot';

// Actions
import {
  addTodo,
  deleteTodo,
  addBid,
  addBidAdmin,
  sold
} from '../../stores/todos';
// Actions
import {
  userExit
} from '../../stores/user';

function mapStateToProps(state) {
  return {
    listData: state.todos.toArray(),
    language: state.i18.toObject ? state.i18.toObject().language : state.i18.language,
    user: state.user.toObject ? state.user.toObject() : state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddHandler: (text) => dispatch(addTodo(text)),
    onAddBid: (body) => dispatch(addBid(body)),
    onAddBidAdmin: (body) => dispatch(addBidAdmin(body)),
    onSold: (body) => dispatch(sold(body)),
    onDeleteHandler: (id) => dispatch(deleteTodo(id)),
    onUserExit: (data) => dispatch(userExit(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lot);

import React, { Component, PropTypes, findDOMNode } from 'react';

if (process.env.BROWSER) {
  require('./_Main.scss');
}

class Main extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    onAddHandler: PropTypes.func,
    onDeleteHandler: PropTypes.func
  }
  static defaultProps = {
    onAddHandler: () => {},
      onDeleteHandler: () => {}
  }
  _onItemAddedHandler(e) {
    const { onAddHandler } = this.props;
    const newText = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    findDOMNode(this.refs.todoInput).value = '';
    onAddHandler(newText);
  }
  _onItemDeleteHandler(e) {
    const { onDeleteHandler } = this.props;
    const id = Number(e.target.dataset.id);
    e.preventDefault();
    onDeleteHandler(id);
  }
  _renderListItem() {
    const { listData } = this.props;
    return listData.map((item, index) => {
      return (
        <li className='item' key={index}>
          {item}
          <a
            data-id={index}
            onClick={this._onItemDeleteHandler.bind(this)}>X</a>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <b>Main page</b>
          <input ref="todoInput"/>
          <a onClick={this._onItemAddedHandler.bind(this)}>Add</a>
        </div>
        <ul>
          {this._renderListItem()}
        </ul>
      </div>
    );
  }
}

export default Main;

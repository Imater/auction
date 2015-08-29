import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import i18n from 'i18next-client';

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
    return listData.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      return (
        <li className='item' key={index}>
          <div className='itemWrap'>
            <div className='imageWrap'>
              <img src={item.image} />
            </div>
            <div className="id">
              {item.id}
            </div>
            <div className="title">
              {item.title}
            </div>
            <div className="from">
              {item.from}
            </div>
            <div className="startCost">
              {item.startCost}
            </div>
            <div className="nowCost">
              {item.nowCost}
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="Main">
        <div className="ActiveLot">
          <ActiveLot />
        </div>
        <nav className="app-navigation">
          <Link className="nav-item" to="/">
            {i18n.t('lot.all')}
          </Link>
          <Link className="nav-item" to="/active">
            {i18n.t('lot.active')}
          </Link>
        </nav>
        <ul>
          {this._renderListItem()}
        </ul>
      </div>
    );
  }
}

export default Main;

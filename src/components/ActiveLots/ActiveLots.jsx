import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_ActiveLots.scss');
}

class ActiveLots extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
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
    var listDataFiltered = listData.slice(this.props.index,this.props.index+4);
    return listDataFiltered.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url(uploads/'+item.cover+')'
      }
      return (
        <li className='item' key={index}>
          <div className='itemWrap'>
            <div className='imageWrap' style={divStyle}>
            </div>
            <div className="title">
              {item['title_'+ this.props.language]}
            </div>
            <div className="time">
              {utils.lastTime(item.lastTime)}
            </div>
            <div className="nowCost">
              {utils.rub(item.lastCost)}
            </div>
            <div className="name">
              {utils.shortFullName(item.name)}
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="ActiveLots">
        <ul>
          {this._renderListItem()}
        </ul>
      </div>
    );
  }
}

export default ActiveLots;

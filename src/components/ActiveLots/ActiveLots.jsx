import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_ActiveLots.scss');
}

class ActiveLots extends Component {
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
    var listDataFiltered = listData.slice(this.props.index+1,this.props.index+4+1);
    return listDataFiltered.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url('+item.image+')'
      }
      return (
        <li className='item' key={index}>
          <div className='itemWrap'>
            <div className='imageWrap' style={divStyle}>
            </div>
            <div className="title">
              {item.title}
            </div>
            <div className="time">
              {index*2+4} мин.назад
            </div>            
            <div className="nowCost">
              {item.nowCost}
            </div>
            <div className="name">
              {item.name}
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="ActiveLots">
        hello
        <ul>
          {this._renderListItem()}
        </ul>
      </div>
    );
  }
}

export default ActiveLots;

import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import MainLot from '../MainLot/MainLot';
import MainLotInfo from '../MainLotInfo/MainLotInfo';
import ActiveLots from '../../containers/ActiveLots/ActiveLots';

if (process.env.BROWSER) {
  require('./_Monitor.scss');
}

class Monitor extends Component {
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
      <div className="Monitor">
        <div className="monitorWrapper">
          <div className="left">
            <MainLot />
          </div>
          <div className="right">
            <MainLotInfo />
          </div>
          <div className="bottom">
            <ActiveLots />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;

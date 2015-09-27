import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import MainLot from '../MainLot/MainLot';
import MainLotInfo from '../MainLotInfo/MainLotInfo';
import ActiveLots2 from '../../containers/ActiveLots2/ActiveLots2';

if (process.env.BROWSER) {
  require('./_Monitor2.scss');
}

class Monitor2 extends Component {
  state = {
     index: 0
  };

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
  componentDidMount() {
    //this.interval = setInterval(this.tick.bind(this), 20000);
  }

  componentWillUnmount() {
    //clearInterval(this.interval);
  }

  tick () {
    if(this.state.index >= 6){
      return this.setState({index: 0});
    }
    this.setState({index: this.state.index + 1});
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
      <div className="Monitor2">
        <div className="header">
          Последние ставки благотворительного аукциона
        </div>
        <div className="monitorWrapper">
          <div className="bottom">
            <ActiveLots2 {...this.props} prop={this.props.listData} index={this.state.index}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor2;

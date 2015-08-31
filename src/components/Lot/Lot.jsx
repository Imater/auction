import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import LotImage from '../LotImage/LotImage';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

if (process.env.BROWSER) {
  require('./_Lot.scss');
}

class Lot extends Component {
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
    var listDataFiltered = listData.slice(3,6);
    return listDataFiltered.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url('+item.image+')'
      }
      return (
        <li className='item' key={index}>
          <Link className="nav-item" to="/lot" query={{index: item.index}}>
            <div className='itemWrap'>
              <div className='imageWrap' style={divStyle}>
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
          </Link>
          <div className="accept">
            <Link className="nav-item" to="/lot" query={{index: item.index}}>
              {i18n.t('header.accept')}
            </Link>
          </div>
        </li>
      );
    });
  }
  _renderItem() {
    const { listData, location: { query: {index}} } = this.props;
    console.info('LOT', index);
    var item = listData[index].toObject ? listData[index].toObject() : listData[index];
    return (
      <div className="lotDescription">
        <LotImage img={item.image}/>
        <div className="description">
          <div className='leftCol'>
            <div className="id">
              {item.id}
            </div>
            <div className="title">
              {item.title}
            </div>
            <div className="from">
              {item.from}
            </div>
            <div className="text">
              {item.text}
            </div>
          </div>
          <div className="rightCol">
            <div className="startCost">
              {item.startCost}
            </div>
            <div className="nowCost">
              {item.nowCost}
            </div>
            <div className="name">
              {item.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Lot">
        <MainHeader mini={true} />
        <Top />
        <ul className='items'>
          {this._renderItem()}
        </ul>
        <h4>
          Прочие лоты
        </h4>
        <ul className='items'>
          {this._renderListItem()}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Lot;

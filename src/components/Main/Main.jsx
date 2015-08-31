import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import LotItem from '../LotItem/LotItem';

if (process.env.BROWSER) {
  require('./_Main.scss');
}

class Main extends Component {
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
    const { listData, language } = this.props;
    return listData.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url(/uploads/'+item.cover+')'
      }
      return (
        <LotItem item={item} {...this.props} />
      );
    });
  }
  render() {
    return (
      <div className="Main">
        <MainHeader />
        <Top />
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
        <ul className='items'>
          {this._renderListItem()}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Main;

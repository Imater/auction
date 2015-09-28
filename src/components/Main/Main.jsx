import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import FilterMenu from '../FilterMenu/FilterMenu';
import LotItem from '../LotItem/LotItem';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Main.scss');
}

class Main extends Component {
  static propTypes = {
    listData: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
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
  _renderListItems() {
    const { listData, language } = this.props;
    var filteredData;
    if(this.props.route.path === '/active'){
      filteredData = listData.filter(function(item){
        return item.get('status') === 'active';
      });
    } else if(this.props.route.path === '/favorite'){
      filteredData = listData.filter(function(item){
        return item.get('favorite') === true;
      });
    } else {
      filteredData = listData;
    }
    var sortType = this.props.options.get('sort');
    filteredData = filteredData.sort((a, b) => {
      var aValue, bValue;
      if(sortType === 'date') {
        aValue = a.get('lastTime');
        bValue = b.get('lastTime');
      } else if (sortType === 'price') {
        aValue = a.get('lastPrice') || a.get('askPrice');
        bValue = b.get('lastPrice') || b.get('askPrice');
      }
      if (aValue > bValue) {
        return -1;
      } else if (aValue < bValue) {
        return 1;
      } else {
        return 0;
      };
    });
    return filteredData.map((itemMap, index) => {
      var item = itemMap;
      var divStyle = {
        backgroundImage: 'url(/uploads/'+item.get('cover')+')'
      }
      return (
        <LotItem key={index} item={item} {...this.props} />
      );
    });
  }
  render() {
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user.body;
    var mainIndex = 0;
    var allLinkClass = 'nav-item';
    if(this.props.route.path === undefined){
      var allLinkClass = 'nav-item active';
    }
    return (
      <div className="Main">
        <MainHeader/>
        <div className="constraint">
          <Top user={user} onUserExit={this.props.onUserExit} />
          <div className="ActiveLot">
            <ActiveLot index={mainIndex} {...this.props}/>
          </div>
          <FilterMenu route={this.props.route} onChangeSort={this.props.onChangeSort} options={this.props.options}/>
          <ul className='items'>
            {this._renderListItems()}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;

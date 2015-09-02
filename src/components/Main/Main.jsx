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
    user: PropTypes.object.isRequired,
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
    var filteredData = [];
    if(this.props.route.path === '/active'){
      filteredData = listData.filter(function(item){
        var theItem = item.toJS ? item.toJS() : item;
        return theItem.status === 'active';
      });
    } else {
      filteredData = listData;
    }
    return filteredData.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url(/uploads/'+item.cover+')'
      }
      return (
        <LotItem key={index} item={item} {...this.props} />
      );
    });
  }
  render() {
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user;
    var mainIndex = 0;
    var allLinkClass = 'nav-item';
    if(this.props.route.path === '/'){
      var allLinkClass = 'nav-item active';
    }
    return (
      <div className="Main">
        <MainHeader/>
        <Top user={user} onUserExit={this.props.onUserExit} />
        <div className="ActiveLot">
          <ActiveLot index={mainIndex} {...this.props}/>
        </div>
        <nav className="app-navigation">
          <Link className={allLinkClass} to="/" activeClassName='act'>
            {i18n.t('lot.all')}
          </Link>
          <Link className='nav-item' to="/active">
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

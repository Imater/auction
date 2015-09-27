import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import LotItem from '../LotItem/LotItem';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_FilterMenu.scss');
}

class FilterMenu extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired
  }
  static defaultProps = {
  }

  _onSelect(event) {
    this.props.onChangeSort(event.target.value || 'date');
  }

  render() {
    var allLinkClass = this.props.route.path === undefined ? 'nav-item active' : 'nav-item';
    console.info('props', this.props);
    return (
      <nav className="FilterMenu">
        <span>
          <Link className={allLinkClass} to="/" activeClassName='act'>
            {i18n.t('lot.all')}
          </Link>
          <Link className='nav-item middle' activeClassName='active' to="/active" >
            {i18n.t('lot.active')}
          </Link>
          <Link className='favorite' title={i18n.t('lot.favorite')} activeClassName='active' to="/favorite" >
            ★
          </Link>
        </span>
        <label className="sortSelect">
          <span>
            {i18n.t('lot.sort')}
          </span>
          <select value={this.props.options.get('sort')} onChange={this._onSelect.bind(this)}>
            <option value="price">{i18n.t('lot.sortPrice')}</option>
            <option value="date">{i18n.t('lot.sortDate')}</option>
          </select>
        </label>
      </nav>
    );
  }
}

export default FilterMenu;

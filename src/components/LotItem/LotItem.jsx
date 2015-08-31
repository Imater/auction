import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_LotItem.scss');
}

class LotItem extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
  }
  render() {
    const { item, listData, language } = this.props;
    var divStyle = {
      backgroundImage: 'url(/uploads/'+item.cover+')'
    };
    return (
      <li className='item' key={item.id}>
        <Link className="nav-item" to="/lot" query={{index: item.id}}>
          <div className='itemWrap'>
            <div className='imageWrap' style={divStyle}>
            </div>
            <div className="id">
              {item.id}
            </div>
            <div className="title">
              {item['title_'+language]}
            </div>
            <div className="from">
              {item['lotFrom_'+language]}
            </div>
            <div className="startCost">
              {item.askPrice}
            </div>
            <div className="nowCost">
              {item.nowCost}
            </div>
          </div>
        </Link>
        <div className="accept">
          <Link className="nav-item" to="/lot" query={{index: item.id}}>
            {i18n.t('header.accept')}
          </Link>
        </div>
      </li>
    );
  }
}

export default LotItem;

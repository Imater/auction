import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_ActiveLots2.scss');
}

(function(){
  if (typeof Object.defineProperty === 'function'){
    try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f){
    for (var i=this.length;i;){
      var o = this[--i];
      this[i] = [].concat(f.call(o,o,i),o);
    }
    this.sort(function(a,b){
      for (var i=0,len=a.length;i<len;++i){
        if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
      }
      return 0;
    });
    for (var i=this.length;i;){
      this[--i]=this[i][this[i].length-1];
    }
    return this;
  }
})();

class ActiveLots2 extends Component {
  state = {
    time: '12:52',
    page: 0
  }

  componentDidMount() {
    this.disableCache=Date.now();
    this.interval = setInterval(this.tick.bind(this), 10000);
    console.info(this.props.location.pathname === '/monitor3');
    if(this.props.location.pathname === '/monitor3'){
      if (!this.props.location.query || this.props.location.query.time !== "0"){
        var time = (this.props.location.query && this.props.location.query.time && !isNaN(this.props.location.query.time)) ? parseInt(this.props.location.query.time) : 20000;
        this.interval2 = setInterval(this.tickSlide.bind(this), time);
      };
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    if(this.props.location.pathname === '/monitor3'){
      if (this.props.location.time !== "0"){
        clearInterval(this.interval2);
      }
    }
  }

  tickSlide() {
    console.info();
    if((this.state.page+1)*20 <= this.props.listData.length){
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: 0
      })
    }
  }

  tick () {
    var time = new Date(Date.now());
    var tm = ("0" + time.getMinutes()).slice(-2) + ":" +
    ("0" + time.getSeconds()).slice(-2);
    this.setState({time: tm});
  }
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
    var from = this.props.index + this.state.page * 20;
    var to = this.props.index+ (this.state.page + 1) * 20;
    var listDataFiltered = utils.sortByLastTime(listData).slice(from,to);
    return listDataFiltered.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url(/uploads/small/'+item.cover+'?'+this.disableCache+')'
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
              {utils.rub(item.lastPrice)}
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
      <div className="ActiveLots2" time={this.state.time}>
        <ul>
          {this._renderListItem()}
        </ul>
      </div>
    );
  }
}

export default ActiveLots2;

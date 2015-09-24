require('should');
require('assert');
var Immutable = require('immutable');
var request = require('supertest');

describe('Immutable', function() {
    it('new Map', function() {
      var subtree = Immutable.Map({d1: 42});
      var map1 = Immutable.Map({a1: subtree, b1: 2});
      var map2 = map1.set('a1', subtree);
      map1.should.equal(map2);
    });

    it('map for Map', function() {
      var map1 = Immutable.Map({a1: 1, b1: 2, c1: 3}).map(x=> x*x).map(x=>x-1);
      map1.get('b1').should.equal(3);
    });

    it('from js', function() {
      var map1 = Immutable.fromJS({
        a1: {
          title: 'hello'
        },
        a2: 'bye'
      });
      map1.get('a1').get('title').should.equal('hello');
    });

    it('is equal', function() {
      var map1 = Immutable.fromJS({
        a1: {
          title: 'hello'
        },
        a2: 'bye'
      });
      var map2 = Immutable.fromJS({
        a1: {
          title: 'hello'
        },
        a2: 'bye'
      });
      Immutable.is(map1, map2).should.equal(true);
      console.info();
    });

    it('List', ()=>{
      var list = Immutable.List.of(3,4,1);
      Immutable.List.isList(list).should.equal(true);
      var list2 = list.push(Immutable.Map({title: 'hello'}));
      list2.get(3).get('title').should.equal('hello');
      list2 = list2.update(0, (x)=> x * 10000);
      list2 = list2.set(3, 4);
      var list3 = list2.delete(0);
      list.size.should.equal(3);
      list2.size.should.equal(4);
      list3.size.should.equal(3);
    })

    it('change nested', ()=>{
      var map0 = Immutable.fromJS({
        a1: {
          title: 'main',
          child: {
            b1: {
              title: 'child1'
            }
          }
        }
      });
      var map1 = Immutable.fromJS({
        a1: {
          title: 'main',
          child: {
            b1: {
              title: 'child1'
            }
          }
        }
      });
      var map2 = map1.getIn(['a1', 'child', 'b1', 'title']);
      map1.hashCode().should.equal(map0.hashCode());
    });
});

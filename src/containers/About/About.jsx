import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from '../../components/About/About';

// function mapDispatchToProps(dispatch) {
//     return {
//         onIncrement: () => dispatch(increment())
//     };
// }

@connect(
  state => ({ i18: state.i18 })
)
class AboutContainer extends Component {
  render() {
    return (
      <About />
    );
  }
}

export default connect()(AboutContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {MainView} from './components';

class MainContainer extends Component {


  render() {

      return (

          <MainView />
      )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
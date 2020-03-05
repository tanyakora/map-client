import React, { Component, PropTypes } from 'react';
import { Route, Router, Redirect, hashHistory } from "react-router";
import { connect } from 'react-redux';

import {
  DEFAULT_ROUTE,
  NOT_FOUND_ROUTE,
} from '../constants';

import {
  NotFoundPage,
    Main,
} from "../pages";

class MyRouter extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path={DEFAULT_ROUTE} component={Main}>

          <Route path={NOT_FOUND_ROUTE} component={NotFoundPage}/>
          <Redirect from='*' to={NOT_FOUND_ROUTE}/>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyRouter);
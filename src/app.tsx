import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Tabbar from "./components/Tabbar";
import ArticleDetail from "./pages/ArticleDetail";
import Member from "./pages/Member";
import './assets/style/app.less';
import './assets/js/rem.js';
import 'antd-mobile/dist/antd-mobile.css';

render((
  <HashRouter>
    <div>
      <Switch>
        <Route path="/article-detail" component={ArticleDetail} />
        <Route path="/member" component={Member} />
        {/* <Route path="/" render={() => {
          return <Redirect to="/article-detail" />
        }} /> */}
      </Switch>
      <Tabbar />
    </div>
  </HashRouter>
), document.getElementById('root'));

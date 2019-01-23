import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Tabbar from "./components/Tabbar";
import ArticleDetail from "./pages/ArticleDetail";
import Member from "./pages/Member";
import './assets/style/app.less';
import './assets/js/rem.js';
import HomePage from "./pages/HomePage";
import Search from "./pages/search";
// import './assets/style/app.css';

import 'antd-mobile/dist/antd-mobile.css';


render((
  <HashRouter>
    <div>
      <Route path="/home-page" component={HomePage} />
      <Route path="/search" component={Search} />
      <Route path="/article-detail" component={ArticleDetail} />
      <Route path="/member" component={Member} />
      <Tabbar />
    </div>
  </HashRouter>
), document.getElementById('root'));

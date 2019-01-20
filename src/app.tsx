import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Tabbar from "./components/Tabbar";
import ArticleDetail from "./pages/ArticleDetail";
// import './assets/style/app.css';
import 'antd-mobile/dist/antd-mobile.css';

render((
  <HashRouter>
    <div>
      <Route path="/article-detail" component={ArticleDetail} />
      <Tabbar />
    </div>
  </HashRouter>
), document.getElementById('root'));

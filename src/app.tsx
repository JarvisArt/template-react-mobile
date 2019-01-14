import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Test from './components/Test';
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
// import 'antd/dist/antd.css';
import "./assets/style/app.css";
// <Route path="test" component={Test} message="World"></Route>
// <Route path="a" component={A} message="Page A"></Route>
// <Route path="b" component={B} message="Page B"></Route>
// <Route path="c" component={C} message="Page C"></Route>

render((
  <BrowserRouter>
    <div>
      <ol>
        <li>
          <Link to="/">page a</Link>
        </li>
        <li>
          <Link to="/b">page b</Link>
        </li>
        <li>
          <Link to="/c">page c</Link>
        </li>
      </ol>

      <hr />
      <Route exact path="/" component={A} />
      <Route path="/b" component={B} />
      <Route path="/c" component={C} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));

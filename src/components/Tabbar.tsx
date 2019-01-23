import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; 
import './tabbar.less';

interface Props {};
interface State {
  active: number
};

class tabbar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    // 第二种绑定this的方式
    // this.handleSelect = this.handleSelect.bind(this);
    this.state = { active: 0 };
  }

  tabbarList = ['首页', '发现', '圈子', '我的']


  handleSelect(index: number, event) {
    this.setState({ active: index });
    // todo 跳转
    console.log(index)
    switch (index) {
      case 0:
        window.location.href = '/#/home-page'
        break
      case 1:
        window.location.href = '/#/Article-detail'
        break
      case 2:
        window.location.href = '/#/member'
        break
      case 3:
        window.location.href = '/#/home-page'
        break
    }
  }

  render() {
    return (
      <div className="tabbar-ul">
        {
          this.tabbarList.map((name, index) => {
            return <div className={this.state.active === index ? 'tabbar-li active' : 'tabbar-li'} onClick={this.handleSelect.bind(this, index)} key={index}>{name}</div>
          })
        }
      </div>
    );
  }
}

export default tabbar

import * as React from 'react';
import { Toast } from 'antd-mobile';
import { createHashHistory } from 'history';

interface Props {
  articleList: any[]
};

export default class comment extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.selectArticle = this.selectArticle.bind(this)
  }

  selectArticle() {
    createHashHistory().push('/article-detail');
  }

  render() {
    return (
      <div className="article-list">
        {
          this.props.articleList.map((item, index) => {
            return (
              <div className="article-item" key={index} onClick={this.selectArticle}>
                <img src={item.imgUrl} alt=""/>
                <div className="acticle-info">
                  <span className="acticle-title">{item.title}</span>
                  <div className="acticle-other">
                    <span>{item.user}</span>
                    <span className="gray">浏览{item.browse}次</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
};

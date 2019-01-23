import * as React from 'react';
import { Toast } from 'antd-mobile';

interface Props {
  total: number,
  coments: any[]
};

export default class member extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="member">
        <ul>
          <li>
            <i></i>
            <p>标题文字</p>
          </li>
        </ul>
      </div>
    );
  }
};

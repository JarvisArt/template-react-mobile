import * as React from 'react';
import Button from "antd/lib/button";
// import "antd/lib/button/style/css";

// interface AppProps {
//   message: string,
// };

export default class app extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button type="primary">Test</Button>
        {this.props.children}
      </div>
    )
  }
};

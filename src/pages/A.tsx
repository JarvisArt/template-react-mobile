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
        <Button type="primary">Page A</Button>
        <h1>{}</h1>
      </div>
    )
  }
};

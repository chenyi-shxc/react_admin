import React, { Component } from "react";
import { Button, message } from "antd";
export default class App extends Component {
  handleClick = () => {
    message.success("you click!");
  };
  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        primary button
      </Button>
    );
  }
}

import React, { Component } from "react";

import marked from "marked";

export default class Previewer extends Component {
  render() {
    const { contentToView, contentViewToState } = this.props;
    this.setState({
      view: marked(contentToView)
    });
    return (
      <div id="preview">
        <h1>Previewer</h1>
        <div>{contentViewToState}</div>
        {/* <div>{marked(content)}</div> */}
      </div>
    );
  }
}

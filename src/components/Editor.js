import React, { Component } from "react";
import marked from "marked";

export default class Editor extends Component {
  render() {
    const { contentToEdit } = this.props;
    return (
      <div id="editor">
        <h1>Editor</h1>
        <div>{marked(contentToEdit)}</div>
      </div>
    );
  }
}

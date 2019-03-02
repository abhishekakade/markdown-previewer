import React, { Component } from "react";
import Previewer from "./components/Previewer";
import Editor from "./components/Editor";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: `
        # heading 1
        ## heading 2
        ### heading 3
        `,
      view: ""
    };
  }
  render() {
    return (
      <div className="App">
        <div className="left">
          <Editor contentToEdit={this.state.content} />
        </div>
        <div className="right">
          <Previewer
            contentToView={this.state.content}
            contentViewToState={this.state.view}
          />
        </div>
      </div>
    );
  }
}

export default App;

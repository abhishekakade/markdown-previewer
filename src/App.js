import React, { Component } from "react";
import "./App.css";

// import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

let markedlib = require("marked");
markedlib.setOptions({
  gfm: true,
  breaks: true
});

let placeholderStuff = `
## Headings
# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## Bold, Italic, Strikethrough

Emphasis / Italics - *asterisks* or _underscores_.

Bold - **asterisks** or __underscores__.

Bold with Italic - **asterisks and _underscores_**.

Strikethrough - ~~Strikethrough~~

---

## List Items

1. list item
2. more items 
   1. list item
   2. list item

- list item
- more items
  - list item
  - list item

+ list item
+ more items 
  + list item
  + list item

---

## Links

[Inline link](https://www.google.com)

[Inline link with title](https://www.google.com "Google's Homepage")

---

## Blockquotes

> Blockquotes can be used to quote a message/text

---

## Inline Code

\`some inline code\`

---

## Code Block

\`\`\`

// multi-line code:

function sum(a, b) {
  return a + b;
}
\`\`\`

---

## Images

![alt-text](https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=150)

## Horizontal Rule

---
***
___
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: placeholderStuff
    };
  }

  onChangeHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        {/* <ScrollSync> */}
        {/* <ScrollSyncPane> */}
        <div
          style={{ overflow: "auto" }}
          className="textarea-container syncscroll"
          name="myElements"
        >
          <h2 id="editor-heading" style={{ textAlign: "center" }}>
            Markdown Editor
          </h2>
          <textarea
            type="text"
            id="editor"
            rows="25"
            cols="50"
            onChange={this.onChangeHandler}
            value={this.state.content}
          />
        </div>
        {/* </ScrollSyncPane> */}

        {/* <ScrollSyncPane> */}
        <div
          style={{ overflow: "auto" }}
          className="preview-container syncscroll"
          name="myElements"
        >
          <h2 id="preview-heading" style={{ textAlign: "center" }}>
            Markdown Preview
          </h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: markedlib(this.state.content)
            }}
          >
            {/* <div>{marked(this.state.content)}</div> */}
          </div>
        </div>
        {/* </ScrollSyncPane> */}
        {/* </ScrollSync> */}
        {/* <script src="path/to/syncscroll.js" /> */}
      </div>
    );
  }
}

export default App;

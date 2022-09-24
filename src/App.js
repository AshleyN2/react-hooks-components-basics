import React from "react";
import Article from "./Article";
import Comment from "./Comment";

// renders 'Article' first then 'Comment'
function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;

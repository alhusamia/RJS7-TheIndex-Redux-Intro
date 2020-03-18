import React from "react";


// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

function App(props) {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar addAuthorHandler={props.addAuthor} />
        </div>
        <div className="content col-10">
          <AuthorsList />
        </div>
      </div>
    </div>
  );
}

export default App;

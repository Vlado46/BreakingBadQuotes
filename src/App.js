import React from "react";
import Table from "./components/Table";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const App = (props) => {
  return (
    <div className="App">
      <h1>Breaking Bad Quotes</h1>
      <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th colSpan={2}>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <Table
          key={props.data}
          id={props.data}
          quote={props.data}
          author={props.data}
        ></Table>
      </ReactBootStrap.Table>
    </div>
  );
};

export default App;

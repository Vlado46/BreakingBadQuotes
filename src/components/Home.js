import React from "react";
import Table from "./Table";
import * as ReactBootStrap from "react-bootstrap";

const Home = (props) => {
  return (
    <div className="Home">
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

export default Home;

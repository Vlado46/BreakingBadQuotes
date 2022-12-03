import React, { useState, useEffect, Fragment } from "react";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  const data = tableData.map((tableData, index) => {
    return (
      <tbody>
        <tr key={index}>
          <th>{index + 1}</th>
          <th colSpan={2}>{tableData.quote}</th>
          <th>{tableData.author}</th>
        </tr>
      </tbody>
    );
  });

  return <Fragment>{data}</Fragment>;
};

export default Table;

import React from "react";

const Columns = ({ columns, isFirstTab=true, range }) => {
  return (
    <>
      <thead className="table-header">
        <tr className="header-row">
          {isFirstTab ? (
            <></>
          ) : (
            <th key={45852} className="header-title">
              {columns[0]}
            </th>
          )}
          {columns.slice(range.start, range.end).map((c, index) => {
            return (
              <th key={index} className="header-title">
                {c}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default Columns;

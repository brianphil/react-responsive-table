import React from "react";

const Columns = ({ columns, isFirstTab=true, range }) => {
  return (
    <>
      <thead>
        <tr>
          {isFirstTab ? (
            <></>
          ) : (
            <th key={45852}>
              {columns[0]}
            </th>
          )}
          {columns.slice(range.start, range.end).map((c, index) => {
            return (
              <th key={index}>
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

import React from "react";

const TableData = ({isFirstTab, data, range}) => {
  return (
    <>
      <tbody className="table-body">
        {data.map((d, index1) => {
          return (
            <tr key={Object.values(d)[0]}>
              {isFirstTab ? (
                <></>
              ) : (
                <td key={index1} className="table-data">
                  {Object.values(d)[0]}
                </td>
              )}
              {Object.values(d)
                .slice(range.start, range.end)
                .map((v, index) => (
                  <td key={index} className="table-data">
                    {v}
                  </td>
                ))}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableData;

import React, { useState, useEffect } from "react";
import { data } from "./dataset";
// import Columns from "./Columns";
// import TableData from "./TableData";
// import Tabs from "./Tabs";
const columns = ["Name", "Profession", "City", "Address", "Date Registered"];

const Table = () => {
  const groupBy = (n, cols) => {
    let groupedArray = [];
    for (let i = 0; i < cols.length; i += n) {
      groupedArray.push(cols.slice(i, i + n));
    }
    return groupedArray;
  };
  const [groupedCols, setGroupedCols] = useState(groupBy(2, columns));
  const [range, setRange] = useState({ start: 0, end: 2 });
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (e) => {
    const current = e.target.value;
    setCurrentTab(current);
    const tabList = e.target.id.split(",");
    setRange({
      start: columns.indexOf(tabList[0]),
      end: columns.indexOf(tabList[tabList.length - 1]) + 1,
    });
  };
  return (
    <div className="container-table">
      <ul className="tab-body">
        <li className="tab-item title">Columns</li>
        {groupedCols.map((tab, index) => {
          return (
            <li
              key={index}
              id={tab.toString()}
              value={index}
              onClick={handleTabClick}
              className={index === currentTab ? "tab-item active" : "tab-item"}
            >
              {"(" + tab.toString() + ")"}
            </li>
          );
        })}
      </ul>
      <table className="table">
        <thead className="table-header">
          <tr className="header-row">
            {columns.slice(range.start, range.end).map((c, index) => {
              return (
                <th key={index} className="header-title">
                  {c}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((d) => {
            return (
              <tr key={Object.values(d)[0]}>
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
      </table>
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from "react";
import Columns from "./Columns";
import TableData from "./TableData";
import Tabs from "./Tabs";
const Table = ({data, columnNumber=2, responsiveTable = true, columns }) => {
  const groupBy = (n, cols) => {
    let groupedArray = [];
    for (let i = 0; i < cols.length; i += n) {
      groupedArray.push(cols.slice(i, i + n));
    }
    return groupedArray;
  };
  const [groupedCols, setGroupedCols] = useState(
    groupBy(columnNumber, columns)
  );
  const [range, setRange] = useState({ start: 0, end: columnNumber });
  const [currentTab, setCurrentTab] = useState(0);
  const [isFirstTab, setIsFirstTab] = useState(true);
  const handleTabClick = (e) => {
    const current = e.target.value;
    setCurrentTab(current);
    const tabList = e.target.id.split(",");
    setRange({
      start: columns.indexOf(tabList[0]),
      end: columns.indexOf(tabList[tabList.length - 1]) + 1,
    });
    if (tabList.includes(columns[0])) {
      setIsFirstTab(true);
    } else {
      setIsFirstTab(false);
    }
  };

  if (responsiveTable) {
    return (
      <div className="container-table">
        <Tabs
          groupedCols={groupedCols}
          currentTab={currentTab}
          handleTabClick={handleTabClick}
        />
        <table className="table">
          <Columns columns={columns} isFirstTab={isFirstTab} range={range} />
          <TableData isFirstTab={isFirstTab} data={data} range={range} />
        </table>
      </div>
    );
  } else {
    const newRange = {
      start: columns[0],
      end: columns.length,
    };
    return(
      <table className="table">
          <Columns columns={columns} isFirstTab={isFirstTab} range={newRange} />
          <TableData isFirstTab={isFirstTab} data={data} range={newRange} />
    </table>
    )
  }
};

export default Table;

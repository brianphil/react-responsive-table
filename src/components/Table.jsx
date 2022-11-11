/***Table component
 * @props :
 * @data **array
 * @columnNumber **int
 * @responsiveTable **boolean
 * @columns **array
 *
 */
import React, { useState, useEffect } from "react";
import Columns from "./Columns";
import TableData from "./TableData";
import Tabs from "./Tabs";

const Table = ({ data, columnNumber, responsiveTable = true, columns }) => {
  /***Generate new array for table tabs depending on the display size */
  const groupBy = (n, cols) => {
    let groupedArray = [];
    for (let i = 0; i < cols.length; i += n) {
      groupedArray.push(cols.slice(i, i + n));
    }
    return groupedArray;
  };
  //end genearte array

  /**intialize table state */
  const [groupedCols, setGroupedCols] = useState(
    groupBy(columnNumber, columns)
  );
  const [range, setRange] = useState({ start: 0, end: columnNumber });

  const [currentTab, setCurrentTab] = useState(0);
  const [isFirstTab, setIsFirstTab] = useState(true);
  //end initialize table state

  // update table columns to display
  useEffect(() => {
    setRange({
      start: 0,
      end: columnNumber,
    });
    setGroupedCols(groupBy(columnNumber, columns));
  }, [columnNumber]);

  //end update columns to display

  /**Tabs switch handler */
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
  // end table switch handler

  /**Implement table display logic */
  if (responsiveTable) {
    return (
      <div className="container-table">
        <Tabs
          groupedCols={groupedCols}
          currentTab={currentTab}
          handleTabClick={handleTabClick}
        />
        <table className="styled-table">
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
    return (
      <table className="styled-table">
        <Columns columns={columns} isFirstTab={isFirstTab} range={newRange} />
        <TableData isFirstTab={isFirstTab} data={data} range={newRange} />
      </table>
    );
  }

  //end table display logic
};

export default React.memo(Table);

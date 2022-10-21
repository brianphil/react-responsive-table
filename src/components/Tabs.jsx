import React from "react";

const Tabs = ({ groupedCols, currentTab, handleTabClick }) => {
  return (
    <>
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
    </>
  );
};

export default Tabs;

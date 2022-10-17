import React from "react";
import { data } from "./dataset";
// import Columns from "./Columns";
// import TableData from "./TableData";
// import Tabs from "./Tabs";
const columns = ["Name", "Profession", "City", "Address", "Date Registered"];
const Table = () => {
  console.log(data);
  return (
    <div className="container-table">
      <ul className="tab-body">
        {columns.map((tab, index)=>{
        return <li className={index==0? "tab-item active": "tab-item"}>{tab}</li>
        })}
        
      </ul>
      <table className="table">
        <thead className="table-header">
          <tr className="header-row">
            {columns.map((c, index) => {
              return <th key={index} className="header-title">{c}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((d) => {
            return (
              <tr>
                {Object.values(d).map((v,index) => (
                  <td key={index} className="table-data">{v}</td>
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

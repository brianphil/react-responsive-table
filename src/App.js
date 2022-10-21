import React from "react";
import Table from "./components/Table";
import {data} from './components/dataset'
function App() {
  const columns = ["Name", "Profession", "City", "Address", "Date Registered"];
  return <Table data = {data} columns={columns} responsiveTable={false}/>;
}

export default App;

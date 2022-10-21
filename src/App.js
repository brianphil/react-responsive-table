import React, { useState, useLayoutEffect } from "react";
import Table from "./components/Table";
import { data } from "./components/dataset";

function App() {
  const [vw, setVW] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );
  let columnNumber=3;
  let responsive = true;
  if (vw <= 640) {
    columnNumber = 2;
    responsive = true;

  } else if (vw > 640 && vw <= 1007) {
    columnNumber = 4;
    responsive = true;

  } else {
    responsive = false;

  }
  useLayoutEffect(() => {
    const getWidth = (e) => {
      setVW(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);
    
    // console.log("Window width: ", vw);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  },[vw, setVW]);
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  // Small (smaller than 640px)
  // Medium (641px to 1007px)
  // Large (1008px and larger)
  const columns = ["Name", "Profession", "City", "Address", "Date Registered"];

  return (
    <Table
      data={data}
      columns={columns}
      responsiveTable={responsive}
      columnNumber={columnNumber}
    />
  );
}

export default App;

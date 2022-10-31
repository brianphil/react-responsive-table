import React, { useState, useLayoutEffect } from "react";
import Table from "./components/Table";
import { data } from "./components/dataset";
import Pagination from "./components/Pagination";

function App() {
  const [vw, setVW] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );
  let columnNumber = 3;
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

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [vw, setVW]);

  const paginationSet = true;
  const columns = ["Name", "Profession", "City", "Address", "Date Registered"];

  const [currentPage, setcurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(10);

  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const curreData = data.slice(indexOfFirstPage, indexOfLastPage);

  const selectedPage = (page) => {
    setcurrentPage(page);
  };
  return (
    <>
      <Table
        data={paginationSet? curreData: data}
        columns={columns}
        responsiveTable={responsive}
        columnNumber={columnNumber}
      />
      {paginationSet ? (
        <Pagination
          dataPerPage={dataPerPage}
          totalData={data.length}
          selectedPage={selectedPage}
          setcurrentPage={setcurrentPage}
          currentPage={currentPage}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;

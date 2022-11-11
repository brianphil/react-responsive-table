import React, { useState, useLayoutEffect } from "react";
import Table from "./components/Table";
import {data} from './components/secdataset';
import Pagination from "./components/Pagination";

function App() {
  const [vw, setVW] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );

  let columnNumber = (vw <= 640) ?  2: (vw > 640 && vw <= 1007)? 4: 3;

  let responsive = columnNumber===2 || columnNumber ===4 ? true: false;

  useLayoutEffect(() => {
    const getWidth = (e) => {
      setVW( Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    };
    window.addEventListener("resize", getWidth);

    console.log("Use layout effect rendered columns: ",columnNumber);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [columnNumber]);

  const paginationSet = true;
  const columns = ["Name", "Profession", "City", "Address", "Date Registered", "Letd", "Grat", "Uysd", "Piud", "Jgd"," Trwes"];

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

export default React.memo(App);

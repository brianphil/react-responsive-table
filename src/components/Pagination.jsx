import React, { useState } from "react";

const Pagination = ({
  dataPerPage,
  totalData,
  selectedPage,
  setcurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  const [isActivePage, setisActivePage] = useState(1);
  const navigatePage = (param) => {
    switch (param) {
      case 1: {
        if (currentPage === 1) return;
        else {
          setcurrentPage((prev) => prev - 1);
          setisActivePage(currentPage - 1);
        }
      }
      case 2: {
        if (currentPage === pageNumbers.length) return;
        else {
          setcurrentPage((prev) => prev + 1);
          setisActivePage(currentPage + 1);
        }
      }
    }
  };

  const handleClick = (page) => {
    selectedPage(page);
    setisActivePage(page);
  };

  return (
    <ul className="pagination">
      <li onClick={() => navigatePage(1)} className="pagination">
        {"<<Prev"}
      </li>
      {pageNumbers.map((page) => {
        return (
          <li
            onClick={() => handleClick(page)}
            key={page}
            className={
              isActivePage == page ? "pagination active-page" : "pagination"
            }
          >
            {page}
          </li>
        );
      })}
      <li onClick={() => navigatePage(2)} className="pagination">
        {"Next>>"}
      </li>
    </ul>
  );
};

export default Pagination;

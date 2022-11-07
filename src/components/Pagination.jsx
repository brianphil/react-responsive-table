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
          setcurrentPage(prev=>{return prev -1});
          setisActivePage(prev=>{return prev -1});
        }
        break;
      }
      case 2: {
        if (currentPage === pageNumbers.length) return;
        else {
          setcurrentPage(prev=> {return prev + 1});
          setisActivePage(prev=> {return prev + 1});
        }
        break;
      }
      default:
        return null;
    }
  };

  const handleClick = (page) => {
    selectedPage(page);
    setisActivePage(page);
  };

  return (
    <ul className="pagination">
      <li
        onClick={() => (isActivePage === 1 ? "" : navigatePage(1))}
        className={
          isActivePage === 1 ? "pagination disabled-control" : "pagination"
        }
      >
        &#9665;
      </li>
      {pageNumbers.map((page) => {
        return (
          <li
            onClick={() => handleClick(page)}
            key={page}
            className={
              isActivePage === page ? "pagination active-page" : "pagination"
            }
          >
            {page}
          </li>
        );
      })}
      <li
        onClick={() => (isActivePage === pageNumbers.length ? "" : navigatePage(2))}
        className={
          isActivePage === pageNumbers.length ? "pagination disabled-control" : "pagination"
        }
      >
        &#9655;
      </li>
    </ul>
  );
};

export default Pagination;

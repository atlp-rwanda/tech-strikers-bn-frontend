import React, { Component } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageDropdown from "./ImageDropdown";

const SearchInput = () => (
  <div className="d-flex">
    <input
      className="py-2 px-4 border bg-gray-100 border-gray-300 rounded-full focus:outline-none w-32 sm:w-64"
      placeholder="Search"
    />
    <button
      type="button"
      className="rounded-full bg-gradient px-4 ml-2 text-white flex items-center text-xs focus:outline-none shadow-lg"
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  </div>
);
class DashboardNavbar extends Component {
  render() {
    return (
      <nav className="mr-auto d-flex sticky-top justify-between px-4 p-2 shadow-lg mb-5 bg-blue rounded ">
        <div>
          <SearchInput />
        </div>
        <div className="mr-auto d-flex flex-row-end">
          <ImageDropdown />
        </div>
      </nav>
    );
  }
}

export default DashboardNavbar;

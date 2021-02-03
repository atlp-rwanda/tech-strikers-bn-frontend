import React, { Component } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageDropdown from "./ImageDropdown";

const SearchInput = () => (
  <div>
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
      <nav>
        <div>
          <SearchInput />
        </div>
        <div>
          <ImageDropdown />
        </div>
      </nav>
    );
  }
}

export default DashboardNavbar;

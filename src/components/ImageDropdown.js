import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../assets/image/1.jpg";

const DropdownItem = ({ item }) => (
  <button type="button">
    <FontAwesomeIcon icon={item.icon} />
    <p className="ml-2">{item.title}</p>
  </button>
);

const DropdownContent = ({ dropdownItems }) => (
  <div className="bg-white  absolute p-2 shadow-lg rounded-lg mt-1">
    {dropdownItems.map((item, i) => (
      <div className="mt-1" key={i}>
        <DropdownItem item={item} />
      </div>
    ))}
  </div>
);

class ImageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      node: null,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="d-flex justify-content-center mr-auto flex-row-reverse">
        <button
          type="button"
          //   ref={node}
          className="d-flex space-around mr-auto rounded-full  px-1  ms-2 justify-content-end bg-gradient focus:outline-none shadow-lg"
          //   onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            // src={defaultAvatar}
            className=""
            alt="Avatar"
          />
          <div className="px-3">
            <p className="text-white">j</p>
          </div>
          <div className="mr-1 text-white">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </button>

        {/* {dropdownOpen && (
          <div className="relative">
            <DropdownContent dropdownItems={dropdownItems} />
          </div>
        )} */}
      </div>
    );
  }
}

export default ImageDropdown;

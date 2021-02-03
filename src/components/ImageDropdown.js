import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DropdownItem = ({ item }) => (
  <button>
    <FontAwesomeIcon icon={item.icon} />
    <p className="ml-2">{item.title}</p>
  </button>
);

const DropdownContent = ({ dropdownItems }) => (
  <div className="bg-white w-full absolute p-4 shadow-lg rounded-lg mt-2">
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
      <div>
        <button
          type="button"
          //   ref={node}
          className="flex rounded-full items-center py-2 px-3 bg-gradient focus:outline-none shadow-lg"
          //   onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            // src={authState.userInfo.avatar || defaultAvatar}
            className="rounded-full w-6 border-2 border-white"
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

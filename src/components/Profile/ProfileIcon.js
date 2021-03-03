import React, { useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag='span' data-toggle='dropdown' aria-expanded={dropdownOpen}>
        <img src='http://tachyons.io/img/logo.jpg' className='br-100 h3 w3 dib' alt='avatar' />
      </DropdownToggle>
      <DropdownMenu className='b--transparent shadow-5 mr5'>
        <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
        <DropdownItem onClick={() => onRouteChange("signout")}>Sign Out</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
export default ProfileIcon;

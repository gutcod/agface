import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bg-light-purple pad-bottom'>
        <div className='dtc v-mid w-75 tr'>
          <ProfileIcon onRouteChange={onRouteChange} />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bg-light-purple pad-bottom'>
        <div className='dtc v-mid w-75 tr space-btw '>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onRouteChange("signin")}
            className='link dim dark-gray f6 f5-ns dib'
            title='Contact'>
            Sign in
          </span>
          <span
            style={{ cursor: "pointer", marginLeft: "20px" }}
            onClick={() => onRouteChange("register")}
            className='link dim dark-gray f6 f5-ns dib'
            title='Contact'>
            Register
          </span>
        </div>
      </nav>
    );
  }
};

export default Navigation;

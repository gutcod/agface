import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  // <nav style={{ display: "flex", justifyContent: "flex-end" }}>
  //   <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
  // </nav>
  if (isSignedIn) {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bg-light-purple pad-bottom'>
        <a className='dtc v-mid mid-gray link dim w-25' title='Home'>
          <img src='http://tachyons.io/img/logo.jpg' className='dib w2 h2 br-100' alt='Site Name' />
        </a>
        <div className='dtc v-mid w-75 tr'>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => onRouteChange("signout")}
            className='link dim dark-gray f6 f5-ns dib'
            title='Contact'>
            Sign Out
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bg-light-purple pad-bottom'>
        <a className='dtc v-mid mid-gray link dim w-25' title='Home'>
          <img src='http://tachyons.io/img/logo.jpg' className='dib w2 h2 br-100' alt='Site Name' />
        </a>
        <div className='dtc v-mid w-75 tr space-btw '>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => onRouteChange("signin")}
            className='link dim dark-gray f6 f5-ns dib'
            title='Contact'>
            Sign in
          </a>
          <a
            style={{ cursor: "pointer", marginLeft: "20px" }}
            onClick={() => onRouteChange("register")}
            className='link dim dark-gray f6 f5-ns dib'
            title='Contact'>
            Register
          </a>
        </div>
      </nav>
    );
  }
};

export default Navigation;

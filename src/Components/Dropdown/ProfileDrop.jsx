import React from "react";

const ProfileDrop = ({ toclose }) => {
  return (
    <div className="dropdown-container" onClick={toclose}>
      <div className="dropdown-wrapper">
        <div className="dropdown_child"></div>
      </div>
    </div>
  );
};

export default ProfileDrop;

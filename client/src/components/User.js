import React from "react";

const User = props => {
  return (
    <div>
      <h2>Account details</h2>
      <p>{props.user.name}</p>
      <button>Update</button>
    </div>
  );
};

export default User;

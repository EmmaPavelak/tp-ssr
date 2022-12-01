import React from "react";
import users from "../users.json";

function User() {
  return (
    <div>
      <h1>User</h1>

      <ul>
        <li>{users[0].name}</li>
      </ul>
    </div>
  );
}

export default User;

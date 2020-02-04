import React, { useState } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

export default () => {
  const [username, setUsername] = useState("default");

  const usernameHandler = event => {
    setUsername(event.target.value);
  };

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  };

  return (
    <div className="app-container" style={styles}>
      <UserInput
        onChange={() => usernameHandler()}
        changed={usernameHandler}
        default={username}
        style={{
          padding: 15,
          border: "1px solid black",
          borderRadius: 2,
          fontSize: 18,
          boxShadow: "3px 3px #Ccc"
        }}
      />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
};

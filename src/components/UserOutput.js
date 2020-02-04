import React from "react";

export default props => {
  const style = {
    width: 420,
    height: 140,
    border: "1px solid #ccc",
    textAlign: "center",
    margin: 10
  };

  const username = {
    fontFamily: "arial",
    fontSize: 18,
    fontWeight: "bold"
  };

  const paragraph = {
    fontSize: 14,
    fontWeight: 300,
    fontFamily: "arial"
  };

  return (
    <div style={style}>
      <p style={username}>{props.username}</p>
      <hr />
      <p style={paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

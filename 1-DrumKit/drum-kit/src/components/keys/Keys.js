import React from "react";

export const Keys = props => {
  const keyStyles = {
    border: ".4rem solid black",
    borderRadius: ".5rem",
    margin: "1rem",
    fontSize: "1.5rem",
    padding: "1rem .5rem",
    transition: "all .07s ease",
    width: "10rem",
    textAlign: "center",
    color: "white",
    background: "rgba(0,0,0,0.4)",
    textShadow: "0 0 .5rem black",
  };
  const keyWrapperStyles = {
    display: "flex",
    flex: "1",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
  const keyboardDownStyle = {
    display: "block",
    fontSize: "4rem",
  };
  return (
    <div className="keys-wrapper" style={keyWrapperStyles}>
      {// loop over keyCodeDataObj
      props.keyData.map(key => {
        return (
          <div
            datakey={key.keyCode}
            className="key"
            key={key.key}
            style={keyStyles}
          >
            <kbd style={keyboardDownStyle}>{key.key}</kbd>
            <span className="sound">{key.sound}</span>
          </div>
        );
      })}
    </div>
  );
};

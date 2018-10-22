import React from "react";

export const Keys = props => {
  return (
    <div className="keys-div">
      {// loop over keyCodeDataObj
      props.keyData.map(key => {
        return (
          <div datakey={key.keyCode} className="key" key={key.key}>
            <kbd>{key.key}</kbd>
            <span className="sound">{key.sound}</span>
          </div>
        );
      })}
    </div>
  );
};

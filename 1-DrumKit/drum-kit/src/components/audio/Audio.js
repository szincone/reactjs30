import React, { Fragment } from "react";

export const Audio = props => {
  return (
    <Fragment>
      {// loop over keyCodeDataObj
      props.keyData.map(key => {
        return (
          <audio
            datakey={key.keyCode}
            src={`sounds/${key.sound}.wav`}
            key={key.keyCode}
          />
        );
      })}
    </Fragment>
  );
};

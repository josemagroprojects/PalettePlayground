import React from "react";
import { ChromePicker } from "react-color";
import "./../ColorSwatch/ColorSwatch.scss";

const ColorSwatch = props => {
  return (
    <div className="swatch-container">
      <div onClick={props.picker}>
        <div className="color-swatch" style={{ background: `${props.code}` }} />
      </div>
      {props.currentState ? (
        <div className="popover">
          <div className="cover" onClick={props.picker} />
          <ChromePicker
            disableAlpha={true}
            color={props.code}
            onChange={props.change}
            /*
            presetColors={[
              "#edd2cb",
              "#e5efc2",
              "#a2d5ac",
              "#38aea9",
              "#f55a51",
              "#543d52",
              "#361d32"
            ]}
            */
          />
        </div>
      ) : null}
      <div className="color-name">
        <p>{props.code.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default ColorSwatch;

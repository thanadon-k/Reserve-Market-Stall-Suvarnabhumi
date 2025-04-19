import { React } from "react";
import "../styles/Stall.css";

function Stall(props) {
  const stallCallback = () => {
    props.stall(props.text);
  };

  return (
    <div className="component_stall">
      <div className="stall_select" onClick={() => stallCallback()}>
        {props.select === 1 && <div className="div_state"></div>}
        <h3>{props.text}</h3>
      </div>
      {props.state === 0 && <div className="stall_enable"></div>}
    </div>
  );
}

export default Stall;
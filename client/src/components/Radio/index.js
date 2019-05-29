import React from "react";
import "./style.css";

const Radio = () => {
  return (
    <div className="radio-block">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="danish" value="da" />
        <label className="form-check-label" for="inlineRadio1">Danish</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="spanish" value="es" />
        <label className="form-check-label" for="inlineRadio2">Spanish</label>
      </div>
      
    </div>
  );
}

export default Radio;

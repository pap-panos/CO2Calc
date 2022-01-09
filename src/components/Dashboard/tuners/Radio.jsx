import React from "react";

const Radio = ({ id, val, title, name, handleChart }) => {
  const selected = 1;

  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id={id}
        value={val}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={title}
        defaultChecked={selected === val}
        onChange={(e) => handleChart(e.target.value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default Radio;

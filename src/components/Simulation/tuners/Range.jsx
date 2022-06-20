import React from "react";

const Range = ({ id, name, title, handleChart }) => {
  return (
    <div className="card border border-light">
      <div className="card-body">
        <label htmlFor={id} className="form-label">
          {name}
        </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="4"
          defaultValue="1"
          id={id}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={title}
          onChange={(e) => handleChart(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Range;

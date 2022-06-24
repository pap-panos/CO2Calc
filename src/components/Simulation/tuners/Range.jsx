import React from "react";
import { useState } from "react";

const Range = ({
  id,
  name,
  tooltip1,
  tooltip2,
  tooltip3,
  tooltip4,
  handleChart,
}) => {
  const [title, setTitle] = useState(tooltip1);

  const handleTitle = (value) => {
    switch (value) {
      case "1":
        setTitle(tooltip1);
        break;
      case "2":
        setTitle(tooltip2);
        break;
      case "3":
        setTitle(tooltip3);
        break;
      case "4":
        setTitle(tooltip4);
        break;
      default:
        break;
    }
  };

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
          onChange={(e) => {
            handleChart(e.target.value, id);
            handleTitle(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Range;

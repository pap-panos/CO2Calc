import React from "react";

const Welcome = ({ toNextTab, handleCountry }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Welcome to the web's leading carbon footprint calculator
        </h5>
        <div>
          <div className="col-md-4 py-2">
            <label className="form-label">
              First, please tell us where do you live?
            </label>
            <select
              className="form-select"
              onChange={(e) => {
                handleCountry(e.target.value);
              }}
              defaultValue="0"
            >
              <option disabled value="0">
                Choose...
              </option>
              <option value="Greece">Greece</option>
              <option value="Belgium">Belgium</option>
              <option value="Germany">Germany</option>
              <option value="Bulgaria">Bulgaria</option>
            </select>
          </div>
          <div className="col-12 py-2">
            <span>
              Carbon footprint calculations are typically based on annual
              emissions from the previous 12 months.If you would like to
              calculate your carbon footprint for a different period use the
              calendar boxes below:
            </span>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="form-label">From</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3 py-2 py-md-0">
              <label className="form-label">To</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-12 py-2">
            <span>
              Next, select the appropriate tab above to calculate the part of
              your lifestyle you are most interested in, e.g. your flights.Or,
              visit each of the tabs above to calculate your full carbon
              footprint.Following your calculation, you can offset / neutralise
              your emissions through one of our climate-friendly projects.
            </span>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-end">
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Demographic
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

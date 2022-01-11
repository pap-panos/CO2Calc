import React from "react";

const Welcome = ({ toNextTab }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Welcome to the web's leading carbon footprint calculator
        </h5>
        <form>
          <div className="col-md-4 py-2">
            <label className="form-label">
              First, please tell us where do you live?
            </label>
            <select className="form-select" defaultValue="0" required>
              <option disabled value="0">
                Choose...
              </option>
              <option value="1">Greece</option>
              <option value="2">Belgium</option>
              <option value="3">Germany</option>
            </select>
          </div>
          <div className="col py-2">
            <span>
              Carbon footprint calculations are typically based on annual
              emissions from the previous 12 months.If you would like to
              calculate your carbon footprint for a different period use the
              calendar boxes below:
            </span>
          </div>
          <div className="row py-2">
            <div className="col-md-3">
              <label className="form-label">From</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="col-md-3">
              <label className="form-label">To</label>
              <input type="date" className="form-control" required />
            </div>
          </div>
          <div className="col py-2">
            <span>
              Next, select the appropriate tab above to calculate the part of
              your lifestyle you are most interested in, e.g. your flights.Or,
              visit each of the tabs above to calculate your full carbon
              footprint.Following your calculation, you can offset / neutralise
              your emissions through one of our climate-friendly projects.
            </span>
          </div>
          <div className="col py-2">
            <div className="d-flex justify-content-end">
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Demographic
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;

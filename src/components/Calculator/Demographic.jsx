import React from "react";

const Demographic = ({ toNextTab, toPrevTab, handleCity, cities }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Demographic Characteristics</h5>
        <form className="row">
          <div className="col-md-6 p-2">
            <label className="form-label">In which city do you live?</label>
            <select
              className="form-select"
              defaultValue="0"
              onChange={(e) => {
                handleCity(e.target.value);
              }}
              required
            >
              <option disabled hidden value="0">
                Choose...
              </option>
              {cities}
            </select>
          </div>
          <div className="col-md-6 p-2">
            <label className="form-label">What is your age?</label>
            <select className="form-select" defaultValue="0" required>
              <option disabled hidden value="0">
                Choose...
              </option>
              <option value="1">Below 18</option>
              <option value="2">18-24</option>
              <option value="3">25-34</option>
              <option value="4">35-44</option>
              <option value="5">45-54</option>
              <option value="6">Above 54</option>
            </select>
          </div>
          <div className="col-md-6 p-2">
            <label className="form-label">What is your gender?</label>
            <select className="form-select" defaultValue="0" required>
              <option disabled hidden value="0">
                Choose...
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Do not wish to specify</option>
            </select>
          </div>
          <div className="col-md-6 p-2">
            <label className="form-label">What is your marital status?</label>
            <select className="form-select" defaultValue="0" required>
              <option disabled hidden value="0">
                Choose...
              </option>
              <option value="1">Single</option>
              <option value="2">Married or in a domestic partnership</option>
              <option value="3">Divorced</option>
              <option value="4">Widowed</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="col-12 p-2">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Welcome
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Cars
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Demographic;

import React from "react";

const Domains = () => {
  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              Cars
            </div>
            <div className="card-body">
              <h5 className="card-title">Cars Carbon Footprint Domain</h5>
              <p className="card-text">
                Enter details for car usage throughout the year.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Domain Type: Citizen</li>
              <li className="list-group-item">Initial Value: 12410</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-dark d-flex justify-content-center">
                Type of Fuel
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Diesel
                <span className="badge bg-primary rounded-pill">0.21</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol
                <span className="badge bg-primary rounded-pill">0.19</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                LPG
                <span className="badge bg-primary rounded-pill">0.13</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CNG
                <span className="badge bg-primary rounded-pill">0.18</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol E10
                <span className="badge bg-primary rounded-pill">0.17</span>
              </li>
            </ul>
            <div className="table-responsive">
              <table className="table table-sm align-middle table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Country</th>
                    <th>Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Germany</td>
                    <td>1.53</td>
                  </tr>
                  <tr>
                    <td>Portugal</td>
                    <td>1.48</td>
                  </tr>
                  <tr>
                    <td>Poland</td>
                    <td>1.37</td>
                  </tr>
                  <tr>
                    <td>Denmark</td>
                    <td>1.33</td>
                  </tr>
                  <tr>
                    <td>Romania</td>
                    <td>1.18</td>
                  </tr>
                  <tr>
                    <td>Belgium</td>
                    <td>0.95</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>0.92</td>
                  </tr>
                  <tr>
                    <td>Netherlands</td>
                    <td>0.85</td>
                  </tr>
                  <tr>
                    <td>Austria</td>
                    <td>0.83</td>
                  </tr>
                  <tr>
                    <td>Latvia</td>
                    <td>0.82</td>
                  </tr>
                  <tr>
                    <td>Slovenia</td>
                    <td>0.66</td>
                  </tr>
                  <tr>
                    <td>Croatia</td>
                    <td>0.61</td>
                  </tr>
                  <tr>
                    <td>Greece</td>
                    <td>0.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              Cars
            </div>
            <div className="card-body">
              <h5 className="card-title">Cars Carbon Footprint Domain</h5>
              <p className="card-text">
                Enter details for car usage throughout the year.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Domain Type: Citizen</li>
              <li className="list-group-item">Initial Value: 12410</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-dark d-flex justify-content-center">
                Type of Fuel
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Diesel
                <span className="badge bg-primary rounded-pill">0.21</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol
                <span className="badge bg-primary rounded-pill">0.19</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                LPG
                <span className="badge bg-primary rounded-pill">0.13</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CNG
                <span className="badge bg-primary rounded-pill">0.18</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol E10
                <span className="badge bg-primary rounded-pill">0.17</span>
              </li>
            </ul>
            <div className="table-responsive">
              <table className="table table-sm align-middle table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Country</th>
                    <th>Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Germany</td>
                    <td>1.53</td>
                  </tr>
                  <tr>
                    <td>Portugal</td>
                    <td>1.48</td>
                  </tr>
                  <tr>
                    <td>Poland</td>
                    <td>1.37</td>
                  </tr>
                  <tr>
                    <td>Denmark</td>
                    <td>1.33</td>
                  </tr>
                  <tr>
                    <td>Romania</td>
                    <td>1.18</td>
                  </tr>
                  <tr>
                    <td>Belgium</td>
                    <td>0.95</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>0.92</td>
                  </tr>
                  <tr>
                    <td>Netherlands</td>
                    <td>0.85</td>
                  </tr>
                  <tr>
                    <td>Austria</td>
                    <td>0.83</td>
                  </tr>
                  <tr>
                    <td>Latvia</td>
                    <td>0.82</td>
                  </tr>
                  <tr>
                    <td>Slovenia</td>
                    <td>0.66</td>
                  </tr>
                  <tr>
                    <td>Croatia</td>
                    <td>0.61</td>
                  </tr>
                  <tr>
                    <td>Greece</td>
                    <td>0.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              Cars
            </div>
            <div className="card-body">
              <h5 className="card-title">Cars Carbon Footprint Domain</h5>
              <p className="card-text">
                Enter details for car usage throughout the year.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Domain Type: Citizen</li>
              <li className="list-group-item">Initial Value: 12410</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-dark d-flex justify-content-center">
                Type of Fuel
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Diesel
                <span className="badge bg-primary rounded-pill">0.21</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol
                <span className="badge bg-primary rounded-pill">0.19</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                LPG
                <span className="badge bg-primary rounded-pill">0.13</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CNG
                <span className="badge bg-primary rounded-pill">0.18</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol E10
                <span className="badge bg-primary rounded-pill">0.17</span>
              </li>
            </ul>
            <div className="table-responsive">
              <table className="table table-sm align-middle table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Country</th>
                    <th>Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Germany</td>
                    <td>1.53</td>
                  </tr>
                  <tr>
                    <td>Portugal</td>
                    <td>1.48</td>
                  </tr>
                  <tr>
                    <td>Poland</td>
                    <td>1.37</td>
                  </tr>
                  <tr>
                    <td>Denmark</td>
                    <td>1.33</td>
                  </tr>
                  <tr>
                    <td>Romania</td>
                    <td>1.18</td>
                  </tr>
                  <tr>
                    <td>Belgium</td>
                    <td>0.95</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>0.92</td>
                  </tr>
                  <tr>
                    <td>Netherlands</td>
                    <td>0.85</td>
                  </tr>
                  <tr>
                    <td>Austria</td>
                    <td>0.83</td>
                  </tr>
                  <tr>
                    <td>Latvia</td>
                    <td>0.82</td>
                  </tr>
                  <tr>
                    <td>Slovenia</td>
                    <td>0.66</td>
                  </tr>
                  <tr>
                    <td>Croatia</td>
                    <td>0.61</td>
                  </tr>
                  <tr>
                    <td>Greece</td>
                    <td>0.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              Cars
            </div>
            <div className="card-body">
              <h5 className="card-title">Cars Carbon Footprint Domain</h5>
              <p className="card-text">
                Enter details for car usage throughout the year.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Domain Type: Citizen</li>
              <li className="list-group-item">Initial Value: 12410</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-dark d-flex justify-content-center">
                Type of Fuel
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Diesel
                <span className="badge bg-primary rounded-pill">0.21</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol
                <span className="badge bg-primary rounded-pill">0.19</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                LPG
                <span className="badge bg-primary rounded-pill">0.13</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CNG
                <span className="badge bg-primary rounded-pill">0.18</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Petrol E10
                <span className="badge bg-primary rounded-pill">0.17</span>
              </li>
            </ul>
            <div className="table-responsive">
              <table className="table table-sm align-middle table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Country</th>
                    <th>Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Germany</td>
                    <td>1.53</td>
                  </tr>
                  <tr>
                    <td>Portugal</td>
                    <td>1.48</td>
                  </tr>
                  <tr>
                    <td>Poland</td>
                    <td>1.37</td>
                  </tr>
                  <tr>
                    <td>Denmark</td>
                    <td>1.33</td>
                  </tr>
                  <tr>
                    <td>Romania</td>
                    <td>1.18</td>
                  </tr>
                  <tr>
                    <td>Belgium</td>
                    <td>0.95</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td>0.92</td>
                  </tr>
                  <tr>
                    <td>Netherlands</td>
                    <td>0.85</td>
                  </tr>
                  <tr>
                    <td>Austria</td>
                    <td>0.83</td>
                  </tr>
                  <tr>
                    <td>Latvia</td>
                    <td>0.82</td>
                  </tr>
                  <tr>
                    <td>Slovenia</td>
                    <td>0.66</td>
                  </tr>
                  <tr>
                    <td>Croatia</td>
                    <td>0.61</td>
                  </tr>
                  <tr>
                    <td>Greece</td>
                    <td>0.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Domains;

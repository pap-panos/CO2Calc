import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const Dashboard = () => {
  // let myChart = new Chart(ctx, {
  //   type: "doughnut",
  //   data: data,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
  const data2 = {
    labels: [
      65, 120, 81, 75, 79, 92, 69, 74, 85, 83, 100, 250, 98, 76, 66, 93, 88, 71,
    ],
    datasets: [
      {
        label: "Resonse time in ms",
        data: [
          65, 120, 81, 75, 79, 92, 69, 74, 85, 83, 100, 250, 98, 76, 66, 93, 88,
          71,
        ],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const chartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Example Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  // const getChartData = () => {

  //   return data;
  // };
  return (
    <div className="container-fluid p-3 overflow-auto">
      <div className="row p-2">
        <div className="col-sm-3">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-person-check-fill text-warning"></i>
              </h5>
              <h5 className="card-title">User Registrations</h5>
              <p className="card-text">100</p>
              <span className="text-muted">Dummy Text</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-person-fill text-success"></i>
              </h5>
              <h5 className="card-title">Users Online</h5>
              <p className="card-text">10</p>
              <span className="text-muted">Dummy Text</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-list-task text-danger"></i>
              </h5>
              <h5 className="card-title">Ammount</h5>
              <p className="card-text">20</p>
              <span className="text-muted">Dummy Text</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-receipt-cutoff text-primary"></i>
              </h5>
              <h5 className="card-title">Number</h5>
              <p className="card-text">5</p>
              <span className="text-muted">Dummy Text</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-8">
          <div className="card shadow p-3 mb-5 border-light rounded">
            <h5 className="card-title">
              Users <i className="bi bi-card-list text-primary"></i>
            </h5>

            <span className="text-muted">Dummy Text</span>
            <div className="card-body overflow-auto">
              <table className="table table-hover align-middle">
                <thead>
                  <tr className="align-middle">
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">e-mail</th>
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key="1">
                    <td>1</td>
                    <td>Giannis</td>
                    <td>giannis@email.com</td>
                    <td>User</td>
                    <td>
                      <button className="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">Chart Title</h5>
            <div className="card-body overflow-auto">
              <Bar
                data={chartData}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Dummy Text",
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                    maintainAspectRatio: false,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">
              Settings <i className="bi bi-tools text-primary"></i>
            </h5>
            <div className="card-body">
              <div className="row p-2">
                <div className="col-lg-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="0"
                  >
                    <option value="0" disabled hidden>
                      Choose...
                    </option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                  </select>
                </div>
                <div className="col-lg-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="0"
                  >
                    <option value="0" disabled hidden>
                      Choose...
                    </option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                  </select>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-md-6">
                  <button className="btn btn-primary">Update Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">Example Title</h5>
            <div className="card-body overflow-auto">Dummy Text</div>
          </div>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">
              Api Status <i className="bi bi-gear-fill text-primary"></i>
            </h5>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <h6 className="list-group-item-heading">
                    Website and API
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark rounded-pill mx-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Tooltip on top"
                    >
                      ?
                    </button>
                  </h6>
                  <p className="list-group-item-text">
                    <span className="badge bg-success">Operational</span>
                  </p>
                </div>

                <div className="list-group-item">
                  <h6 className="list-group-item-heading">
                    SSH
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark rounded-pill mx-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Tooltip on top"
                    >
                      ?
                    </button>
                  </h6>
                  <p className="list-group-item-text">
                    <span className="badge bg-danger">Not Operational</span>
                  </p>
                </div>

                <div className="list-group-item">
                  <h6 className="list-group-item-heading">
                    Database Server
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark rounded-pill mx-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Tooltip on top"
                    >
                      ?
                    </button>
                  </h6>
                  <p className="list-group-item-text">
                    <span className="badge bg-success">Operational</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">
              Api Response Time <i className="bi bi-activity text-primary"></i>
            </h5>
            <div className="card-body">
              <Line data={data2} />
              <span className="text-muted">Dummy Text</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 border-light rounded">
            <h5 className="card-title">Table Example</h5>

            <span className="text-muted">Dummy Text</span>
            <div className="card-body overflow-auto">
              <table className="table table-hover align-middle">
                <thead>
                  <tr className="align-middle">
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">e-mail</th>
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 rounded border-light">
            <h5 className="card-title">Edit Actions</h5>
            <div className="card-body overflow-auto">Dummy Text</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

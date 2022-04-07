import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const Users = ({ username }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await Axios.get(process.env.REACT_APP_BACKEND_URL + "api/users/", {
      withCredentials: true,
    }).then(
      (res) => {
        setUsers(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container bg-white rounded my-2 p-3 table-responsive">
      <table className="table table-hover table-bordered align-middle caption-top">
        <caption>List of users</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">e-mail</th>
            <th scope="col">Username</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            index++;
            if (user.username !== username) {
              return (
                <tr key={user._id}>
                  <th scope="row">{index}</th>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success m-1 btn-sm"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary m-1 btn-sm"
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger m-1 btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={user._id} className="table-primary">
                  <th scope="row">{index}</th>
                  <td>{user.email + " (You)"}</td>
                  <td>{user.username + " (You)"}</td>
                  <td>{"(Currently logged in)"}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await Axios.get("/api/users/").then(
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
            if (user.username !== "admin") {
              return (
                <tr key={user._id}>
                  <th scope="row">{index}</th>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>Edit/Delete</td>
                </tr>
              );
            } else {
              return <tr key={user._id}></tr>;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

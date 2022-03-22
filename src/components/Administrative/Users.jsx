import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await Axios.get("/api/users/").then(
      (res) => {
        if (res.data.length > 0) {
          setUsers(res.data);
        } else {
          setUsers([]);
        }
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
    <div className="container bg-white rounded my-2 p-3 d-flex justify-content-center">
      <table className="table">
        <thead>
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
                  <th scope="row">{index + 1}</th>
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

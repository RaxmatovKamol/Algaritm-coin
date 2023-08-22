import React from "react";
import "./Students.css";
import { PatternFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

export const Students = () => {
  const handleAddCoin = (id) => {
    alert(id);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());

    const config = {
      method: "post",
      url: "http://localhost:8080/add/student",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: JSON.stringify(value),
    };

    axios(config)
      .then((res) => {
        const { message = "success", variant = "success" } = res.data;
        enqueueSnackbar(message, { variant });
      })
      .catch((err) => {
        const { message = "success", variant = "success" } = err.response.data;
        enqueueSnackbar(message, { variant });
      });
  };

  return (
    <div className="Students">
      <header className="st-header">
        <input
          type="search"
          name="search"
          autoComplete="off"
          placeholder="Student name, phone, group"
        />
        <div>
          <select name="group">
            <option value="all">All</option>
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
            <option value="4">Group 4</option>
          </select>
          <button popoverTarget="addStudent">Add a new student</button>
        </div>
      </header>

      <table className="st_table" border={1}>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Student</th>
            <th>Phone</th>
            <th>Coin</th>
            <th>Group</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return (
              <tr key={item.id} onDoubleClick={() => handleAddCoin(item.id)}>
                <td>{index + 1}</td>
                <td>{item.student}</td>
                <td>{item.phone}</td>
                <td>{item.coin}</td>
                <td>{item.group}</td>
                <td>
                  <Link to={`/student/${item.id}`}>More</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div id="addStudent" popover="manual">
        <form onSubmit={handleAddStudent}>
          <button
            type="button"
            popovertarget="addStudent"
            popovertargetaction="hide"
          >
            <SlClose />
          </button>

          <label>
            <span>Fullname</span>
            <input
              type="text"
              placeholder="Student name"
              required
              autoComplete="off"
              autoFocus
              name="fullname"
            />
          </label>
          <label>
            <span>Phone</span>
            <PatternFormat
              format="+998 ## ### ####"
              allowEmptyFormatting
              mask=" "
              name="phone"
            />
          </label>
          <label>
            <input type="submit" value="Add" />
          </label>
        </form>
      </div>
    </div>
  );
};

const students = [
  {
    id: 1,
    student: "Kamoljon",
    group: "1",
    phone: "0987654321",
    coin: 122,
    teacher: "Oybek",
  },
  {
    id: 2,
    student: "Lola",
    group: "1",
    phone: "0987654321",
    coin: 121,
    teacher: "Oybek",
    added: new Date(),
  },
  {
    id: 3,
    student: "Zoxid",
    group: "1",
    phone: "0987654321",
    coin: 212,
    teacher: "Oybek",
    added: new Date(),
  },
];

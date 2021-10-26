import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "antd";
import { deleteUser } from "../../redux/actions/actions";
import EditForm from "../EditForm/EditForm";
import "./UserCard.css";
import { Link } from "react-router-dom";
const UserCard = ({ id, data }) => {
  // console.log(username)
  // const [deleted,setdeleted]= useState(true)
  const [visible, setVisible] = useState(false);
  const { username, email, number, dob, city, Province } = data;
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setVisible(true);

    console.log(id);
  };

  const handledelete = (id) => {
    console.log(id, "on clicking");
    dispatch(deleteUser(id));
  };

  return (
    <>
      <div className="Usercard_Container">
        <div className="Usercard">
          <div className="Usercard_content">
            <h1>{username} </h1>
            <h2>Email:{email} </h2>
            <h2>PhoneNumber:{number} </h2>
            <h2>Date of Birth:{dob} </h2>
          </div>
          <div className="Usercard_address">
            <h1>Address</h1>
            <h2>City:{city} </h2>
            <h2>Province:{Province} </h2>
          </div>
        </div>
        <div className="buttons">
          <button className="edit_button" onClick={(e) => handleEdit(id)}>
            Edit
          </button>
          <button className="delete_button" onClick={(e) => handledelete(id)}>
            Delete
          </button>
          <Link to={`/userprofile/${id}`}>
            <button className="view_button">View Profile</button>
          </Link>
        </div>
      </div>

      <Modal
        title="Edit User Details"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
        <EditForm
          username={username}
          city={city}
          email={email}
          number={number}
          dob={dob}
          Province={Province}
          id={id}
        />
      </Modal>
    </>
  );
};

export default UserCard;

import React from "react";
import "./Content.css";
import UserForm from "../Components/UserForm/UserForm";
import UserList from "../Components/UserList/UserList";
const Content = () => {
  return (
    <>
      <div className="Content">
        <div className="Content_wrapper">
          <div className="Content-Userform">
            <UserForm />
          </div>
          <div className="Content_Table">
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

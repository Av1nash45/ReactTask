import React from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserData/UserCard";
const Table = () => {
  const users = useSelector((state) => state.userReducer.info);
  return (
    <>
      {users.map(({ id, data }) => {
        return <UserCard data={data} id={id} />;
      })}
    </>
  );
};

export default Table;

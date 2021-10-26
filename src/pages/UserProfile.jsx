import React from 'react'
import "./UserProfile.css"
import {useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import {HomeOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom"
const UserProfile = () => {
    // console.log(users.users[0],"user data from route")
    // const {username,email,number,dob,city,Province}= users.users[0]
    // const {id,data} = users[0];
    // const {username}= users.users
    // console.log(username,"data from reouer")
    const {id}= useParams();
    // console.log(id,"from params")
  const users = useSelector((state) => state.userReducer.info);
    console.log(users.id,"user data from route")
     
    // const newdata = users.filter(id === users.id)
    // console.log(newdata,"newdata ")
//   const newdata = users.map(())

   
    return (
        <>
        <div className="UserProfile">
        <div className="Userprofile_content">
        <div className="profile_heading">
        <Link to ="/" >
        <HomeOutlined  style={{fontSize:"150%" ,color:"blue"}}/>
        </Link>
        <h1 className="user_heading">
            User Profile
        </h1>
        </div>
        
        <div className="user_details">
            <h2>Name: </h2>
            <h2> Email:</h2>
            <h2>PhoneNumber:</h2>
            <h2> Date of Birth:</h2>
            <h2> Province:</h2>
            <h2> City:</h2>

        </div>
        </div>

        </div>
           
        </>
    )
}

export default UserProfile

import React from 'react'
import "./UserProfile.css"
import {useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import {HomeOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom"
const UserProfile = () => {
   
    const {id}= useParams();
    const users = useSelector((state) => state.userReducer.info);
    
    const newdata  = users.filter((doc)=>doc.id === id)
    const mappeddata = newdata.map((doc)=>{
        return doc.data
    })
const {username,email,number,dob,city,Province}= mappeddata[0];

   
    return (
        <>
        <div className="UserProfile">
        <div className="Userprofile_content">
        <div className="profile_heading">
        <Link to ="/" >
        <HomeOutlined  style={{fontSize:"150%" }}/>
        </Link>
        <h1 className="user_heading">
            User Profile
        </h1>
        </div>
        
        <div className="user_details">
            <h2>Name:{username} </h2>
            <h2> Email:{email} </h2>
            <h2>PhoneNumber:{number} </h2>
            <h2> Date of Birth:{dob} </h2>
            <h2> Province:{Province} </h2>
            <h2> City:{city} </h2>

        </div>
        </div>

        </div>
           
        </>
    )
}

export default UserProfile

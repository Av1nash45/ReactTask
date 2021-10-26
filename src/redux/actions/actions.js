import { actionType } from "./actionType";

export const signupUser = (data)=>{
    return{
        type:actionType.SIGNUP_USER,
        payload:{

            id:new Date().getTime().toString(),
            data:data
        
        }
    }
}

export const editUser = (id,data)=>{
    return{
        type:actionType.EDIT_USER,
        payload:{
           id,
           data,
        }
    }
}

export const deleteUser = (id)=>{
    return{
        type:actionType.DELETE_USER,
        payload:id,
    }
}
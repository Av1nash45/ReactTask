import { actionType } from "../actions/actionType";

const initialstate = {
    info:[],
    users:[],
}

export const userReducer  = (state= initialstate,{type,payload})=>{
    switch (type) {
        case actionType.SIGNUP_USER:
            return{
                ...state,
                info:[...state.info,payload]
            }
    case actionType.DELETE_USER:
        return{
            ...state,
            info: state.info.filter( info=>info.id !== payload)
        }
case actionType.EDIT_USER:
    
const filtereddata= state.info.filter(doc=>doc.id !==payload.id)   
return{
        ...state,
        info: [...filtereddata,payload]
    }
    // const { newInfo, id } = payload;
    // const filteredInfo = state.info.filter(delid => delid !== id); 
    // const editedInfo = [...filteredInfo, newInfo];
    // return {
    //     ...state,
    //     info: editedInfo

    // }
        default:
          return state;
    }

}
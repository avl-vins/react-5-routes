import { TYPE } from "../types/types";


export const AuthReducer = (state = {} , action ) => {
   
    const { type, payload} = action

    switch (type) {
   
        case TYPE.Login:
            
            return {...state, logged: true, user: payload}

        case TYPE.Logout:
            
            return { logged:false };
    
        default:
            return { state }
    }
}

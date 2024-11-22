import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { TYPE } from "../types/types"


const initialState ={
  logged:false
}

const init = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged:!!user ,
    user
  }
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(AuthReducer, initialState, init)
  
  const onLogin = (name) => {

    const user = {
      id:'ABC1',
      name:name
    }

    const action = {
      type:TYPE.Login,
      payload:user
    }
    
    localStorage.setItem( 'user', JSON.stringify(user) )

    dispatch(action)
  }

  const onLogout = () => {

    const action = {

      type:TYPE.Logout,
      payload:{
        logged:false
      }
    }

    dispatch(action)

    localStorage.removeItem( 'user' )

  }

  const val = {

    ...authState ,
    onLogin,
    onLogout

  }
    
return (
    <AuthContext.Provider value={val} >
        {children}
    </AuthContext.Provider>
  )
}

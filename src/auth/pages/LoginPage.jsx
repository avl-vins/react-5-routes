import { useNavigate } from "react-router-dom";
import { Boton } from "../../ui"
import { useContext } from "react";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const navigate = useNavigate()

  const { onLogin } = useContext(AuthContext)
  
  const handleLogin = ()=>{

    navigate('/',{replace:true})

    onLogin('avl-vins')

  }

  return (
    <>
      <div>LoginPage ssdasd</div>
      <Boton onclick={handleLogin} />
    
    </>
  )
}

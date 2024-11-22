import { useNavigate } from "react-router-dom";
import { Boton } from "../../ui"
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import styled from "styled-components";
import { AuthForm } from "../components";

const LoginContainer = styled.section`
margin: 0 auto;
display:flex;
justify-content:center;
align-items:center;
height:90vh;
flex-direction:column;

.msj{
  padding:2rem;
}
`

export const LoginPage = () => {

  const navigate = useNavigate()

  const { onLogin } = useContext(AuthContext)
  
  const handleLogin = (  user )=>{

    
    
    navigate('/',{replace:true})
    
    
    onLogin( user )

  }

  return (
    <LoginContainer>

      <AuthForm onLogin = { handleLogin } />
      <p className="msj"> App en construccion, agregue cualquier usuario y password e ingrese a la app</p>
    </LoginContainer>
  )
}

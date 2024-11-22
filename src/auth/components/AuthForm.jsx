import styled from "styled-components"
import { Boton, useForm } from "../../ui"



const Form = styled.form`
display:flex;
flex-direction:column;
gap:1rem;
text-align:left;
border:2px solid var(--colorBg2);
border-radius:.4rem;
padding:2rem;
background:var(--colorBg2);
box-shadow:0px 0px 10px 1px rgb(39,43,51);


.form__input{
display:flex;
flex-direction:column;
font-weight:600;
gap:.5rem;
}

input[type="text"],[type="password"] {
    padding:.5rem ;
    border:none;
    border-radius:.2rem;
    outline:none;
    font-size:1rem;
    font-weight:600;
}

`
export const AuthForm = ({ onLogin }) => {
  
    const { form, user , handleClear, handleOnChange } = useForm({ user:'', password:'' })
   
   const handleClick = ( e ) => {

        e.preventDefault();
        
        onLogin(user)

   }
  
  return (
     <Form onSubmit={ handleClick} >
        <div className="form__header">
            <h3 className="header__text">LOGIN</h3>
        </div>
         <div className="form__input">
            <label htmlFor="user">USER:</label>
            <input type="text" id="user" name="user" onChange={handleOnChange} 
            required  autoComplete="false" />
         </div>
         <div className="form__input">
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" id="password" name="password" required autoComplete="false" onChange={handleOnChange}  />
         </div>
        
        
        {/* <input type="submit" value="Iniciar Sesión" /> */}

        <Boton title="SEND" onclick={ ()=>{} } />
    </Form>
  )

}

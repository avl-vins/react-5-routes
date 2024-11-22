import { Link, NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/image/logo.png"
import { Boton } from "./Boton"
import { Searcher } from "./Searcher"
import { useContext } from "react"
import { AuthContext } from "../../auth"

const Navegation = styled.nav`

    display:flex;
    justify-content:space-between;
    padding:.5rem 2rem;
    gap:1rem;
    background:var(--colorBg2);
    border:2px solid transparent;
    border-radius:.5rem;
    font-weight:600;
    box-shadow:0px 0px 5px 1px rgb(39,43,51);
    align-items:center;

    .logo__img{
        max-width:120px;
    }

    .list{
        display:flex;
        gap:1rem;
        align-items:center;
        justify-content:center;
        
        .link{
            text-decoration:none;
            color:var(--colorRed);


        }
        
        .active{
            color:var(--colorYellow)
        }

    }

    .login{
        display:flex;
        gap:1rem;
        align-items:center;
    }
@media screen and (min-width:768px) and (max-width:1023px) {
    flex-wrap:wrap;
    padding:1rem;

    .login  {    
            display:none;
        }
    
}

@media(min-width:481px) and (max-width:767px)  {
    flex-wrap:wrap;
    padding:1rem;

    .login  {    
            display:none;
        }
  
    
}
        
@media (max-width:480px) {

    flex-direction:column;
    justify-content:center;   
    padding:1rem;
        .login  {    
            display:none;
        }
        .list{
            gap:.5rem
        }
}

`


export const Navbar = () => {
    
    const { user, onLogout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = ()=>{
     navigate("/login",{replace:true})
     onLogout()

    }
  return (
    <Navegation>
        <Link to="/" className="logo">
            <img className="logo__img" src="logo.png" alt="logo" />
        </Link>
        <ul className="list">

            <NavLink to="/saiyan" className={ ( { isActive } ) => ` ${ isActive ? "active" : "noactive" }  link `} >Saiyan</NavLink>
            <NavLink to="/android"  className={ ( { isActive } ) => ` ${ isActive ? "active" : "noactive" }  link `} >Android</NavLink>
            <NavLink to="/human"  className={ ( { isActive } ) => ` ${ isActive ? "active" : "noactive" }  link `} >Human</NavLink>
            <NavLink to="/namekian"  className={ ( { isActive } ) => ` ${ isActive ? "active" : "noactive" }  link `} >Namekian</NavLink>
            <NavLink to="/kaios"  className={ ( { isActive } ) => ` ${ isActive ? "active" : "noactive" }  link `} >Kaio's</NavLink>

        </ul>
        <Searcher />
        <div className="login">
            <span>{ user?user.name:'Invitado' }</span>
           <Boton title={ user ? 'Logout' : 'Login' } onclick = {handleLogout} />
        </div>
    </Navegation>
  )

}

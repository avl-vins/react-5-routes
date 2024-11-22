import styled from "styled-components"
import { FiSearch } from "react-icons/fi";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";


const SearcherContainer = styled.form`
 width:25%;
 height:auto;
 display:flex;
 align-items:center;
 border-radius:.5rem;
 background:#fff;
 padding:.5rem 1rem ;
 .search__input{
    border:none;
    outline:none;
    font-size:1rem;
    width:100%;    
    border-radius:.5rem;
    font-weight:600;
 }

 .search__icon{
    color:#000;
    font-size:1.5rem;
    font-weight:600;
    &:hover{
        cursor:pointer;
        scale:.95;
    }
    
    &:active{
        scale:1;

    }
 }

@media screen and (min-width:768px) and (max-width:1023px) {
   
    width:100%;
    
}

 @media(min-width:481px) and (max-width:767px)  {
    width:100%;
    
}
    @media (max-width:480px) {

  width:100%;
        
    
    
}

`
export const Searcher = () => {
     

    const { warriorSearch, handleOnChange, handleClear } = useForm({ warriorSearch:'' })
    
    const navigate = useNavigate()

    const handleSumbit = (e)=>{

        e.preventDefault();
     
        if(warriorSearch.trim().length < 2){
            return
        }


        handleClear()

        navigate(`/search?q=${warriorSearch}`)

    }

    

    


  return (
    <SearcherContainer onSubmit={handleSumbit}>

        <input type="text" className="search__input"  
               placeholder="Search warrior" name="warriorSearch" 
               maxLength="25" onChange={handleOnChange} value={warriorSearch}/>

        <FiSearch className="search__icon" onClick={handleSumbit} />

    </SearcherContainer>
  )
}

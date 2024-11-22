import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
import { useWarriorByName } from "../hooks";
import styled from "styled-components";
import { Card } from "../components/Card";
import { H2, Loading } from "../../ui";

const SearchPageContainer = styled.section`
    padding:2rem; 
    text-align:center;   
    .search__title{
      text-align:left;
      
    }
    .search__result{
    padding:2rem;    
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
    }

`

export const SearchPage = () => {
        
    const location = useLocation(); 
    
    const { q = ''} = queryString.parse(location.search);
   
    const {warriors,isLoading,hasError}  = useWarriorByName('https://dragonball-api.com/api/characters?limit=100', q)
    
    
    
  return (
    <SearchPageContainer>
        <h2 className="search__title" >Search result: {q}</h2>
        
        {
          hasError && <h2>{hasError}</h2>
        }
         {
          isLoading&&<Loading/>
         } 
        

        <div className="search__result">

        {
           (!isLoading && warriors.length > 0 )? warriors.map((warrior)=><Card key={warrior.id} {...warrior} />):<h2>We couldn't find anything to match your criteria. Try widening your search.</h2>
        }

        </div>
        
        
        
    </SearchPageContainer>
  )
}

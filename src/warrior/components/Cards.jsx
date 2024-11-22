import styled from "styled-components"
import { Card } from "./Card"
import { useData } from "../hooks"

const CardContainer = styled.section`
  padding-bottom:2rem;
  display:flex;
  flex-wrap:wrap;
  gap:2rem;

  justify-content:space-around;

  @media screen and (min-width:481px) and (max-width:767px)  {
    pdding:none;
    
    
}

  @media (max-width:480px) {
        justify-content:center;
  }
`

export const Cards = ({race}) => {
  
    const { warriors, isLoading, hasError } = useData('https://dragonball-api.com/api/characters?limit=100',race)
   
  return (
    <CardContainer>
      {
        
        !isLoading && warriors.map( (warrior)=> <Card key={warrior.id} {...warrior}   />) 
      
      }
    </CardContainer>
  )

}

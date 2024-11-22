import styled from "styled-components"
import { useData } from "../hooks"
import { CardTransform } from "./CardTransform"
import { H2 } from "."

const CardContainer = styled.section`
  padding:2rem;
  display:flex;
  flex-wrap:wrap;
  gap:2rem;

  justify-content:space-around;
`

export const CardsTransform = ({trans}) => {
  
  return (
    <CardContainer>
      
      {
        trans.map( (warrior)=> <CardTransform key={warrior.id} {...warrior}   />) 
      
      }
     
    </CardContainer>
  )

}

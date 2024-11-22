import { Link } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.div`
    min-width:280px;
    width:400px;
    // height:200px;
    border-radius:.4rem;
    border: 1px solid var(--colorBg2);
    background:var(--colorBg2);
    padding:1rem;
    display:flex;
    flex-direction:column;

    .card__image{
        // width:50%;
    }

    .card__container{
    //    height:150px;
       overflow: hidden;
    }

    .card__img{

    max-width:100%;
    height:400px;
  
        
    }
    
`

export const CardTransform = ({name,image, ki, id}) => {
    const path=`/warrior/${id}`
  return (
    <CardContainer>
        <div className="card__image">
        <h4 className="dato__title">{name}</h4>
            <div className="card__container">
                <img  className="card__img" src={image} alt="name" /> 
            </div>
            <p>Ki: {ki}</p>
        </div>
        
        
    </CardContainer>
  )
}

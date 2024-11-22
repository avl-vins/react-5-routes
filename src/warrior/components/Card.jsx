import { Link } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.div`
    min-width:280px;
    width:350px;
    height:200px;
    border-radius:.4rem;
    border: 1px solid var(--colorBg2);
    background:var(--colorBg2);
    padding:1rem;
    display:flex;
    flex-direction:row;
    box-shadow:0px 0px 10px 1px rgb(39,43,51);

    .card__image{
        width:50%;
    }

    .card__container{
       height:150px;
       overflow: hidden;
    }

    .card__img{

    max-width:100%;
  
        
    }
    .card__dato{
        width:50%;
        height:auto;
        display:flex;
        flex-direction:column;
        gap:1rem;
        text-align:left;

        .dato__description p{
            font-size:.875rem
        }
            
       
        .dato__link{
            color:var(--colorOrange);
            text-decoration:none;
            font-size:.875rem

        }
    }

@media screen and (min-width:768px) and (max-width:1023px) {
    width:320px;
   
    
}

@media screen and (min-width:481px) and (max-width:767px)  {
    
    width:280px;
    
}
@media (max-width:480px) {

  width:90%;
        
    
    
}
`

export const Card = ({name, affiliation, image, gender, ki, id}) => {
    const path=`/warrior/${id}`
  return (
    <CardContainer>
        <div className="card__image">
            <div className="card__container">
                <img  className="card__img" src={image} alt="name" /> 
            </div>
        </div>
        <div className="card__dato">
            <h4 className="dato__title">{name}</h4>
            <div className="dato__description">
                <p>Gender: {gender} </p>
                <p>Affiliation: {affiliation}</p>
                <p>Ki: {ki}</p>
            </div>
            <Link className="dato__link" to={path}>More ...</Link>
            
            
        </div>
    </CardContainer>
  )
}

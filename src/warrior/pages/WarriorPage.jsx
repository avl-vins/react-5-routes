import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useWarrior } from "../hooks"
import { CardsTransform, H2 } from "../components"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { Boton } from "../../ui"

const WarriorContainer = styled.section`
margin:0 auto;
width:80%;
padding:2rem 0;
display:flex;
flex-direction:column;
// justify-content:center;
// align-items:center;

.warrior__title{
padding:2rem;
}

.warrior__body{
display:flex;
justify-content:center;
 
}
.warrior__image{
  width:25%;
  margin:0 auto;
} 
 .warrior__image .image{
 max-width:100%;
 }
.warrior__description{
  width:40%;
  text-align:left;
}
.description__body{
  padding:1rem;
}
.descrption__p{
  padding:1rem;
  text-align:justify;
}
.description__span{
  font-weight:800;
}


@media screen and (min-width:768px) and (max-width:1023px) {
     
  .warrior__title{
    padding:1rem;
  }
 
  .warrior__body{
  // flex-direction:column;
  }
  .warrior__description{
    // display:none;
  }
  .descrption__p{
  padding:1rem 0 ;
  text-align:justify;
  }
   
    
}

@media screen and (min-width:481px) and (max-width:767px)  {
      width:100%;
  .warrior__title{
    padding:1rem;
  }
  .warrior__image{
    width:40%;
    margin:0 auto;
  } 
  .warrior__body{
  flex-direction:column;
  }
  .warrior__description{
    display:none;
  }
  .descrption__p{
  padding:1rem 0 ;
  text-align:justify;
  }
   
    
}
@media (max-width:480px) {
  width:100%;
  .warrior__title{
    padding:1rem;
  }
  .warrior__image{
    width:40%;
    margin:0 auto;
  } 
  .warrior__body{
  flex-direction:column;
  }
  .warrior__description{
    display:none;
  }
  .descrption__p{
  padding:1rem 0 ;
  text-align:justify;
  }
 
        
    
    
}

`

export const WarriorPage = () => {
  const {id} = useParams()
  
    const {warrior , isLoading , hasError} = useWarrior(`https://dragonball-api.com/api/characters/${id}`)


    const {affiliation,
      description,
      gender,
      image,
      ki,
      maxKi,
      name,
      originPlanet, 
      race,
      transformations} = warrior 

    const navigate = useNavigate()

    const handleNavigate = ()=>{
      navigate(-1)
    }
    
    if(hasError){
      return <Navigate to="/" />
    }
    
  return (
   <WarriorContainer>
        
    <h2 className="warrior__title" >{name}</h2>
    
    <div className="warrior__body">
        <div className="warrior__image">
          <img className="image" src={image} />
        </div>
        <div className="warrior__description">
        <div className="description__body">
        <p className="descrption__p">
        <span className="description__span">Affiliation: </span> {affiliation}
        </p>
        <p className="descrption__p">
        <span className="description__span">Gender: </span>{gender}
        </p>
        <p className="descrption__p">
        <span className="description__span">Power Ki: </span>{ki}
        </p>
        <p className="descrption__p">
        <span className="description__span">Maximo Power Ki: </span>{maxKi}
        </p>
        <p className="descrption__p">
        <span className="description__span">Race:  </span>{race}
        </p>
      
        </div>
        </div>
    </div>
    <p className="descrption__p">
    <span className="description__span">Description: </span>{description}
    </p>
      {/* {
        trans&&<H2>Transformations</H2>
      }
    {
      trans&& <CardsTransform trans={transformations} />
    }
     */}

     <Boton title="Go back" onclick={handleNavigate} />

</WarriorContainer>
  )
}

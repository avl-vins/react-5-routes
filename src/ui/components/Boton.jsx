import styled from "styled-components"

const BotonContainer = styled.button`
    padding:.6rem 1.5rem;
    border-radius:.3rem;
    font-weight:600;
    background:${({$bgBoton})=>$bgBoton===""?'#cb2328':$bgBoton};
    color:${({$fontBoton})=>$fontBoton===""?'#fef32b':$bgBoton};
    border:none;
    outline:none;
    font-size:1rem;
    &:hover{
        cursor:pointer;
        scale:.98;
    }

    &:active{
        scale:1;
    }

`
export const Boton = ( { title="boton", bgBoton="", fontBoton="", onclick } ) => {
  return (
    <BotonContainer $bgBoton={bgBoton} $fontBoton={fontBoton} onClick={()=>onclick()} >
        {title}
    </BotonContainer>
  )
}

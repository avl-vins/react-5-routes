
import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
import styled from "styled-components";

const DbzContainer = styled.section`
        width:100%;
        max-width:1366px;
        margin:0 auto;
        padding:1rem 2rem;


  @media (max-width:480px) {
        padding:1rem ;
  }
`


export const DbzApp = () => {
  
    
  
   return (
    <DbzContainer>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </DbzContainer>
  )
}

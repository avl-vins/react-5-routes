import { Route, Routes } from "react-router-dom"
import { WarriorProvider, WarriorRoutes } from "../warrior"
import { LoginPage } from "../auth"
import { PrivateRoutes } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <WarriorProvider>
               <Routes >
          

          <Route path="login"     element={
              <PublicRoute>
                 <LoginPage/> 
              </PublicRoute>
          }/>
          
          <Route path="/*"         element={ 
            <PrivateRoutes>
              <WarriorRoutes/>
           </PrivateRoutes> 
          
          } />
          

          {/* <Route path="/*"         element={ <WarriorRoutes/> } /> */}



      </Routes >
            </WarriorProvider>

       
  )
}

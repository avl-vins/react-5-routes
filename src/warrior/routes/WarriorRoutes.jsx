
import { AndroidPage, HumanPage, KaioPage, Namekian, SaiyanPage, SearchPage, WarriorPage } from '../pages'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Navbar } from '../../ui'

export const WarriorRoutes = () => {

 

  return (
    <>
        <Navbar />
    
        <Routes>
                <Route path="/saiyan"      element={<SaiyanPage/>  }/>
                <Route path="/human"       element={<HumanPage/>   }/>
                <Route path="/namekian"    element={<Namekian/>    }/>
                <Route path="/android"     element={<AndroidPage/> }/>
                <Route path='/kaios'      element={<KaioPage /> }/>
                <Route path='/warrior/:id' element={<WarriorPage/> }/>
                <Route path='/search'      element={<SearchPage /> }/>


                <Route path="/"         element={<Navigate to="/saiyan" />} />

        </Routes>
    </>
    
  )
}

import { useNavigate } from "react-router-dom"
import { WarriorContext } from "./WarriorContext"
import { useEffect, useState } from "react"

export const WarriorProvider = ({children}) => {


    
return (
    <WarriorContext.Provider value={''} >
        {children}
    </WarriorContext.Provider>
  )
}

import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


    





export const getWarrior = async(link) => {
    const res ={}
    try{
        const respons = await fetch(link)
        const data = await respons.json()
        res[data]=data
    }catch(error){
        res[hasError]=error.message
        
    }

    return res
    
    
}

    




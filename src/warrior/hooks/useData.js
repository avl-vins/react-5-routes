import { useEffect, useState } from "react"

export const useData = (link,race='saiyan') => {

  const [ state,setState ] = useState({warriors:[], isLoading:null, hasError:null })

  race = race.toLowerCase()

  const validRace = [ 'saiyan','android','namekian','human', "god", "angel", "nucleico", "nucleico benigno" ]

  const getData = async ()=>{
    
    setState({warriors:[], isLoading:true, hasError:null }) 
    
    

    try {

      if( !validRace.includes(race) ){

        throw new Error(`${race} is not valid`);
       
       }
     

        const respons = await fetch(link)
        
        if( !respons.ok ){

           throw new Error(`Error al obtener datos: Error:${respons.status}`)
           
        }
    
        const data = await respons.json()
        
        // const filterRace = data.items.filter((item)=>item.race.toLowerCase() === race)
        const filterRace = data.items.filter((item)=>item.race.toLowerCase().includes(race))

        
        setState({warriors:filterRace, isLoading:false, hasError:null })
    
    
    } catch (error) {
        
        setState({warriors:[], isLoading:false, hasError:error.message })   
    
    }
      
  }



  useEffect(()=>{
    getData()
  },[])
  
    return {warriors:state.warriors, isLoading:state.isLoading, hasError:state.hasError }
}
import { useEffect, useState } from "react"

export const useWarrior = (link) => {

  const [ state,setState ] = useState( {warrior:{}, isLoading:null, hasError:null } )
 
  const getData = async ()=>{
    
    setState( {warrior:{}, isLoading:true, hasError:null }) 
    
    

    try {

        const respons = await fetch(link)
        
        if( !respons.ok ){

           throw new Error(`Error al obtener datos: Error:${respons.status}`)
           
        }
    
        const data = await respons.json()
        
        
        setState({warrior:data, isLoading:false, hasError:null })
    
    
    } catch (error) {
        
        setState({warrior:{}, isLoading:false, hasError:error.message })   
    
    }
      
  }



  useEffect(()=>{
    getData()
  },[])
  
    return {warrior:state.warrior, isLoading:state.isLoading, hasError:state.hasError }
}
import { useEffect, useState } from "react"


export const useWarriorByName = (url,name) => { 

    const [ state,setState ] = useState( {warriors:[], isLoading:null, hasError:null } )
 
    const getData = async ()=>{
      
      setState({ warriors:[], isLoading:true, hasError:null }) 
     
      
      try {
          const respons = await fetch(url)
          
          if( !respons.ok ){
  
             throw new Error(`Error al obtener datos: Error:${respons.status}`)
             
          }
      
          const data = await respons.json()
              
          
                
                const res = data.items.filter( (warrior)=>{

                     return warrior.name.toLowerCase().includes(name)
                   
                })
                
          setState({warriors:res, isLoading:false, hasError:null })
      
      
      } catch (error) {
          
          setState({ warriors:[], isLoading:false, hasError:error.message })   
      
      }
        
    }
  
  
  
    useEffect(()=>{
      getData()
    },[name])


  return {
    warriors:state.warriors, isLoading:state.isLoading, hasError:state.hasError
  }
}

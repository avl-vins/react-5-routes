
export const getWarriorByName = async( link ) => {
    
    try{
        const respons = await fetch(link)
        const data = await respons.json()
        res[data]=data
    }catch(error){
        res[hasError]=error.message
        
    }

    return res
    
    
}
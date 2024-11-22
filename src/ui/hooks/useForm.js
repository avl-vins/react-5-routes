import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
    const [ form, setForm ] = useState(initialForm)


    const handleOnChange = ({target}) => {

        const { name, value } = target;

        setForm({...form , [name]:value})

    }

    const handleClear = ()=>{

        setForm(initialForm)

    }


    return {
        form, ...form, handleClear, handleOnChange
    }
}

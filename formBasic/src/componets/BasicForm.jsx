import { useState } from "react";

export default function BasicForm() {
    const [text, setText] = useState("")

    const handChangeText =(event) => {
        setText(event.target.value)
    }
    
    return(
        <div>
          
            <h3>{text}</h3>
            <input  name='text' onChange={handChangeText}/>


        </div>

    )

}
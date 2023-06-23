import { useState } from "react"
import { preprocessCSS } from "vite"
export default function GenerateFrom({ item }) {
    const [fieldData,setFieldData]=useState(item)

    console.log(fieldData)
    return (
        <div>
            {
                Object.keys(item).map(value => {

                    return (typeof item[value] == 'object'
                        ?
                        <fieldset style={{border:'1px solid gray', marginBottom:'20px'}} className="form-control">
                            <legend>{value}</legend>
                            <GenerateFrom item={item[value]} />
                            
                        </fieldset>
                        :
                        <div className="p-2">
                            <label htmlFor={value}> {value} </label>
                            <input type="text" name={value} id={value} value={item[value]} onChange={(e)=>e.target.value} className="form-control"/>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
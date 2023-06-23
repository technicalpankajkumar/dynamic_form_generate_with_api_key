import React,{memo} from 'react'

export default memo(function Textarea({name, label,outerClass,...rest}){
    console.log("message render")
    return (
        <div className={outerClass}>
            { label ? <><label htmlFor={name}>{`${label} :`}</label><br/></>:<span></span>}
            <textarea {...rest} id={name}></textarea>
        </div>
    )
})
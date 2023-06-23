import React,{memo} from 'react'

export default memo(function File({label,outerClass,name,...rest}){
  console.log("file render")
    return (
        <div className={outerClass}>
           { label ? <> <label htmlFor={name}>{`${label} :`}</label><br/></>:<span></span>}
            <input type="file" name={name} id={name} {...rest}/>
        </div>
    )
})
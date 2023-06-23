import React,{memo} from 'react';

export default memo(function Input({name,label,type,outerClass,...rest} ){

    console.log("render input")
  return (
    <>
    <div className={outerClass}>
    { label ? <><label htmlFor={name} >{`${label} :`}</label><br/> </>:<span></span>}
        <input type={type} name={name} id={name} {...rest}/>
    </div>
    </>
  )
} )
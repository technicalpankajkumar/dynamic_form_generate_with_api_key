import React from 'react';

export default function Radio({ label, options,name,outerClass, ...rest }) {
    return (
        <div className={outerClass}>
           { label ? <><label >{`${label} :`}</label><br /></>:<span></span>}
            {
                options.map((opt,index) => {
                    return <span key={index}>
                        <input  type='radio' name={name} id={opt.value} value={opt.value} {...rest} />
                        <label >{opt.label}</label> &nbsp;
                    </span>
                })
            }
        </div>
    )
}   
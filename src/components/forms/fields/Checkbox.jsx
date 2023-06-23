import React,{memo} from 'react';

export default memo(function Checkbox({ options,label,outerClass,checkLabelClass,...rest }) {
    console.log("checkbox render")
    return (
        <div className={outerClass}>
            { label ? <><label >{`${label} :`}</label><br /></>:<span></span>}
            {
                options.map((opt,index) => {
                    return <span key={index}>
                        &nbsp;<input type="checkbox" name={opt.name} id={opt.value} value={opt.value} {...rest} /> &nbsp;
                        <label htmlFor={opt.name} className={checkLabelClass}>{opt.label}</label> &nbsp;
                    </span>
                })
            }

        </div>
    )
}  )
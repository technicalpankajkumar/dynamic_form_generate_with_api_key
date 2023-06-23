import React,{memo} from 'react';

export default memo( function Select({ options,onChange,outerClass, name,label,...rest }) {
   console.log("select render")
    return (
        <div className={outerClass}>
            { label ? <> <label htmlFor={name}>{`${label} :`}</label><br/> </>:<span></span>}
            <select onChange={onChange.bind(this)}  {...rest} >
                {
                    options.map((opt) => {
                        return <option name={opt.key} value={opt.value} key={opt.value}>{opt.key}</option>
                    })
                }
            </select>
        </div>
    )
})
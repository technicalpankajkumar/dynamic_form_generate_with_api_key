
export default function GenerateFrom({ data,handleFunction, legend=''}) {

    return (
        <div>
            {
                Object.keys(data).map(element=> {
                    return (typeof data[element] == 'object'
                        ?
                        <fieldset style={{border:'1px solid gray', marginBottom:'20px'}} className="form-control">
                            <legend>{element}</legend>
                            <GenerateFrom data={data[element]} handleFunction={handleFunction} legend={element}/>
                        </fieldset>
                        :
                        <div className="p-2">
                            <label htmlFor={element}> {element} </label>
                            <input type="text" name={element} id={element} value={data[element]} onChange={(e)=>{handleFunction(e,legend)}} className="form-control"/>    
                        </div>
                    )
                })
            }
        </div>
    )
}
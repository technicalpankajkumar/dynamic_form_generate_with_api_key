export default function GenerateFrom({ data, handleFunction, legend = '' }) {
    return (
        <div>
            {
                Object.keys(data).map(element => {
                    return (typeof data[element] == 'object'
                        ?
                        <div className={`form-control`}>
                            <h6>{element.toUpperCase()}</h6>
                            <GenerateFrom data={data[element]} handleFunction={handleFunction} legend={element+"."+[legend]} />
                        </div>
                        :
                        <div className="p-2">
                            <label htmlFor={element}> {element} </label>
                            <input
                                type="text"
                                name={element}
                                value={data[element]}
                                onChange={(e) => { handleFunction(e, legend) }}
                                className="form-control"
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
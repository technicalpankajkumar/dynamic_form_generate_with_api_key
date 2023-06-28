import { image_Regex } from "../Regex"

export default function GenerateFrom({ data, handleFunction, legend = '' }) {
    return (
        <div>
            {
                Object.keys(data).map(element => {
                    return (typeof data[element] == 'object'
                        ?
                        <div className={`form-control`}>
                            <h6>{typeof Number(element) == 'number' ?  Number(element) + 1 || element.toUpperCase() : element.toUpperCase()} </h6>
                            <GenerateFrom data={data[element]} handleFunction={handleFunction} legend={element + "." + [legend]} />
                        </div>
                        :
                        <div className="p-2">
                            <label htmlFor={element}> {typeof Number(element) == 'number' ?  Number(element) + 1 || element : element} </label>
                            {
                                (element.toLowerCase() == "id" || element.toLowerCase() == 'userid')
                                    ?
                                    <input
                                        type="text"
                                        name={element}
                                        value={data[element]}
                                        disabled={true}
                                        onChange={(e) => { handleFunction(e, legend) }}
                                        className="form-control"
                                    />
                                    :
                                    String(data[element]).match(image_Regex) ?
                                        <div>
                                            <img
                                                src={data[element]}
                                                height={"100px"}
                                                width={"100px"}
                                                className="img-fluid img-thumbnail mb-2" />
                                            <input
                                                type="file"
                                                name={element}
                                                onChange={(e) => { handleFunction(e, legend) }}
                                                className="form-control"
                                            />
                                        </div>
                                        :
                                        <input
                                            type="text"
                                            name={element}
                                            value={data[element]}
                                            onChange={(e) => { handleFunction(e, legend) }}
                                            className="form-control"
                                        />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
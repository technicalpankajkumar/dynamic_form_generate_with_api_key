import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAPI, UpdateAPI } from "../FetchAPI";
import GenerateFrom from "./GenerateForm";
import Button from "../Button";

export default function Form() {
    const [data, setData] = useState({})
    const param = useParams()

    useEffect(() => {
        GetAPI(setData, param.id)
    }, [])

    //onchange handle function
    const handleFunction = (e, legend) => {
        console.log(legend)
        const recursiveFn = (data, legend) => {
            Object.keys(data).map(element => {
                if (element == e.target.name || element == legend) {
                    if (typeof data[element] == 'object' || typeof data[legend] == 'object') {
                        if (legend && e.target.name) {
                            setData({
                                ...data, [legend]: { ...data?.[legend], [e.target.name]: e.target.value }
                            })
                        }   
                    }
                    else {
                        setData({ ...data, [e.target.name]: e.target.value })
                    }
                }
            })
        }
        recursiveFn(data,legend)
    }

    //handle submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        UpdateAPI(param.id, data)
    }

    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 border rounded my-3 py-2">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Update Form</h2>
                    <GenerateFrom data={data} handleFunction={handleFunction} />
                    <Button type="submit" className="btn btn-md btn-primary">Submt</Button>
                </form>
            </div>
        </div>
    )
}
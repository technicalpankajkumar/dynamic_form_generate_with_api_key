import { useEffect, useState } from "react";
import Field from "../forms/controls/Field";
import { useParams } from "react-router-dom";
import { GetAPI } from "../FetchAPI";
import GenerateFrom from "./GenerateForm";
import Button from "../Button";

export default function Form() {
    const [data, setData] = useState([])
    const param = useParams()

    useEffect(() => {
        GetAPI(setData, param.id)
    }, [])

    console.log(Object.keys(data))
    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 border rounded my-3 py-2">
                <form>
                    <h2 className="text-center">Update Form</h2>
                    <GenerateFrom item={data} />
                    <Button type="submit" className="btn btn-md btn-primary ">Submt</Button>
                </form>
            </div>
        </div>
    )
}
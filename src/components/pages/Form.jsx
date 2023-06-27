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

        let solveProblem = legend.split(".").reverse().filter(ele => ele !== '')

        console.log(solveProblem)

        if (solveProblem.length == 1 || solveProblem.length == 0) {

            Object.keys(data).map(element => {
                if (element == e.target.name || element == solveProblem[0]) {
                    if (typeof data[element] == 'object' || typeof data[solveProblem[0]] == 'object') {

                        if (data[solveProblem[0]] && e.target.name) {
                            setData({
                                ...data, [solveProblem[0]]: { ...data?.[solveProblem[0]], [e.target.name]: e.target.value }
                            })
                        }

                    }
                    else {
                        setData({ ...data, [e.target.name]: e.target.value })
                    }
                }
            })
        }
        else if (solveProblem.length == 2) {
            let data1 = solveProblem[0]
            let data2 = solveProblem[1]
            setData((pre) => ({
                ...pre,
                [data1]: {
                    ...pre?.[data1],
                    [data2]: {
                        ...pre?.[data1]?.[data2],
                        [e.target.name]: e.target.value
                    }
                }
            })
            )
        } else if (solveProblem.length == 3) {
            let data1 = solveProblem[0]
            let data2 = solveProblem[1]
            let data3 = solveProblem[2]
            setData((pre) => ({
                ...pre,
                [data1]: {
                    ...pre?.[data1],
                    [data2]: {
                        ...pre?.[data1]?.[data2],
                        [data3]: {
                            ...pre?.[data1]?.[data2]?.[data3],
                            [e.target.name]: e.target.value

                        }
                    }
                }
            })
            )
        }
        else if (solveProblem.length == 4) {
            let data1 = solveProblem[0]
            let data2 = solveProblem[1]
            let data3 = solveProblem[2]
            let data4 = solveProblem[3]
            setData((pre) => ({
                ...pre,
                [data1]: {
                    ...pre?.[data1],
                    [data2]: {
                        ...pre?.[data1]?.[data2],
                        [data3]: {
                            ...pre?.[data1]?.[data2]?.[data3],
                            [data4]: {
                                ...pre?.[data1]?.[data2]?.[data3]?.[data4],
                                [e.target.name]: e.target.value
                            }

                        }
                    }
                }
            })
            )
        }

    }

    //handle submit
    const handleSubmit = (e) => {
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
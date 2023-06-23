import React, { memo } from 'react'
import ProTable from './ProTable'
import { image_Regex } from '../Regex'
import Button from '../Button'


function ConditionalMainTable({ apiData , deleteData ,editData }) {
     
    let allKeys = apiData.length != 0 && Object.keys(apiData[Object.keys(apiData)[0]][0])
    
    return (
        <table border="1px" className='table table-hover table-bordered'>
            <thead>
                <tr className='table-success'>
                    {
                        apiData.length != 0 && allKeys.map((key, index) => {
                            return <th key={index}>{key}</th>
                        })
                    }
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    apiData.length != 0 && apiData[Object.keys(apiData)[0]].map((item, index) => {
                        return (
                            <tr key={index}>
                                {
                                    allKeys.map((key,index )=> {
                                        return (typeof item[key] == 'object') //nested table
                                            ?
                                            <td key={index}><ProTable item={item[key]} className={'table tabel-secondary'}/></td>
                                            :
                                            image_Regex.test(item[key]) 
                                            ?
                                             <td><img src={item[key]} height={"100px"} width={"100px"} title={"Image not loaded"}/></td>
                                            :
                                            <td key={index}>{item[key]}</td>

                                    })
                                }
                                <td>
                                    {/* <button className='btn btn-md btn-danger m-2' onClick={()=> deleteData(item.id)}>Delete</button> */}
                                    <Button className='btn btn-md btn-danger m-2' onClick={()=>deleteData(item.id)}>Delete</Button>
                                    <Button className="btn btn-md btn-warning m-2" onClick={()=>editData(item.id)}>Edit</Button>
                                </td>
                            </tr>
                            
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default memo(ConditionalMainTable)
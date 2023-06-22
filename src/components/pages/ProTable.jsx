import React,{useState} from 'react'


export default function ProTable({item}){

    return (
        <table>
            <thead>
                {
                    <tr>
                        {
                            Object.keys(item).map(nestedKey => {
                                // setNestedItem([...nestedItem,[nestedKey]])
                                return <th>{nestedKey}</th>
                            })
                        }
                    </tr>
                }
            </thead>
            <tbody>
                {
                    console.log("chalr raha hai")
                }
                {
                    
                   Object.keys(item).map(nestedKey => {
                        typeof item[nestedKey] == 'object'   //[][][][][][][][]
                        ? 
                        <td><ProTable item={item[nestedKey]}/></td>
                        // <td></td>
                        :
                        <td>{item[nestedKey]}</td>
                    })
                   
                }
            </tbody>
        </table>
    )
}
import {image_Regex} from '../Regex'
import ProTable from './ProTable'

export default function ProTableBody({item,className=""}){

    return (
        <tbody>
        {
            <tr className={className}>
                {
                    Object.keys(item).map((nestedKey, index) => {
                        return typeof item[nestedKey] == 'object'
                            ?
                            <td><ProTable item={item[nestedKey]} key={index} className={className}/></td>
                            :
                            image_Regex.test(item[nestedKey]) 
                            ?
                            <td>
                                <img src={item[nestedKey]} height={"100px"} width={"100px"} title={"image not loaded"} />
                            </td>
                            :
                            <td>{item[nestedKey]}</td>
                    })
                }
            </tr>
        }
    </tbody>
    )
}
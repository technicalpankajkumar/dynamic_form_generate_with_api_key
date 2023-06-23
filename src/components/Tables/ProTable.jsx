import ProTableHeader from './ProTableHeader'
import ProTableBody from './ProTableBody'

export default function ProTable({ item , className}) {

    return (
        <table className={className}>

            {/* table header */}
            <ProTableHeader item={item} className={'table-secondary'}/>

            {/* table body */}
            <ProTableBody item={item} className={className}/>
            
        </table>
    )
}
export default function ProTableHeader({ item, className }) {

    return (
        <thead>
            {
                <tr className={className}>
                    {
                        Object.keys(item).map((nestedKey, index) => {
                            return <th key={index}>{nestedKey}</th>
                        })
                    }
                </tr>
            }
        </thead>
    )
}
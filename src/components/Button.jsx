export default function Button({type,onClick,children,...rest}){

    return (
        <button type={type} onClick={onClick} {...rest}>{children}</button>
    )
}
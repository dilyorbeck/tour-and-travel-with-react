const Input = ({title}) =>  {
    return (
        <select className="border rounded-md outline-none items-center justify-center px-7 mr-8 h-10 w-full">
            <option value="0">{title}</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
    )
}
export default Input
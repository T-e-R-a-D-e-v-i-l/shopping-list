function Button (props) {
    const  { title, click } = props
    return (
        <button onClick={click} className="bg-amber-300 rounded-md py-2 px-6 hover:bg-amber-400">{title}</button>
    )
}

export default Button
const ButtonFunc = ({ text, ...rest }) => {
    return (
        <div {...rest}>
            <p className="m-0 text-white fw-bold fs-4">{text}</p>
        </div>
    )
}

export default ButtonFunc;
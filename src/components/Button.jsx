function Button({toggleFunction, children}) {
    return <button onClick={toggleFunction}>{children}</button>
}

export default Button;
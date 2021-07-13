

const Button = ({ text, onClick, color }) => {
    
    return (
    <button
        onClick={onClick}
        className='btn'
        style={{backgroundColor: color, borderRadius: 6}}>{text}</button>
    )
}

export default Button

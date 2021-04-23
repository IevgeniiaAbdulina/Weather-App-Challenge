import './Button.css'

const Button = ({ value, myClassName }) => {
    return ( 
        <input 
            type='button' 
            className={`${myClassName} button`}
            name={myClassName} 
            value={value}
        />
     );
}
 
export default Button;
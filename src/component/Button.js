import "./Button.css";

const Button = ({ text, type, onClink }) => {
    const btnType =['positive','negative'].includes(type) ? type : 'defalut';
    return (
        <button type="button" className={["Button",`Button_${btnType}`].join(" ") }
            onClick={onClink}>
            {text}
        </button>
    )
}

export default Button;
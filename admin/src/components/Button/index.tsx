
import './index.css'

export interface ButtonProps {
    label?: string
    onClick?: ()=>void
}

export const Button = ({
    label="clickme",
    onClick
}:ButtonProps)=>{
    return (
        <button id="button" onClick={onClick}>
            {label}
        </button>
    )
}
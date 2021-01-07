
import './index.css'

export interface ChipProps {
    label?: string
}

export const Chip = ({
    label="label",
}:ChipProps)=>{
    return (
        <p id="chip">
            {label}
        </p>
    )
}
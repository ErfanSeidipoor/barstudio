import { Tag } from "../../Models";
import { Button } from "../Button";
import { Chip } from "../Chip";
import './index.css'

export interface TagCardProps {
    tag: Tag,
    onDetailsClick?: ()=>void
}

export const TagCard = ({
    tag,
    onDetailsClick
}:TagCardProps)=>{
    const renderTags = ()=>(
        <div className="chips">
            <h3 className="title">Products: </h3>
            {
                tag.products.map(product=><Chip key={product.id} label={product.name}/>)
            }
        </div>
    )

    return (
        <div id="tag-card">
            <h3 className="id">{tag.id}</h3>
            <h3 className="name">{tag.name}</h3>
            {renderTags()}
            {onDetailsClick && <Button label={"Details"} onClick={onDetailsClick} />}
        </div>
    )
}
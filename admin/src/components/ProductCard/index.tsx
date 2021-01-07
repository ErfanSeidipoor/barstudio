import { Product } from "../../Models";
import { Button } from "../Button";
import { Chip } from "../Chip";
import './index.css'

export interface ProductCardProps {
    product: Product,
    onDetailsClick?: ()=>void,
}

export const ProductCard = ({
    product,
    onDetailsClick
}:ProductCardProps)=>{


    const renderTags = ()=>(
        <div className="chips">
            <h3 className="title">Tags: </h3>
            {
                product.tags.map(tag=><Chip key={tag.id} label={tag.name}/>)
            }
            
        </div>
    )

    return (
        <div id="product-card">
            <h3 className="id">{product.id}</h3>
            <h3 className="name">{product.name}</h3>
            {renderTags()}
            {onDetailsClick && <Button label={"Details"} onClick={onDetailsClick} />}
        </div>
    )
}
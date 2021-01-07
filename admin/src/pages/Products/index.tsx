
import { GET_ALL_PRODUCTS_WITH_TAGS_URL } from "../../Services/constants";
import { ProductCard } from "../../components/ProductCard";
import { Button } from "../../components/Button";
import useAxios from 'axios-hooks'
import { Product } from "../../Models";
import { useHistory } from "react-router-dom";
import './index.css'

const ProductsPage  = ()=>{

    const [{ data, loading, error }] = useAxios<Product[]>(GET_ALL_PRODUCTS_WITH_TAGS_URL)    
    const history = useHistory()
     
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div id="products-page">
            <h1 className="header">
                {"List of All Products"}
            </h1>
            <Button label={"Add New Product"} onClick={()=>history.push("products/create")}/>

            {
                data?.map(product=>(
                    <ProductCard
                        key={product.id}
                        product={product}
                        onDetailsClick={()=>history.push("products/"+product.id)}
                    />
                ))
            }
        </div>
    )   
}

export default ProductsPage
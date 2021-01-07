
import { useState } from "react";
import { Button } from "../../components/Button";
import {  createProduct, } from "../../Services";
import { useHistory } from "react-router-dom";

import './index.css'

const CreateProductPage  = ()=>{
    const [productName, setProductName] = useState("")
    const history = useHistory()

    return (
        <div id="create-product-page">
            <h1 className="header">
                {"Add New Product "}
            </h1>
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                name: <input
                    value={productName}
                    onChange={e=>setProductName(e.target.value)}
                />
                <Button
                    label={'change'}
                    onClick={()=>createProduct(productName).then(res=>history.push('/products/'+res.data.id))}
                />
            </form>
        </div>
    )   
}

export default CreateProductPage
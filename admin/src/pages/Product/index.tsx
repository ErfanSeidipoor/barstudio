
import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Button } from "../../components/Button";
import { Chip } from "../../components/Chip";
import { RouteComponentProps } from "react-router-dom";
import useAxios from 'axios-hooks'
import { Product, Tag } from "../../Models";
import {
    updateProductName,
    updateProductTags,
    GET_PRODUCT_BY_ID_WITH_TAGS_URL,
    GET_ALL_TAGS_URL,
} from "../../Services";

import './index.css'


interface ProductPageProps extends RouteComponentProps<{productId:string}> {
}

const ProductPage  = ({
    match:{params:{productId}}
}:ProductPageProps)=>{

    const [{ data, loading, error },refetch] = useAxios<Product>(GET_PRODUCT_BY_ID_WITH_TAGS_URL(productId))
    const [{ data:allTags }] = useAxios<Tag[]>(GET_ALL_TAGS_URL)
    const [productName, setProductName] = useState("")
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(()=>{
        data && setProductName(data.name)
        data && setTags(data.tags)
    },[data])


    const toggleTags = (id:number)=> {
        let tag_ =tags.find(tag=>tag.id===id)

        if(tag_)
            return setTags(tags.filter(tag=>tag.id!==id)) 

        tag_ = allTags?.find(tag=>tag.id===id)
        setTags([...tags, tag_!]) 
    }

    const renderEditName = ()=>(
        <>
            <h1 className="header">
                {"Edit Product Name"}
            </h1>
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                name: <input
                    value={productName}
                    onChange={e=>setProductName(e.target.value)}
                />
                <Button
                    label={'change'}
                    onClick={()=>updateProductName(productId, productName).then(refetch)}
                />
            </form>
        </>
    )

    const renderEditTags = ()=>(
        <>
            <h1 className="header">
                {"Edit Product Tags"}
            </h1>

            {tags.map(tag=><Chip key={tag.id} label={tag.name}/>)}
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                tag: <select 
                    name="tags"
                    id="tags"
                    onChange={e=>toggleTags(Number(e.target.value))}
                >
                    {allTags?.map(tag=><option key={tag.id} value={tag.id}>{tag.name}</option>)}
                </select>
                <Button
                    label={'change'}
                    onClick={()=>updateProductTags(Number(productId), tags).then(()=>refetch())}
                />
            </form>
        </>
    )


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    
    return (
        <div id="product-page">
            <h1 className="header">
                {"Product With ID:" + productId}
            </h1>
            <ProductCard product={data!} />

            {renderEditName()}
            {renderEditTags()}
        </div>
    )   
}

export default ProductPage
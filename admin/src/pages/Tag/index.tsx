
import { useState, useEffect } from "react";
import { TagCard } from "../../components/TagCard";
import { Button } from "../../components/Button";
import { Chip } from "../../components/Chip";
import { RouteComponentProps } from "react-router-dom";
import useAxios from 'axios-hooks'
import { Product, Tag } from "../../Models";
import {
    updateTagName,
    updateTagProducts,
    GET_TAG_BY_ID_WITH_PRODUCTS_URL,
    GET_ALL_PRODUCTS_URL,
} from "../../Services";

import './index.css'


interface TagPageProps extends RouteComponentProps<{tagId:string}> {}

const TagPage  = ({
    match:{params:{tagId}}
}:TagPageProps)=>{

    const [{ data, loading, error },refetch] = useAxios<Tag>(GET_TAG_BY_ID_WITH_PRODUCTS_URL(tagId))
    const [{ data:allProducts }] = useAxios<Product[]>(GET_ALL_PRODUCTS_URL)
    const [tagName, setTagName] = useState("")
    const [products, setProducts] = useState<Product[]>([])

    useEffect(()=>{
        data && setTagName(data.name)
        data && setProducts(data.products)
    },[data])


    const toggleTags = (id:number)=> {
        let product_ = products.find(product=>product.id===id)

        if(product_)
            return setProducts(products.filter(product=>product.id!==id)) 

        product_ = allProducts?.find(tag=>tag.id===id)
        setProducts([...products, product_!])
    }

    const renderEditName = ()=>(
        <>
            <h1 className="header">
                {"Edit Tag Name"}
            </h1>
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                name: <input
                    value={tagName}
                    onChange={e=>setTagName(e.target.value)}
                />
                <Button
                    label={'change'}
                    onClick={()=>updateTagName(tagId, tagName).then(refetch)}
                />
            </form>
        </>
    )

    const renderEditProducts = ()=>(
        <>
            <h1 className="header">
                {"Edit Products "}
            </h1>

            {products.map(product=><Chip key={product.id} label={product.name}/>)}
            <form className="edit-form" onSubmit={e=>e.preventDefault()}>
                products: <select 
                    name="tags"
                    id="tags"
                    onChange={e=>toggleTags(Number(e.target.value))}
                >
                    {allProducts?.map(tag=><option key={tag.id} value={tag.id}>{tag.name}</option>)}
                </select>
                <Button
                    label={'change'}
                    onClick={()=>updateTagProducts(Number(tagId), products).then(()=>refetch())}
                />
            </form>
        </>
    )


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    
    return (
        <div id="tag-page">
            <h1 className="header">
                {"Tag With ID:" + tagId}
            </h1>
            <TagCard tag={data!} />

            {renderEditName()}
            {renderEditProducts()}
        </div>
    )   
}

export default TagPage
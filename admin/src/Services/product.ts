import { Tag, Product } from "../Models";
import axios from "axios";
import {
    CREATE_PRODUCT_URL,
    UPDATE_PRODUCT_NAME_URL,
    DELETE_TAGS_PRODUCTS_URL,
    GET_TAGS_PRODUCTS_BY_PRODUCTID_URL,
    CREATE_TAGS_PRODUCTS_URL    
} from "./constants";


export const updateProductName =
    (id:string, name:string) => axios.put(UPDATE_PRODUCT_NAME_URL(id), {name})


export const createProduct =
    (name:string) => axios.post<Product>(CREATE_PRODUCT_URL, {name})

export const updateProductTags =
    (productId:number, tags:Tag[]) => 
        axios.get<Tag[]>(GET_TAGS_PRODUCTS_BY_PRODUCTID_URL(productId))
            .then(res=> Promise.all(res.data.map(tag=>axios.delete(DELETE_TAGS_PRODUCTS_URL(tag.id)))))
            .then(
                ()=>Promise.all(tags.map(tag=>axios.post(CREATE_TAGS_PRODUCTS_URL, {productId, tagId:tag.id} ))) 
            )
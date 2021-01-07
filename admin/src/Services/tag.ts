import { Tag, Product } from "../Models";
import axios from "axios";
import {
    UPDATE_TAG_NAME_URL,
    CREATE_TAG_URL,
    DELETE_TAGS_PRODUCTS_URL,
    GET_TAGS_PRODUCTS_BY_TAGID_URL,
    CREATE_TAGS_PRODUCTS_URL    
} from "./constants";


export const updateTagName =
    (id:string, name:string) => axios.put(UPDATE_TAG_NAME_URL(id), {name})


export const createTag =
    (name:string) => axios.post<Tag>(CREATE_TAG_URL, {name})

export const updateTagProducts =
    (tagId:number, products:Product[]) => 
        axios.get<Tag[]>(GET_TAGS_PRODUCTS_BY_TAGID_URL(tagId))
            .then(res=> Promise.all(res.data.map(tag=>axios.delete(DELETE_TAGS_PRODUCTS_URL(tag.id)))))
            .then(
                ()=>Promise.all(products.map(product=>axios.post(CREATE_TAGS_PRODUCTS_URL, {tagId, productId:product.id} ))) 
            )
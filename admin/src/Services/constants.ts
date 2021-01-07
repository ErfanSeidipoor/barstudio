// import axios from "axios";

export const BASEURL = "http://localhost:8090"
export const GET_ALL_PRODUCTS_URL = BASEURL + '/products'
export const GET_ALL_TAGS_URL = BASEURL + '/tags'

export const GET_ALL_PRODUCTS_WITH_TAGS_URL = BASEURL + '/products?include=tags'
export const GET_ALL_TAGS_WITH_PRODUCTS_URL = BASEURL + '/tags?include=products'

export const GET_PRODUCT_BY_ID_WITH_TAGS_URL = (id:string)=>BASEURL + `/products/${id}?include=tags`
export const UPDATE_PRODUCT_NAME_URL = (id:string)=>BASEURL + `/products/${id}`
export const UPDATE_PRODUCT_TAGS_URL = (id:string)=>BASEURL + `/products/${id}`


export const CREATE_TAGS_PRODUCTS_URL = BASEURL + `/tags_products`
export const CREATE_PRODUCT_URL = BASEURL + `/products`
export const GET_TAGS_PRODUCTS_BY_PRODUCTID_URL = (productId:number)=>BASEURL + `/tags_products?productId=${productId}`
export const DELETE_TAGS_PRODUCTS_URL = (id:number)=>BASEURL + `/tags_products/${id}`


export const GET_TAG_BY_ID_WITH_PRODUCTS_URL = (id:string)=>BASEURL + `/tags/${id}?include=products`
export const UPDATE_TAG_NAME_URL = (id:string)=>BASEURL + `/tags/${id}`
export const CREATE_TAG_URL = BASEURL + `/tags`
export const GET_TAGS_PRODUCTS_BY_TAGID_URL = (tagId:number)=>BASEURL + `/tags_products?tagId=${tagId}`



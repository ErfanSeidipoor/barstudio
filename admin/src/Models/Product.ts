import { Tag } from "./Tag";
export class Product {
    constructor(
        public id:number,
        public name: string,
        public tags:Tag[]
    ){}
}
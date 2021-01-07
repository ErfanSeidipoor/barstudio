import { Product } from "./Product";
export class Tag {
    constructor(
        public id:number,
        public name: string,
        public products:Product[]
    ){}
}
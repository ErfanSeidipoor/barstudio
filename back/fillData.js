const fs = require('fs');
const faker = require("faker")

const products = []
const productsNumbers = 30
for (let index = 0; index < productsNumbers; index++) {
    const product = {}
    product.id = index + 1;
    product.name = faker.commerce.productName();
    products.push(product)
}


const tags = []
const ptagsNumbers = 10
for (let index = 0; index < ptagsNumbers; index++) {
    const tag = {}
    tag.id = index + 1;
    tag.name = faker.commerce.department();
    tags.push(tag)
}

const tags_products = []
for (let index = 0; index < productsNumbers; index++) {
    const tag_product = {}
    tag_product.id = index + 1;
    tag_product.productId = index + 1;
    tag_product.tagId = faker.random.number(ptagsNumbers);
    tags_products.push(tag_product)
}

fs.writeFile(
    'db.json',
    JSON.stringify({products, tags, tags_products}, null, 2),
    (err)=>{
        if (err) return console.log(err);
        console.log('success');
    }
);


// http://localhost:8090/products/1?include=tags
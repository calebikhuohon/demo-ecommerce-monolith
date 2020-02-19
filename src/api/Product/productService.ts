import { ProductDoc } from "./productInterface";
import { Product } from "./productModel";
import slugify from "slugify";
import _ from "lodash";

export class ProductService {
    public async getProducts() {
        let products = await Product.find().exec();
        return products;
    }

    public async addProduct(product: ProductDoc) {
        product.slug = slugify(product.name);
        return Product.create(product);
    }

    public async getProductById(doc: ProductDoc) {
        let product = await Product.findById(doc).exec();
        return product;
    }

    public async updateProduct(query: ProductDoc, update: ProductDoc) {
        const product = await (await Product.findById(query)).execPopulate();
        _.merge(product, update);
        return await product.save();
    }

    public async deleteProduct(doc: ProductDoc) {
        return Product.findByIdAndDelete(doc);
    }
}
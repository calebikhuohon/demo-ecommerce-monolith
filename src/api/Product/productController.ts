import { ProductDoc } from "./productInterface";
import { BaseController } from "../baseController";
import { ProductService } from "./productService";

export class ProductController extends BaseController {
    private _productService = new ProductService();

    public getProducts = async () => {
        const products = await this._productService.getProducts();
        return this.sendResponse(products);
    }

    public addProduct = async (product: ProductDoc) => {
        const newProduct = await this._productService.addProduct(product);
        return this.sendResponse(newProduct);
    }

    public getProduct = async (doc: ProductDoc) => {
        const product = await this._productService.getProductById(doc);
        return this.sendResponse(product);
    }

    public updateProduct = async (query: ProductDoc, update: ProductDoc) => {
        const product = await this._productService.updateProduct(query, update);
        this.sendResponse(product);
    }

    public deleteProduct = async (doc: ProductDoc) => {
        await this._productService.deleteProduct(doc);
        this.sendResponse(null, "Product has been successfully deleted");
    }
}
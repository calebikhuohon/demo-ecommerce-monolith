import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "../../helpers/controllerHandler";
import { ProductController } from "./productController";
import { ProductValidationSchema } from "./productValidation";

const router = express.Router();
const call = controllerHandler;
const Product = new ProductController();

router.get("/", call(Product.getProducts, (_req, _res, _next) => []));

router.get("/:id", call(Product.getProduct, (req, _res, _next) => [req.params.id]));

router.post("/", validation(ProductValidationSchema), call(Product.addProduct, (req, _res, _next) => [req.body]));

router.put("/:id", call(Product.updateProduct, (req, _res, _next) => [req.params.id]));

router.delete("/:id", call(Product.deleteProduct, (req, _res, _next) => [req.params.id]));

export const ProductRouter = router;
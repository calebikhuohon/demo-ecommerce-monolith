import { createSchema, Type, typedModel } from "ts-mongoose";

const conditionEnum = ["new", "refurbished", "used"] as const;

export const ProductSchema = createSchema({
    name: Type.string(),
    slug: Type.optionalString({
        unique: true,
        slug: ["name"],
        forceIdSlug: true,
    }),
    description: Type.optionalString(),
    price: Type.number({
        required: true,
        min: 0
    }),
    stock: Type.number({
        required: true,
        min: 0,
        default: 0,
    }),
    condition: Type.string({
        enum: conditionEnum,
    }),
});

export const Product = typedModel("Product", ProductSchema);
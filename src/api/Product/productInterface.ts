import { ProductSchema } from "./productModel";
import { ExtractDoc, ExtractProps } from "ts-mongoose";

export type ProductDoc = ExtractDoc<typeof ProductSchema>;
export type ProductProps = ExtractProps<typeof ProductSchema>;
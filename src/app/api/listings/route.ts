
import { ProductSchema, ProductType } from "@/app/models/ProductSchema";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const parsedBody = ProductSchema.parse(body);
    const { seller, price, description, name } = ProductSchema.parse(body);

    const newProduct: Omit<ProductType, "id"> = {
      seller,
      price,
      description,
      name,
    };

    console.log(newProduct);
  } catch (error) {}
};

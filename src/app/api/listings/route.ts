import { NextRequest } from "next/server";
import { ProductSchema, ProductType } from "@/app/models/ProductSchema";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { seller, price, email, description, name } = body;

    const newProduct: ProductType = {
      id: 10,
      seller: seller,
      price: price,
      description: description,
      name: name,
    };

    console.log(newProduct);
  } catch (error) {}
};

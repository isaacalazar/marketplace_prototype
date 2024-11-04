import React from "react";
import { ProductType } from "@/app/models/ProductSchema";
const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="group relative">
      <div className=" rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.imageUrl}
          alt="watch"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700"> {product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">Seller: {product.seller}</p>
        </div>
        <p className="text-sm font text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

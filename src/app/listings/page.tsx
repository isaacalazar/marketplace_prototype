import ProductCard from "@/components/product/ProductCard";
import { ProductType } from "../models/ProductSchema";

export default function Marketplace() {
  const sampleProductData: ProductType = {
    id: "1",
    seller: "John Doe",
    name: "Sample Product",
    price: 29.99,
    description: "A great product",
    imageUrl: "watch.avif",
  };

  return (
    <div className="mx-auto px-10 py-8">
      <div className="flex justify-start mb-8">
        <p className="font-sans font-semibold text-2xl">Your listings</p>
      </div>

      <div className="mb-12">
        <h2 className="font-sans font-semibold text-xl mb-4">
          Recommended Listings
        </h2>

        <div className="grid grid-cols-4 gap-3">
          <ProductCard product={sampleProductData} />
        </div>
      </div>
    </div>
  );
}

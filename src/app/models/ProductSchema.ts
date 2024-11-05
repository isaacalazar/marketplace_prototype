import zod from "zod";

export const ProductSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  seller: zod.string(),
  price: zod.number().min(0),
  description: zod.string().optional(),
  imageUrl: zod.string().url().optional(),
});

export type ProductType = zod.infer<typeof ProductSchema>;

import Image from "./image";
import ProductCategory from "./productCategory";

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  categories: ProductCategory[];
  coverImage: Image;
  images: Image[];
  featured: boolean;
  pricePerKg: number;
  minKg: number;
  maxKg: number;
  published_at: number;
  created_at: string,
  updated_at: string,
};

export default Product;

import ProductImage from "./productImage";
import ProductCategory from "./productCategory";

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  categories: ProductCategory[];
  coverImage: ProductImage;
  images: ProductImage[];
  pricePerKg: number;
  minKg: number;
  maxKg: number;
};

export default Product;

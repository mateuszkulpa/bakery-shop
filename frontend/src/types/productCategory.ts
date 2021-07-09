import Image from "./image";

type ProductCategory = {
  id: number;
  name: string;
  created_at: string,
  updated_at: string,
  image: Image;
};

export default ProductCategory;

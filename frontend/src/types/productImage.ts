type ProductImage = {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Record<string, unknown>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: Record<string, unknown>;
  related: string;
  created_by: string;
  updated_by: string;
};

export default ProductImage;

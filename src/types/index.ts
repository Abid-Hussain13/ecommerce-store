export type Category = 'sunglasses' | 'bags' | 'shoes' | 'watches' | 'perfumes' | 'jewelry';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  image: string;
  description: string;
  featured: boolean;
  isNew: boolean;
  price?: string; // Optional price if needed
}

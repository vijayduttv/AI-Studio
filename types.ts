export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}
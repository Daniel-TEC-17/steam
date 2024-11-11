export interface Game {
  images: Image[];
  title: string;
  description: string;
  price: number;
  rating: number;
  developer: string;
  categories: Category[];
  reviews: Review[];
  popularity: number;
  releaseDate: string;
  systemRequirements: SystemRequirements;
  id: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface SystemRequirements {
  OS: string;
  Processor: string;
  Memory: string;
  Graphics: string;
  DirectX: string;
  Storage: string;
}

export interface Category {
  id: number;
  name: string;
}
export interface Wishlist {
  id: number;
}

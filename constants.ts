import { Product, Category, BlogPost, Review } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Millet Laddus',
    description: 'Healthy, sweet, and guilt-free.',
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '2',
    name: 'Nutritious Podis',
    description: 'Spice up your meal naturally.',
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: '3',
    name: 'Rice Mixes',
    description: 'Traditional flavors in minutes.',
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: '4',
    name: 'Traditional Snacks',
    description: 'Crunchy, savory, homemade.',
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: '5',
    name: 'Healthy Combos',
    description: 'Perfect gift bundles.',
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: '6',
    name: 'Kids-Friendly Snacks',
    description: 'Yummy and nutritious.',
    image: 'https://picsum.photos/400/300?random=6',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ragi Laddu',
    description: 'Rich in calcium and iron.',
    price: '₹250',
    image: 'https://picsum.photos/300/300?random=10',
    isBestseller: true,
  },
  {
    id: 'p2',
    name: 'Curry Leaf Podi',
    description: 'Great for hair and digestion.',
    price: '₹180',
    image: 'https://picsum.photos/300/300?random=11',
  },
  {
    id: 'p3',
    name: 'Jujube Vada',
    description: 'Tangy, sweet nostalgia.',
    price: '₹120',
    image: 'https://picsum.photos/300/300?random=12',
    isBestseller: true,
  },
  {
    id: 'p4',
    name: 'Puliyogare Mix',
    description: 'Authentic temple taste.',
    price: '₹200',
    image: 'https://picsum.photos/300/300?random=13',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why Millets are Superfoods',
    excerpt: 'Discover the ancient grains that are powering modern health.',
    image: 'https://picsum.photos/600/400?random=20',
  },
  {
    id: 'b2',
    title: 'Top 5 Healthy School Snacks',
    excerpt: 'Keep your kids energetic with these preservative-free options.',
    image: 'https://picsum.photos/600/400?random=21',
  },
  {
    id: 'b3',
    title: 'The Secret to Perfect Rasam',
    excerpt: 'Using our homemade podi for the ultimate comfort food.',
    image: 'https://picsum.photos/600/400?random=22',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Lakshmi K.',
    rating: 5,
    text: 'Absolutely delicious! Tastes just like my grandmother used to make. The Ragi Laddus are a favorite in our house.',
  },
  {
    id: 'r2',
    name: 'Rahul S.',
    rating: 5,
    text: 'I love that there are no preservatives. My kids enjoy the snacks and I feel good giving them healthy food.',
  },
  {
    id: 'r3',
    name: 'Priya M.',
    rating: 4,
    text: 'The Puliyogare mix is authentic and spicy. Delivery was quick and the packaging was eco-friendly.',
  },
  {
    id: 'r4',
    name: 'Anita D.',
    rating: 5,
    text: 'Finally found authentic Jujube Vada! Brought back so many childhood memories. Highly recommended.',
  },
];
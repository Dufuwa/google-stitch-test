import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essential Wool Coat',
    price: 320,
    image: 'https://picsum.photos/seed/coat/800/1200',
    category: 'Outerwear',
    description: 'A timeless silhouette crafted from premium wool blend for warmth and elegance.',
    colors: ['Beige', 'Black', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Silk Slip Dress',
    price: 180,
    image: 'https://picsum.photos/seed/dress/800/1200',
    category: 'Dresses',
    description: 'Minimalist silk slip dress with delicate straps and a fluid drape.',
    colors: ['Cream', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Cashmere Turtleneck',
    price: 240,
    image: 'https://picsum.photos/seed/knit/800/1200',
    category: 'Knitwear',
    description: 'Ultra-soft cashmere turtleneck sweater for ultimate comfort and style.',
    colors: ['Oatmeal', 'Camel', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '4',
    name: 'Tailored Trousers',
    price: 150,
    image: 'https://picsum.photos/seed/trousers/800/1200',
    category: 'Bottoms',
    description: 'High-waisted tailored trousers with a straight-leg cut and crisp pleats.',
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['24', '26', '28', '30', '32']
  },
  {
    id: '5',
    name: 'Leather Tote Bag',
    price: 280,
    image: 'https://picsum.photos/seed/bag/800/1200',
    category: 'Accessories',
    description: 'Spacious leather tote bag with a minimalist design and durable construction.',
    colors: ['Tan', 'Black']
  },
  {
    id: '6',
    name: 'Minimalist Sandals',
    price: 120,
    image: 'https://picsum.photos/seed/shoes/800/1200',
    category: 'Footwear',
    description: 'Simple and elegant leather sandals with a comfortable footbed.',
    colors: ['Black', 'Nude'],
    sizes: ['36', '37', '38', '39', '40']
  }
];

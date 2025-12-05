export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Premium wireless headphones with noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.',
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Advanced smartwatch with health tracking, GPS, heart rate monitor, and 7-day battery life. Stay connected and healthy on the go.',
  },
  {
    id: '3',
    name: 'Laptop Stand Ergonomic',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    description: 'Adjustable aluminum laptop stand that improves posture and reduces neck strain. Compatible with all laptop sizes up to 17 inches.',
  },
  {
    id: '4',
    name: 'Mechanical Keyboard RGB',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    description: 'Professional mechanical keyboard with RGB backlighting, Cherry MX switches, and programmable keys. Ideal for gaming and typing.',
  },
  {
    id: '5',
    name: 'Wireless Mouse Ergonomic',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    description: 'Comfortable wireless mouse with ergonomic design, precision tracking, and long battery life. Perfect for work and play.',
  },
  {
    id: '6',
    name: 'USB-C Hub Multiport',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0 ports, SD card reader, and power delivery. Expand your laptop connectivity instantly.',
  },
  {
    id: '7',
    name: 'Portable External SSD 1TB',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    description: 'Fast and reliable 1TB external SSD with USB 3.2 Gen 2 support. Transfer files at speeds up to 1000MB/s.',
  },
  {
    id: '8',
    name: 'Webcam HD 1080p',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    description: 'Crystal clear 1080p webcam with auto-focus, built-in microphone, and privacy shutter. Perfect for video calls and streaming.',
  },
];


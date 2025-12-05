# Mini E-Commerce Application

A modern, responsive e-commerce product listing application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Displays a grid of products with images, names, prices, and "View Details" buttons
- **Product Details Page**: Shows detailed product information with large image, title, price, description, and "Add to Cart" button
- **API Routes**: 
  - `/api/products` - Returns all products
  - `/api/products/[id]` - Returns a single product by ID
- **Cart Management**: Global cart state using React Context API with persistent storage
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth transitions and hover effects

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Context API** (for cart state management)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.ts          # GET all products
│   │       └── [id]/
│   │           └── route.ts      # GET single product
│   ├── products/
│   │   └── [id]/
│   │       ├── page.tsx          # Product details page
│   │       └── not-found.tsx      # 404 page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Navbar.tsx                # Navigation bar with cart count
│   ├── ProductList.tsx           # Product listing component
│   └── ProductDetails.tsx        # Product details component
├── context/
│   └── CartContext.tsx           # Cart state management
└── package.json
```

## API Endpoints

### GET /api/products
Returns an array of all products.

**Response:**
```json
[
  {
    "id": "1",
    "name": "Product Name",
    "price": 79.99,
    "image": "https://...",
    "description": "Product description..."
  }
]
```

### GET /api/products/[id]
Returns a single product by ID.

**Response:**
```json
{
  "id": "1",
  "name": "Product Name",
  "price": 79.99,
  "image": "https://...",
  "description": "Product description..."
}
```

## Features Implementation

- ✅ Home page with product listing
- ✅ Product details page
- ✅ API routes for products
- ✅ Cart context with global state
- ✅ Responsive navigation bar
- ✅ Cart count display
- ✅ Mobile and desktop responsive design
- ✅ Modern, clean UI

## Deployment

This application can be easily deployed on Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and deploy

## License

This project is created for a technical assessment.


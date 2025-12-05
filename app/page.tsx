import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>
      <ProductList />
    </div>
  );
}



'use clients';

import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
const { cartItems, removeFromCart, addToCart, clearCart } = useCart();

  // Get full product details for items in cart
const cartProducts = cartItems.map((item) => {
const product = products.find((p) => p.id === item.productId);
return product ? { ...product, quantity: item.quantity } : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  // Calculate total
  const total = cartProducts.reduce(
  (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartProducts.length === 0) {
    return (
    <div className="bg-white rounded-lg shadow-md p-12 text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-24 w-24 mx-auto text-gray-400 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
      </svg>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">Add some products to get started!</p>
      <Link
       href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
      Continue Shopping
      </Link>
      </div>
    );
  }

  return (
  <div className="grid lg:grid-cols-3 gap-8">
   {/* Cart Items */}
  <div className="lg:col-span-2 space-y-4">
    {cartProducts.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row"
      >
      {/* Product Image */}
    <Link href={`/products/${item.id}`} className="relative w-full sm:w-48 h-48 sm:h-auto bg-gray-200">
    <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 100vw, 192px"
    />
    </Link>

    {/* Product Info */}
    <div className="flex-1 p-4 flex flex-col justify-between">
    <div>
    <Link
    href={`/products/${item.id}`}
    className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2 block"
    >
    {item.name}
    </Link>
    <p className="text-2xl font-bold text-blue-600 mb-4">
    ${item.price.toFixed(2)}
    </p>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
    <button
    onClick={() => removeFromCart(item.id)}
    className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold transition-colors"
    >
    −
    </button>
     <span className="text-lg font-semibold w-8 text-center">
        {item.quantity}
     </span>
     <button
      onClick={() => addToCart(item.id)}
      className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold transition-colors"
      >
        +
      </button>
      </div>
      <p className="text-lg font-semibold text-gray-900">
      ${(item.price * item.quantity).toFixed(2)}
      </p>
      </div>
       </div>
     </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal ({cartProducts.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={clearCart}
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium mb-3"
          >
            Clear Cart
          </button>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}


import ProductsComponent from "../components/Products";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our amazing collection of products designed to enhance your life and meet all your needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ProductsComponent />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Products?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Carefully crafted with attention to detail and quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Value</h3>
                <p className="text-gray-600">Competitive pricing without compromising on quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

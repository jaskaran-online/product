import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating exceptional experiences and building meaningful connections.
            Our mission is to deliver innovative solutions that make a difference in people's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🌟</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              To be the leading provider of innovative solutions, setting new standards
              of excellence in our industry and creating lasting value for our customers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Deliver exceptional products and services that exceed expectations,
              build lasting relationships, and contribute positively to our community.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">10+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Years Experience</h4>
              <p className="text-gray-600 text-sm">Over a decade of industry expertise</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">50K+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Happy Customers</h4>
              <p className="text-gray-600 text-sm">Satisfied clients worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = ({setPage}) => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      

      {/* HERO SECTION */}
      <section className="relative">
        {/* Gradient Background with wave effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#70a9a1]/35 via-[#10b981]/30 to-white"></div>
        
        {/* Decorative elements */}
        
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT: Text Content */}
          <div className="space-y-8 z-10">
            {/* Main Title with gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-[#70a9a1] bg-clip-text text-transparent drop-shadow-lg">
                  Freddy's Finds
                </span>
              </h1>
              
              <p className="text-gray-700 text-xl leading-relaxed">
                Discover unique treasures, local vendors, and the incredible
                stories behind every find.
              </p>
              
              {/* Decorative line */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#70a9a1] to-emerald-400 rounded-full"></div>
            </div>

            {/* ACTION BUTTONS - Enhanced styling */}
            <div className="flex flex-col gap-5 w-full max-w-sm">
              <Link to="/products" className="group px-8 py-4 rounded-full border-2 border-[#70a9a1] text-[#70a9a1] font-semibold hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-[#70a9a1] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2">
                <span>Shop Now</span>
              </Link>

              <a href="/pages/VendorPage.jsx" className="group px-8 py-4 rounded-full border-2 border-[#70a9a1] text-[#70a9a1] font-semibold hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-[#70a9a1] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2">
                <span>Markets & Vendors</span>
              </a>

              <a href="/pages/StoryPage.jsx" className="group px-8 py-4 rounded-full border-2 border-[#70a9a1] text-[#70a9a1] font-semibold hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-[#70a9a1] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-2">
                <span>Hear our Stories</span>
              </a>
            </div>
          </div>

          {/*right side*/}
          <div>
            <div className="relative w-full h-[500px] bg-gradient-to-br from-[#70a9a1]/20 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Image placeholder*/}
              <div className="absolute inset-4 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex flex-col items-center justify-center">
                <p className="text-gray-500 text-center max-w-xs">
                  there will be pictures/slideshows lol
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#70a9a1]/30 to-transparent rounded-bl-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#70a9a1] to-emerald-600 bg-clip-text text-transparent mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked items from our collection. Each piece has its own story waiting to be discovered.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#70a9a1] to-emerald-400 rounded-full mx-auto mt-6"></div>
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-[#70a9a1]/30 border-t-[#70a9a1] rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 text-lg font-medium">
              Loading your finds...
            </p>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full border-2 border-[#70a9a1] text-[#70a9a1] font-semibold hover:bg-gradient-to-r hover:from-[#70a9a1] hover:to-emerald-400 hover:text-white hover:shadow-xl transition-all duration-300 text-lg">
            View All Products →
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">&copy; 2026 Freddy's Finds. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-[#70a9a1] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#70a9a1] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#70a9a1] transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
import React from 'react'

const Navbar = () => {

  return (
    <header className="bg-base-300 border-b border-base-content/10"> 
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between"> 
            <h1 className="text-3xl font-bold bg-[#70a9a1] to-emerald-500 bg-clip-text text-transparent">
                Freddy's Finds
            </h1>
        
        <div className='flex items-center'> 
          <a href="/login" 
          className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#70a9a1] to-emerald-400 text-white font-semibold hover:from-emerald-500 hover:to-[#70a9a1] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
          Log In
          </a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar
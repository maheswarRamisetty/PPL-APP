'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar({ onSearch }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (onSearch) {
        onSearch(searchTerm);
      }
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setShowSearch(false);
    }
  };

  const fetchSearchResults = async (term) => {
    if (!term.trim()) {
      return [];
    }
    
    try {
      setIsSearching(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();

      const lowercaseTerm = term.toLowerCase();
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(lowercaseTerm) || 
        product.description.toLowerCase().includes(lowercaseTerm) ||
        product.category.toLowerCase().includes(lowercaseTerm)
      );
      
      return filteredProducts.slice(0, 6);
    } catch (error) {
      console.error('Error searching products:', error);
      return [];
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim()) {
        const results = await fetchSearchResults(searchTerm);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 300);
    
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm relative z-30 mx-5 pb-5">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="w-8 h-8 relative">
                {/* <div className="absolute inset-0 border-2 border-black"></div> */}
                {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                  {/* <div className="w-6 h-6 border border-black transform rotate-45"></div> */}
                {/* </div> */}
                <img  className='ml-10' src='/logo.png'></img>
              </div>
            </Link>
            <Link href="/" className="font barlow bold absolute left-1/2 transform -translate-x-1/2 text-3xl ml-4 font-bold mt-2 ">
              LOGO
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="hover:text-gray-600" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center focus:outline-none">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block z-10">
                  <p className="px-4 py-2 text-sm text-gray-700">Hi, {user.name}</p>
                  <hr />
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => openAuthModal('login')}
                className="hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            )}
            
            <div className="border-l pl-3">
              <button className="flex items-center hover:text-gray-600 mr-10">
                ENG
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-20">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              id="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 transition duration-200"
            >
              Search
            </button>
          </form>
          
          {searchTerm.trim() && (
            <div className="mt-4 max-h-96 overflow-y-auto">
              {isSearching ? (
                <p className="text-center py-4">Searching...</p>
              ) : searchResults.length > 0 ? (
                <div>
                  <h3 className="font-semibold mb-2">Quick Results:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((product) => (
                      <Link 
                        href={`/product/${product.id}`} 
                        key={product.id}
                        className="flex items-center p-2 border rounded hover:bg-gray-50"
                        onClick={() => setShowSearch(false)}
                      >
                        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mr-4">
                          {product.image ? (
                            <img 
                              src={product.image} 
                              alt={product.title}
                              className="max-h-14 max-w-14 object-contain"
                            />
                          ) : (
                            <span className="text-xs text-gray-500">No Image</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</p>
                          <p className="text-xs text-gray-600">{product.category}</p>
                          <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={handleSearch}
                      className="text-blue-500 hover:underline"
                    >
                      View all results
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-center py-4">No products found matching "{searchTerm}"</p>
              )}
            </div>
          )}
        </div>
      )}
      <div className="w-full flex justify-center mt-3">
      <div className="hidden md:flex space-x-8">
        <Link href="/shop" className="hover:text-gray-600 font barlow font-bold">SHOP</Link>
        <Link href="/skills" className="hover:text-gray-600 font barlow font-bold">SKILLS</Link>
        <Link href="/stories" className="hover:text-gray-600 font-bold">STORIES</Link>
        <Link href="/about" className="hover:text-gray-600 font-bold">ABOUT</Link>
        <Link href="/contact" className="hover:text-gray-600 font-bold">CONTACT US</Link>
      </div>
    </div>


      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            SHOP
          </Link>
          <Link href="/skills" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            SKILLS
          </Link>
          <Link href="/stories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            STORIES
          </Link>
          <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            ABOUT
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Authentication Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </h2>
              <button onClick={closeAuthModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {authMode === 'login' ? (
              <LoginForm switchToRegister={() => setAuthMode('register')} closeModal={closeAuthModal} />
            ) : (
              <RegisterForm switchToLogin={() => setAuthMode('login')} closeModal={closeAuthModal} />
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function LoginForm({ switchToRegister, closeModal }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      closeModal();
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input id="remember" type="checkbox" className="h-4 w-4 text-blue-600" />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div>
      
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
      >
        Sign In
      </button>
      
      <p className="text-center mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={switchToRegister}
          className="text-blue-500 hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}

function RegisterForm({ switchToLogin, closeModal }) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await register(name, email, password);
      closeModal();
    } catch (err) {
      setError('Error creating account');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-email">
          Email
        </label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-password">
          Password
        </label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
      >
        Create Account
      </button>
      
      <p className="text-center mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-blue-500 hover:underline"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}
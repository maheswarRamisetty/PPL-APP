// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">BE THE FIRST TO KNOW</h3>
            <p className="text-gray-300">Sign up for updates from mettā muse.</p>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="bg-transparent border border-gray-500 p-2 text-white mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-black px-4 py-2 font-medium hover:bg-gray-200 transition-colors">SUBSCRIBE</button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">CONTACT US</h3>
            <div className="space-y-1 text-gray-300">
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            
            <h3 className="text-lg font-semibold uppercase tracking-wider mt-8">CURRENCY</h3>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/us-flag.png"
                alt="US Flag"
                width={24}
                height={16}
              />
              <p>• USD</p>
            </div>
            <p className="text-xs text-gray-400">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 my-8"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">mettā muse</h2>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/stories" className="text-gray-300 hover:text-white transition-colors">Stories</Link></li>
                <li><Link href="/artisans" className="text-gray-300 hover:text-white transition-colors">Artisans</Link></li>
                <li><Link href="/boutiques" className="text-gray-300 hover:text-white transition-colors">Boutiques</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/eu-compliance" className="text-gray-300 hover:text-white transition-colors">EU Compliances Docs</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">QUICK LINKS</h3>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/orders-shipping" className="text-gray-300 hover:text-white transition-colors">Orders & Shipping</Link></li>
                <li><Link href="/join-seller" className="text-gray-300 hover:text-white transition-colors">Join/Login as a Seller</Link></li>
                <li><Link href="/payment-pricing" className="text-gray-300 hover:text-white transition-colors">Payment & Pricing</Link></li>
                <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">Return & Refunds</Link></li>
                <li><Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">FOLLOW US</h3>
              <div className="flex space-x-4">
                <Link href="https://instagram.com" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">mettā muse ACCEPTS</h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 38 24">
                    <path fill="#4285F4" d="M17.62 13.8v-3.46h5.02c.23 0 .42.19.42.42v2.62c0 .23-.19.42-.42.42h-5.02z"></path>
                    <path fill="#34A853" d="M17.62 18.15v-3.46h5.02c.23 0 .42.19.42.42v2.62c0 .23-.19.42-.42.42h-5.02z"></path>
                    <path fill="#FBBC05" d="M11.4 18.15v-3.46h5.02c.23 0 .42.19.42.42v2.62c0 .23-.19.42-.42.42H11.4z"></path>
                    <path fill="#EA4335" d="M11.4 13.8v-3.46h5.02c.23 0 .42.19.42.42v2.62c0 .23-.19.42-.42.42H11.4z"></path>
                  </svg>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 60 40">
                    <path fill="#FF5F00" d="M22 13h16v14H22z"/>
                    <path fill="#EB001B" d="M23 20c0-2.4 1.2-4.5 3-6-1.3-1-3-1.6-4.7-1.6-4.4 0-8 3.4-8 7.6s3.6 7.6 8 7.6c1.7 0 3.3-.6 4.7-1.6-1.8-1.5-3-3.6-3-6z"/>
                    <path fill="#F79E1B" d="M39 20c0 4.2-3.6 7.6-8 7.6-1.7 0-3.3-.6-4.7-1.6 1.8-1.5 3-3.6 3-6s-1.2-4.5-3-6c1.3-1 3-1.6 4.7-1.6 4.4 0 8 3.4 8 7.6z"/>
                  </svg>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#003087" d="M20.067 8.478c.492.88.769 1.906.769 3.006 0 2.915-2.495 5.41-5.41 5.41-2.915 0-5.41-2.495-5.41-5.41 0-2.915 2.495-5.41 5.41-5.41.955 0 1.846.254 2.613.7.767-1.067 2.015-1.741 3.408-1.741.38 0 .736.062 1.08.174-.27.995-1.151 1.856-1.46 3.27zm-5.981 4.537c-.326.513-.744.993-1.247 1.433-.503-.44-.922-.92-1.247-1.433-.364-.571-.551-1.171-.551-1.78 0-.609.187-1.209.551-1.78.325-.513.744-.993 1.247-1.433.503.44.921.92 1.247 1.433.364.571.551 1.171.551 1.78 0 .609-.187 1.209-.551 1.78zm-2.733-8.528c-1.3 0-2.551.583-3.313 1.591-.761 1.007-1.064 2.345-.825 3.635.239 1.29.999 2.415 2.077 3.085 1.08.671 2.39.756 3.575.232-1.444.563-3.095.182-4.173-.965-1.08-1.146-1.311-2.826-.586-4.189.725-1.363 2.256-2.058 3.789-1.743 1.533.314 2.65 1.652 2.775 3.282h.038v-1.117c0-1.537-1.155-2.811-2.654-2.811h-.703z"/>
                  </svg>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="white">
                    <path d="M23 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-9.5 8.5h-2v-6h2v6zm-5 0h-2l-2.2-3.6V8.5H.8V2.5h2l2.2 3.6V2.5h1.5v6zm10 0H13V6h5.5V4.5H13V2.5h5.5v6z"/>
                  </svg>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.72 7.71c-.92 0-1.68.32-2.24.78-.49-.49-1.27-.83-2.08-.83-1.78 0-3.24 1.41-3.24 3.14 0 1.86 1.11 3.39 2.13 4.73.92 1.19 1.89 2.14 2.65 2.14.92 0 1.68-1.19 2.43-2.08.92-1.08 2-2.57 2-4.79.03-1.67-1.3-3.09-2.65-3.09zM14.08 4.57c-.38 0-.7-.11-.97-.38-.27-.22-.43-.54-.49-.92h1.4V0H8.68v3.82c0 .76.27 1.35.76 1.78.49.43 1.13.65 1.92.65h1.4v1.73c0 .54-.16.92-.49 1.19-.32.27-.76.38-1.27.38-.65 0-1.08-.16-1.35-.54-.27-.32-.38-.81-.38-1.41H7.3c0 1.08.32 1.89.97 2.48.59.54 1.51.86 2.65.86 1.24 0 2.16-.27 2.76-.86.59-.54.92-1.35.92-2.43V6.25h1.19c.11.32.32.65.59.92.38.38.86.59 1.46.59.54 0 1.03-.16 1.4-.54.32-.38.54-.86.54-1.41s-.16-1.03-.54-1.41c-.38-.38-.86-.54-1.4-.54-.54-.03-1.03.14-1.46.54-.16.11-.27.38-.38.59h-2.92v-.42zM5.08 5.38H3.89V2.16H2.27v3.23H1.08v1.19h1.19V10c0 .81.16 1.41.54 1.73.32.32.92.49 1.78.49.22 0 .43 0 .65-.05.22-.05.38-.05.54-.11v-1.24c-.11 0-.22.05-.38.05-.11 0-.27.05-.38.05-.38 0-.65-.05-.81-.22-.16-.16-.22-.43-.22-.86V6.57h1.78V5.38h-1.51z"/>
                  </svg>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.72 11.89c-.57 0-1.69-.04-2.64-.04-2.56 0-3.43.57-3.43 2.84 0 1.06.47 1.8 1.32 1.8.95 0 1.58-.61 2.4-1.57l.34-3.03zm.15 4.21c-.53.61-1.25 1.06-2.28 1.06-1.74 0-2.94-1.25-2.94-3.34 0-2.49 1.4-4.42 5.43-4.42 1.1 0 2.13.08 3.03.23-.15 1.06-.3 2.05-.42 2.94-.3 2.36-.57 3.11-.83 3.53zm6.13-6.3l-2.71-.23c-.04 0-.11.04-.11.04-1.29.27-1.59.34-1.78.49-.04-.23-.15-.68-.19-.87-.27-1.25-1.1-2.05-2.32-2.05-3.56 0-5.09 4.27-5.09 7.37 0 2.49 1.21 4.16 3.15 4.16.91 0 1.74-.3 2.4-.8.15.27.38.53.64.72.87.68 2.02.8 3.34.8.49 0 .99-.04 1.55-.08.11-1.06.27-2.32.42-3.45.38-3.03.76-4.88.76-5.2-.04-.11-.04-.19-.15-.19zM2.86 4.22l-.04.11c-.04.04-.11.08-.19.08 0 0-1.02.34-1.29.42-.76.27-.95.46-1.17 1.44-.15.68-3.64 28.21-3.64 28.21l6.9.04 1.48-9.8s1.44.04 2.02.04h.19c4.5 0 7.45-2.28 7.45-6.06 0-2.36-1.67-3.79-3.56-4.54-.99-.38-2.02-.57-3.3-.57-.49 0-1.58 0-1.58 0l.57-3.64s2.17.08 3.26.11c1.4.04 2.36.08 3.34.08.57 0 .91-.04.95-.87.04-.91.23-2.17.34-2.82.08-.76.19-1.48.27-2.02 0-.15.04-.3.04-.46 0-.19-.08-.27-.27-.3-.76-.04-1.69-.08-2.94-.11-2.56-.11-4.54-.19-5.85-.19-1.21 0-1.29 0-1.93.11l.04-.19c.04-.15.04-.3.08-.46 0-.15.04-.34.08-.49 0-.15.04-.3.08-.46 0-.15.04-.3.08-.49.15-.61.27-1.21.42-1.78.11-.53.27-1.02.42-1.44.04-.11.08-.27.15-.38.04-.11.08-.23.15-.34.04-.11.11-.19.19-.3.04-.08.11-.19.19-.23.04-.04.04-.08.11-.11l-.04.04zm4.88 17.62c0-1.74-1.06-2.28-2.62-2.28h-2.02c-.15 1.14-.3 2.13-.42 2.82l-.49 3.11c-.15.87-.27 1.63-.42 2.49h.76c2.28 0 5.2-.23 5.2-3.45.04-1.06-.04-1.93 0-2.7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-12">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
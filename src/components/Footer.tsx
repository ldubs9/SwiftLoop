import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#home" className="text-2xl font-bold flex items-center gap-2 mb-4">
              <img 
                src="/images/logo 500x475.png" 
                alt="SwiftLoop Logo" 
                className="w-12 h-12 object-contain"
              />
              <span>SwiftLoop</span>
            </a>
            <p className="text-gray-300 mb-4">
              Empowering businesses with intelligent AI automation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-coral transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-coral transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-coral transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-coral transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-coral transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-coral transition-colors">AI Workflows</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-coral transition-colors">AI Chatbots</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-coral transition-colors">Custom Projects</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-coral transition-colors">Web Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coral transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} SwiftLoop. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-coral">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-coral">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
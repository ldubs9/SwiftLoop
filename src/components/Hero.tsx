
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center bg-gradient-to-br from-peach to-cream">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy leading-tight">
              Automate Your <span className="text-coral">Business</span> with Intelligent AI Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-navy2 max-w-xl">
              SwiftLoop helps small businesses and agencies unlock growth through tailored AI automation workflows, chatbots, and custom development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center gap-2">
                Explore Services <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <div className="w-full h-72 md:h-96 bg-gradient-to-br from-coral to-coral3 rounded-xl animate-float card-shadow flex items-center justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 w-full h-full">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl md:text-2xl">AI Workflows</div>
                      <div className="text-sm md:text-base">Automation</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl md:text-2xl">Chatbots</div>
                      <div className="text-sm md:text-base">24/7 Support</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl md:text-2xl">Custom Projects</div>
                      <div className="text-sm md:text-base">Tailored Solutions</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-4">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl md:text-2xl">Web Dev</div>
                      <div className="text-sm md:text-base">Modern Sites</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy rounded-full z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy opacity-20 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Bot, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">About SwiftLoop</h2>
          <div className="w-20 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-navy2">
            We're on a mission to make advanced AI technology accessible and impactful for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-peach p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-navy">Our Approach</h3>
              <p className="mb-6 text-navy2">
                SwiftLoop specializes in creating custom AI automation solutions that streamline operations, enhance customer experiences, and drive growth for small businesses and agencies.
              </p>
              <p className="mb-8 text-navy2">
                We combine deep technical expertise with a practical understanding of business needs to deliver AI tools that solve real problems and create measurable value.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-coral font-medium">
                  <Zap size={20} /> Fast Implementation
                </div>
                <div className="flex items-center gap-2 text-coral font-medium">
                  <Bot size={20} /> Advanced AI
                </div>
                <div className="flex items-center gap-2 text-coral font-medium">
                  <Users size={20} /> Client-Focused
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-coral to-coral2 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
              <p>
                We don't just implement technology – we craft solutions that align with your specific business goals and challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-navy p-6 rounded-xl text-white">
                <h4 className="text-lg font-bold mb-2">15+</h4>
                <p className="text-sm">Years Combined Experience</p>
              </div>
              <div className="bg-navy2 p-6 rounded-xl text-white">
                <h4 className="text-lg font-bold mb-2">100+</h4>
                <p className="text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

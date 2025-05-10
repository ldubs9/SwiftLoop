
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

type Testimonial = {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "GrowthBoost",
      content: "SwiftLoop transformed our customer support with their AI chatbot solution. We've seen a 40% reduction in response time and our team can focus on complex issues while the bot handles routine queries.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "TechStart",
      content: "The custom AI workflow SwiftLoop built for our lead qualification process has been a game-changer. We're processing twice as many leads with the same team size and seeing better conversion rates.",
      rating: 5
    },
    {
      name: "Jessica Miller",
      position: "Operations Manager",
      company: "Retail Solutions",
      content: "I was skeptical about AI automation, but SwiftLoop made the transition smooth and effective. Their team took time to understand our specific needs and delivered a solution that truly works for our business.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Client Testimonials</h2>
          <div className="w-20 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-navy2">
            Don't just take our word for it. Here's what our clients have to say about working with SwiftLoop.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-cream p-8 rounded-xl card-shadow relative">
            <div className="absolute -top-6 left-10 bg-coral text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              "
            </div>
            <div key={currentIndex} className="animate-slide-up">
              <p className="text-lg mb-6 text-navy2">
                {testimonials[currentIndex].content}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-navy">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-navy2">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FC350B" color="#FC350B" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-coral text-coral hover:bg-coral hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-coral" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-coral text-coral hover:bg-coral hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

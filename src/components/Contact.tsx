
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream to-peach">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Get in Touch</h2>
          <div className="w-20 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-navy2">
            Ready to transform your business with intelligent automation? Let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 card-shadow">
            <h3 className="text-xl font-bold mb-6 text-navy">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-navy2 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coral focus:ring-coral focus:outline-none focus:ring-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-navy2 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coral focus:ring-coral focus:outline-none focus:ring-1"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-navy2 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-coral focus:ring-coral focus:outline-none focus:ring-1"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-navy text-white p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={20} />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-200">info@swiftloop.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-200">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-coral text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
              <p className="mb-6">Schedule a free 30-minute consultation to discuss how we can help your business grow with AI.</p>
              <a href="#" className="bg-white text-coral px-6 py-3 rounded-md font-semibold hover:bg-cream transition-colors inline-block">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

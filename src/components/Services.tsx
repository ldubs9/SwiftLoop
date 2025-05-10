
import React from 'react';
import { Zap, Bot, Code, Monitor } from 'lucide-react';

const ServiceCard = ({ title, description, icon, color }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-8 card-shadow hover-scale transition-all duration-300 hover:border-l-4 hover:border-coral">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-navy">{title}</h3>
      <p className="text-navy2">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "AI Workflows",
      description: "Automate repetitive tasks and streamline your operations with custom AI workflows tailored to your specific business needs.",
      icon: <Zap size={24} className="text-white" />,
      color: "bg-coral"
    },
    {
      title: "AI Chatbots",
      description: "Deploy intelligent conversational agents that engage with your customers 24/7, answer queries, and provide personalized support.",
      icon: <Bot size={24} className="text-white" />,
      color: "bg-navy"
    },
    {
      title: "Custom Projects",
      description: "From data analysis to process automation, we develop bespoke AI solutions that address your unique business challenges.",
      icon: <Code size={24} className="text-white" />,
      color: "bg-coral2"
    },
    {
      title: "Web Development",
      description: "Create stunning, high-performance websites and web applications that integrate seamlessly with your AI tools and workflows.",
      icon: <Monitor size={24} className="text-white" />,
      color: "bg-navy2"
    }
  ];

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Our Services</h2>
          <div className="w-20 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-navy2">
            Comprehensive AI solutions to automate, optimize, and transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { Users, Mail, Linkedin, ArrowRight, Target, TrendingUp, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Identify and attract high-quality prospects that are ready to buy from your business.',
      features: ['Targeted prospect research', 'Lead qualification', 'CRM integration', 'Performance tracking'],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Create compelling email campaigns that nurture leads and drive conversions.',
      features: ['Campaign strategy', 'Automated sequences', 'A/B testing', 'Analytics & optimization'],
      color: 'teal'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Sales Navigator',
      description: 'Leverage LinkedIn\'s powerful tools to connect with decision-makers and grow your network.',
      features: ['Advanced search strategies', 'Outreach automation', 'Profile optimization', 'Relationship building'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          button: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        };
      case 'teal':
        return {
          iconBg: 'bg-teal-100',
          iconColor: 'text-teal-600',
          button: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
        };
      case 'orange':
        return {
          iconBg: 'bg-orange-100',
          iconColor: 'text-orange-600',
          button: 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        };
      default:
        return {
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
          button: 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
        };
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="text-blue-600 block">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with proven strategies that consistently generate 
            high-quality leads and maximize your revenue potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`${colors.iconBg} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${colors.iconColor}`} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className={`border-2 ${colors.button} px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 group/btn`}
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how these services can work together to create a 
              comprehensive growth strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
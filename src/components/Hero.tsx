import React from 'react';
import { ArrowRight, Users, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Generate Quality
                <span className="text-blue-600 block">Leads That Convert</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I help businesses scale their revenue through strategic lead generation, 
                targeted email marketing, and LinkedIn Sales Navigator expertise. 
                Let's turn your prospects into profitable customers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center gap-2 group"
              >
                Start Growing Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                View Services
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Leads Generated</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail className="text-teal-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-gray-600">Open Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Linkedin className="text-orange-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">200%</div>
                  <div className="text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional business analytics"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
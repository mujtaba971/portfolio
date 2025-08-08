import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Results() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechFlow Solutions',
      role: 'CEO',
      content: 'Working with this lead generation expert transformed our sales pipeline. We saw a 300% increase in qualified leads within the first quarter.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Michael Chen',
      company: 'Growth Marketing Inc',
      role: 'Marketing Director',
      content: 'The LinkedIn Sales Navigator strategies were game-changing. Our connection rate improved by 250% and we closed 15 new enterprise deals.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Dynamics',
      role: 'Founder',
      content: 'The email marketing campaigns generated incredible results. Our open rates jumped to 85% and conversions increased by 180%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const caseStudies = [
    {
      title: 'SaaS Company Lead Generation',
      industry: 'Technology',
      challenge: 'Low-quality leads and poor conversion rates',
      solution: 'Implemented targeted LinkedIn outreach and email nurturing sequences',
      results: [
        '400% increase in qualified leads',
        '65% improvement in conversion rate',
        '$2.5M additional revenue in 6 months'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'B2B Email Campaign Success',
      industry: 'Professional Services',
      challenge: 'Declining email engagement and stagnant growth',
      solution: 'Redesigned email campaigns with personalization and automation',
      results: [
        '85% average open rate',
        '25% click-through rate',
        '300% ROI on email marketing spend'
      ],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results That
            <span className="text-blue-600 block">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have achieved 
            through strategic lead generation and targeted marketing campaigns.
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h4>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Challenge:</h5>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Solution:</h5>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Results:</h5>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <Quote className="text-blue-600 mb-4" size={32} />
                  <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Get Similar Results for Your Business
          </button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Users,
      number: '50+',
      label: 'Happy Clients',
      color: 'blue'
    },
    {
      icon: Clock,
      number: '3+',
      label: 'Years Experience',
      color: 'teal'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average ROI',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600' };
      case 'teal':
        return { bg: 'bg-teal-100', text: 'text-teal-600' };
      case 'orange':
        return { bg: 'bg-orange-100', text: 'text-orange-600' };
      case 'purple':
        return { bg: 'bg-purple-100', text: 'text-purple-600' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Turning Prospects Into
                <span className="text-blue-600 block">Profitable Customers</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                With over 3 years of experience in digital marketing and lead generation, 
                I've helped dozens of businesses transform their sales processes and achieve 
                remarkable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines data-driven strategies with personalized outreach to 
                create meaningful connections between businesses and their ideal customers. 
                I specialize in B2B lead generation, leveraging the power of email marketing 
                and LinkedIn Sales Navigator to deliver consistent, high-quality results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">What Sets Me Apart:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data-driven approach with detailed analytics and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized strategies tailored to your industry and target audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Proven track record of generating qualified leads that convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Continuous optimization and performance improvement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional workspace"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Qualified Leads</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);
            const Icon = achievement.icon;
            
            return (
              <div key={index} className="text-center group">
                <div className={`${colors.bg} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={colors.text} size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
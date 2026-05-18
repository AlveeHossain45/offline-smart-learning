import React from 'react';
import { Target, Heart, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, title: "Our Mission", description: "Make quality education accessible to everyone, everywhere" },
    { icon: Heart, title: "Our Values", description: "Student-first approach with focus on learning outcomes" },
    { icon: Users, title: "Community", description: "Join thousands of learners worldwide" },
    { icon: Zap, title: "Innovation", description: "Cutting-edge technology for better learning" }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">SmartLearn</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionizing education through offline-first technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2024, SmartLearn was born from a simple idea: education shouldn't be limited by internet connectivity.
            </p>
            <p className="text-gray-300">
              We've helped over 50,000 students worldwide continue their learning journey, even in areas with unreliable internet access.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-gray-400">Expert Instructors</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">1M+</div>
                <div className="text-sm text-gray-400">Hours Learned</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
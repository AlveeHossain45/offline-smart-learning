import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: 'Courses', href: '/courses' },
      { name: 'Offline Learning', href: '/offline' },
      { name: 'AI Assistant', href: '/ai-assistant' },
      { name: 'Dashboard', href: '/dashboard' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'API Docs', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialIcons = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <span className="text-2xl font-bold gradient-text">SmartLearn</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering education through offline-first technology. Learn anywhere, anytime, without boundaries.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center space-x-3 text-gray-400">
            <Mail className="w-5 h-5" />
            <span className="text-sm">support@smartlearn.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} SmartLearn. All rights reserved. 
            Made with <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
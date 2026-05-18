import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, ExternalLink, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/courses' },
      { name: 'Offline Learning', href: '/offline' },
      { name: 'AI Assistant', href: '/ai-assistant' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
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
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialIcons = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@smartlearn.com', label: 'Email' }
  ];

  return (
    <footer className="border-t mt-20" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                style={{ background: 'var(--accent-purple)', color: 'white' }}
              >
                S
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--navbar-logo)' }}>
                SmartLearn
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Empowering education through offline-first technology. Learn anywhere, anytime, without boundaries.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-xl transition-all"
                  style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)', color: 'var(--text-secondary)' }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm transition-all hover:text-purple-500"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section - এখানে লিংক যোগ করা হয়েছে */}
        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © {currentYear} SmartLearn. All rights reserved.
            </p>
            
            {/* Decorative dot */}
            <span className="hidden sm:inline w-1 h-1 rounded-full" style={{ background: 'var(--accent-purple)', opacity: 0.5 }} />
            
            {/* Company Link - সুন্দর করে ডিজাইন করা */}
            <motion.a 
              href="https://onexero.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-all group"
              style={{ 
                background: 'rgba(79, 70, 229, 0.08)',
                color: 'var(--accent-purple)',
              }}
            >
              <Zap className="w-3 h-3 group-hover:rotate-12 transition-transform" />
              <span>Powered by</span>
              <span className="font-semibold">OneXero</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            
            {/* Made with love */}
            <span className="hidden sm:inline w-1 h-1 rounded-full" style={{ background: 'var(--accent-purple)', opacity: 0.5 }} />
            
            <p className="text-xs inline-flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
              Made with
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              for learners worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
  Sparkles,
  Heart,
} from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Contest", path: "/all-contest" },
    { 
      name: "Why Join Contest", path: "/whyjoincontest", icon: <Sparkles size={22} />
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    {
      icon: <Twitter size={22} />,
      url: "https://x.com/hira_bd",
      label: "Twitter",
    },
    {
      icon: <Facebook size={22} />,
      url: "https://www.facebook.com/Emon1359",
      label: "Facebook",
    },
    {
      icon: <Linkedin size={22} />,
      url: "https://www.linkedin.com/in/emon135923/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={22} />,
      url: "https://www.instagram.com/hawladar76/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Globe size={26} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creative Arena
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Where Creativity Meets Excellence
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Join thousands of creative minds in our competitions. Showcase
              your talent, win amazing prizes, and grow your skills.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-purple-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">emonhossainhira231@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe
                  size={20}
                  className="text-purple-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-gray-400">www.creativearena.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Follow Us
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Stay connected with our community
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-black text-gray-500 text-sm">
              Creative Arena
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-900">
          <p className="text-gray-500 text-sm md:text-base text-center md:text-left">
            Copyright © 2025 Creative Arena. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <NavLink
              to="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </NavLink>
            <span>•</span>
            <NavLink
              to="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </NavLink>
            <span>•</span>
            <NavLink
              to="/cookies"
              className="text-sm hover:text-white transition-colors"
            >
              Cookies Policy
            </NavLink>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex justify-center items-center gap-2 mt-8 text-gray-600 text-sm">
          <span>Made with</span>
          <Heart
            size={16}
            className="text-red-500 fill-red-500 animate-pulse"
          />
          <span>by Creative Arena Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

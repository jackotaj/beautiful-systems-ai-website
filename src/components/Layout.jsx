import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar, MessageSquare, Star, Zap, Users, BarChart3, Phone, Mail, Globe, CheckCircle, Share2, CreditCard, MapPin, Target, ClipboardList, Rocket, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/beautifullogoblack.png" 
                  alt="Beautiful Systems" 
                  className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#platform" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
              <a href="/ai-employee" className="text-gray-600 hover:text-primary transition-colors">AI Employee</a>
              <a href="/#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="/book-demo">Book a Strategy Call</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img src="/beautifullogoblack.png" alt="Beautiful Systems" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 mb-4">
                CRM, marketing, and operations in one system. Answer in seconds, follow up forever, prove ROI.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Core Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/book-show-ai" className="hover:text-white transition-colors">Book & Show AI</a></li>
                <li><a href="/never-missed" className="hover:text-white transition-colors">Never Missed</a></li>
                <li><a href="/review-rocket" className="hover:text-white transition-colors">Review Rocket</a></li>
                <li><a href="/reactivation" className="hover:text-white transition-colors">Beautiful Reactivation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Beautiful Components</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/social" className="hover:text-white transition-colors">Beautiful Social</a></li>
                <li><a href="/webchat" className="hover:text-white transition-colors">Beautiful Webchat AI</a></li>
                <li><a href="/automations" className="hover:text-white transition-colors">Beautiful Automations</a></li>
                <li><a href="/payments" className="hover:text-white transition-colors">Beautiful Payments</a></li>
                <li><a href="/intelligence" className="hover:text-white transition-colors">Beautiful Intelligence</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Beautiful Systems. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


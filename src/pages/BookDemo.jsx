import React from 'react';
import { ArrowRight, Calendar, MessageSquare, Clock, CheckCircle, Users, Eye, Shield, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const BookDemo = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-beautiful-pink rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-beautiful-pink rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-beautiful-pink rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-beautiful-pink/10 text-beautiful-pink px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Calendar className="w-4 h-4" />
                Questions first. Pressure never.
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Book a Demo & Discovery
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
                <strong>See how Beautiful Systems works—before you commit.</strong>
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                A straightforward demo and Q&A to confirm fit, preview key features, and understand pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => document.getElementById('calendar-section').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-beautiful-pink text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-beautiful-pink/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Pick a time on the calendar
                  <Calendar className="w-5 h-5" />
                </button>
                <a 
                  href="/contact" 
                  className="border-2 border-beautiful-pink text-beautiful-pink px-10 py-5 rounded-xl text-lg font-semibold hover:bg-beautiful-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Have a quick question?
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar-section" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              Calendar
            </h2>
            
            {/* Booking Calendar Widget */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 mb-12">
              <iframe 
                src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                style={{width: '100%', border: 'none', overflow: 'auto', minHeight: '1000px', height: '1000px'}} 
                scrolling="yes" 
                id="lHrJjJEhCPY2Atu8hj01_1758029670659"
                className="rounded-xl w-full"
                title="Book a Strategy Call"
              />
            </div>

            {/* Demo Form */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tell us what you'd like to see</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    What do you want to see?
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., missed-call text-back, review requests, inbox"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Current tools we should know about?
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your current CRM, phone system, etc."
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    Anything else we should prepare? (optional)
                  </label>
                  <textarea 
                    placeholder="Any specific questions or requirements"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookDemo;

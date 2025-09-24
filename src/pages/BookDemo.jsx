import React from 'react';
import { Calendar } from 'lucide-react';
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
                Book a Strategy Call
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Talk
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
                <strong>Schedule a time that works for you.</strong>
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Pick a time below and we'll show you how Beautiful Systems can help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Booking Calendar Widget */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
              <iframe 
                src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                style={{width: '100%', border: 'none', overflow: 'auto', minHeight: '1000px', height: '1000px'}} 
                scrolling="yes" 
                id="lHrJjJEhCPY2Atu8hj01_1758029670659"
                className="rounded-xl w-full"
                title="Book a Strategy Call"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookDemo;

import React from 'react';
import Layout from '../components/Layout';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-primary border-primary font-semibold">
              Questions first. Pressure never.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have a question about Beautiful Systems? Want to discuss your specific needs? We're here to help.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              Fill out the form below and we'll get back to you quickly with answers, not a sales pitch.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Questions</h3>
                <p className="text-gray-600">Use the form below for general inquiries and questions</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Demo</h3>
                <p className="text-gray-600">Ready to see Beautiful Systems in action? Schedule a personalized demo</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Support</h3>
                <p className="text-gray-600">Existing customers can reach our support team directly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">We'll respond within 24 hours (usually much faster)</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
              <iframe
                src="https://links.beautifulcrm.com/widget/form/halGBNWTJ0U6J9nLKsVp"
                style={{width: '100%', height: '742px', border: 'none', borderRadius: '3px'}}
                id="inline-halGBNWTJ0U6J9nLKsVp" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="742"
                data-layout-iframe-id="inline-halGBNWTJ0U6J9nLKsVp"
                data-form-id="halGBNWTJ0U6J9nLKsVp"
                title="Contact Us"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What happens next?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">We receive your message</h3>
                <p className="text-sm text-gray-600">Your inquiry goes directly to our team</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">We review and respond</h3>
                <p className="text-sm text-gray-600">Usually within a few hours with helpful answers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Next steps (if needed)</h3>
                <p className="text-sm text-gray-600">We'll suggest a demo or provide additional resources</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <script src="https://links.beautifulcrm.com/js/form_embed.js"></script>
    </Layout>
  );
}

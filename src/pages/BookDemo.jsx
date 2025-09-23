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
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#e01f80] rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01f80] rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#e01f80] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#e01f80]/10 text-[#e01f80] px-4 py-2 rounded-full text-sm font-medium mb-8">
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
                  className="bg-[#e01f80] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#c01a70] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Pick a time on the calendar
                  <Calendar className="w-5 h-5" />
                </button>
                <a 
                  href="/contact" 
                  className="border-2 border-[#e01f80] text-[#e01f80] px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Have a quick question?
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Call Is For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Who this call is for
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-2xl text-center">
                <Users className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Owners and operators</h3>
                <p className="text-gray-700">who want to understand what the AI Employee + Beautiful CRM actually does.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl text-center">
                <Eye className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teams comparing platforms</h3>
                <p className="text-gray-700">who need a simple, honest walkthrough.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl text-center">
                <MessageSquare className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Anyone with specific questions</h3>
                <p className="text-gray-700">about setup, migration, or pricing.</p>
              </div>
            </div>
            <div className="bg-[#e01f80]/10 border-l-4 border-[#e01f80] p-6 rounded-r-lg mt-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 italic">
                Not a strategy workshop and not a pressure pitch. It's a demo so you can make a clear decision.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What to expect (in plain English)
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Brief overview</h3>
                  <p className="text-gray-700">of the platform and core components.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live demo</h3>
                  <p className="text-gray-700">of the features most relevant to you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Straight answers</h3>
                  <p className="text-gray-700">on setup, migration, timelines, and pricing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick fit check</h3>
                  <p className="text-gray-700">and next steps if you want to proceed.</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              No audits, no 90-day plans, no homework.
            </p>
          </div>
        </section>

        {/* What We'll Show Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What we'll show (live)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">AI Employee</h3>
                <p className="text-gray-700">web chat/SMS/voice handling common questions and booking.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Book & Show AI</h3>
                <p className="text-gray-700">reminders and basic no-show recovery.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Never Missed</h3>
                <p className="text-gray-700">instant text-back for unanswered calls.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Review Rocket</h3>
                <p className="text-gray-700">automated review requests and safe escalation.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Beautiful CRM</h3>
                <p className="text-gray-700">unified inbox, pipelines, basic dashboards.</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              We'll keep it practical and focus on the few items you care about.
            </p>
          </div>
        </section>

        {/* How Booking Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              How the booking works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a slot</h3>
                <p className="text-gray-700">on the calendar below.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Answer quick prompts</h3>
                <p className="text-gray-700">so we tailor the demo.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get confirmation</h3>
                <p className="text-gray-700">with video link and reminders.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join the call</h3>
                <p className="text-gray-700">we keep it on time and on track.</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Running late? You'll have a one-click reschedule link.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Common questions (and straight answers)
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long is the call?",
                  answer: "20–30 minutes. We'll extend only if you want to dig deeper."
                },
                {
                  question: "Will you set anything up on the call?",
                  answer: "No. This is a preview and Q&A. If you proceed, we'll outline setup steps and timing."
                },
                {
                  question: "Do you work with my industry?",
                  answer: "If you book appointments or manage a pipeline (clinics, programs, services, B2B), likely yes. We'll tell you if not."
                },
                {
                  question: "Contracts and pricing?",
                  answer: "Month-to-month and annual options. Setup fee is waived with annual."
                },
                {
                  question: "HIPAA / compliance?",
                  answer: "We have a healthcare configuration. Mention it when you book."
                },
                {
                  question: "Migrations?",
                  answer: "We can help move contacts, basic forms, and calendars. We'll explain scope and any limits."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                  <p className="text-lg text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Simple policies
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl text-center">
                <Calendar className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reschedule / cancel</h3>
                <p className="text-gray-700">One click from your confirmation email.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center">
                <Shield className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy</h3>
                <p className="text-gray-700">Your information is used only to prepare your demo and follow up about the solution you asked about.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">No hard sell</h3>
                <p className="text-gray-700">If it's not a fit, we'll say so.</p>
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
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg h-24"
                  ></textarea>
                </div>
              </div>
            </div>

            <button className="bg-[#e01f80] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
              Book my demo
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookDemo;


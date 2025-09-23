import React from 'react';
import { ArrowRight, Users, MessageSquare, TrendingUp, Shield, Clock, Target, CheckCircle, AlertTriangle, Calendar, BarChart3, Zap, RefreshCw } from 'lucide-react';
import Layout from '../components/Layout';

const BeautifulReactivation = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#e01f80] rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01f80] rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#e01f80] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e01f80]/10 text-[#e01f80] px-4 py-2 rounded-full text-sm font-medium mb-8">
                <RefreshCw className="w-4 h-4" />
                Lead Reactivation System
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Beautiful Reactivation
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
                <strong>Wake up dormant leads. Activate revenue.</strong>
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                There is cash hiding in your past conversations. Stop chasing cold strangers. Mine the list you already own. 
                <br /><br />
                <strong className="text-[#e01f80]">Beautiful Reactivation</strong> runs multi-day win-backs that look personal, feel timely, and end on your calendar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="/book-demo" className="bg-[#e01f80] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#c01a70] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start a Reactivation Campaign
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  See Live Demo
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Compliance Built-In</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>AI-Powered Replies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#e01f80]" />
                  <span>Setup in 1 Hour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big Promise Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                The big promise
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Turn yesterday's leads into this month's bookings. No new ads. No coupon spam. Just smart timing, human tone, and AI that knows when to push and when to pass to a human.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              How it works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Import and segment</h3>
                <p className="text-gray-700">Past leads and customers. Group by last activity, offer taken, ticket size, or service.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a proven sequence</h3>
                <p className="text-gray-700">Choose your niche playbook. Tune the voice in minutes.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Let AI handle replies</h3>
                <p className="text-gray-700">Quick questions get answered. Qualified responses get booked. Edge cases route to your team.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Track the money</h3>
                <p className="text-gray-700">Every reply, booking, and dollar ties back to the campaign inside Beautiful CRM.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
                Start a Reactivation Campaign
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What you get
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Prebuilt win-back workflows by niche and intent",
                "SMS and email sequences that read like a real person",
                "AI reply handler with clean human handoff",
                "Booking handoff to your calendar or Book and Show AI",
                "Field-safe throttling so you never carpet-bomb your list",
                "Opt-out and compliance baked in with quiet hours and consent",
                "Reactivation dashboard for replies, bookings, revenue, and ROI"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Prints Money Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why this prints money
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <TrendingUp className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cheapest acquisition
                </h3>
                <p className="text-gray-700">
                  You already paid to acquire these leads. Reactivation is the cheapest way to turn sunk cost into booked work.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Clock className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Urgency without bribes
                </h3>
                <p className="text-gray-700">
                  Soft deadlines and limited spots move fence sitters without bribes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Target className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personal beats generic
                </h3>
                <p className="text-gray-700">
                  Personalized context beats generic blasts. Your last interaction becomes the hook.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Setup Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Setup in under an hour
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Import Data",
                  description: "Import a clean CSV or sync from Beautiful CRM."
                },
                {
                  step: "Step 2",
                  title: "Pick Playbook",
                  description: "Pick your playbook. Approve the copy and timing."
                },
                {
                  step: "Step 3",
                  title: "Connect Calendar",
                  description: "Connect your calendar and pick the booking path."
                },
                {
                  step: "Step 4",
                  title: "Launch & Track",
                  description: "Hit go. Watch the replies and bookings roll in. Tweak as you learn."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
                Start a Reactivation Campaign
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>



        {/* Target Audience Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Who this is for</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Appointment-based services. Clinics and practices. Home services. Legal and finance. Coaches and programs. 
                  Any business with a list that went quiet.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Who this is not for</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Spray and pray emailers. List rentals. People who think "Dear valued customer" still works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Reporting you can trust
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MessageSquare, title: "Replies by channel", description: "Track engagement across SMS and email" },
                { icon: Calendar, title: "Bookings created and show rate", description: "Monitor conversion to appointments" },
                { icon: TrendingUp, title: "Revenue attributed to campaign", description: "See direct ROI from reactivation" },
                { icon: BarChart3, title: "Cost per booking including usage", description: "Understand true campaign costs" },
                { icon: Users, title: "List segments that respond best", description: "Optimize targeting for future campaigns" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <item.icon className="w-12 h-12 text-[#e01f80] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-colors">
                See Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-[#e01f80] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Price</h2>
            <div className="bg-white/10 p-12 rounded-2xl mb-8">
              <div className="text-6xl font-bold mb-4">$197</div>
              <div className="text-2xl mb-6">per month</div>
              <div className="text-xl opacity-90">Cancel anytime.</div>
            </div>
            <p className="text-lg opacity-90 mb-12">
              Messaging usage is billed at carrier rates. A2P registration and consent flows included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-demo" className="bg-white text-[#e01f80] px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
                Start a Reactivation Campaign
              </a>
              <a href="/book-demo" className="border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-[#e01f80] transition-colors">
                See Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Fast action bonuses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Niche script packs",
                  description: "For top industries so you launch fast"
                },
                {
                  title: "Recovery reply library",
                  description: "For price, timing, and objection hurdles"
                },
                {
                  title: "Calendar scarcity templates",
                  description: "That lift response without sounding spammy"
                },
                {
                  title: "Launch checklist",
                  description: "To go live today"
                }
              ].map((bonus, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{bonus.title}</h3>
                  <p className="text-lg text-gray-700">{bonus.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Word Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Final word</h2>
            <p className="text-xl leading-relaxed mb-12">
              You already earned these leads. Let them pay you back. <strong className="text-[#e01f80]">Beautiful Reactivation</strong> turns quiet lists into booked work with messages people actually answer and a booking flow that finishes the job.
            </p>
            <button className="bg-[#e01f80] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
              Start a Reactivation Campaign
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BeautifulReactivation;


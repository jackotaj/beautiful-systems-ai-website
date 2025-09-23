import React from 'react';
import { ArrowRight, Star, MessageSquare, TrendingUp, Shield, Clock, Target, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

const ReviewRocket = () => {
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
                <Star className="w-4 h-4" />
                Review Management System
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Review Rocket
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
                <strong>Steal attention on Google. Stack 5-star proof. Get called first.</strong>
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                You do great work. Strangers do not know it. They trust stars. They trust recency. They trust volume.
                <br /><br />
                <strong className="text-[#e01f80]">Review Rocket</strong> gets you all three without nagging staff or begging customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="/book-demo" className="bg-[#e01f80] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#c01a70] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Launch Review Rocket
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
                  <span>Google Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>30-Day Guarantee</span>
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
              The Big Promise
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Add fresh, real reviews every week. Climb local rankings. Turn browsers into buyers who call you first.
            </p>
            <div className="bg-[#e01f80] text-white p-8 rounded-2xl">
              <p className="text-2xl font-bold">
                If you are not adding reviews, you are feeding your competitors. Stop it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            How it actually works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Target className="w-12 h-12 text-[#e01f80] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Triggers that fire at the right moment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Job done. First visit complete. Invoice paid. Smile spotted. The ask goes out by SMS or email while the good feeling is high.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Shield className="w-12 h-12 text-[#e01f80] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Happy flows public. Problems go private
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unhappy customers are routed to you for fast recovery. No review gating. Fully compliant.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <MessageSquare className="w-12 h-12 text-[#e01f80] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI reply assist that sounds like you
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Approve a solid reply in seconds. You look responsive and professional.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Star className="w-12 h-12 text-[#e01f80] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proof on display
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pull reviews to your site with a carousel that sells.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <TrendingUp className="w-12 h-12 text-[#e01f80] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Scoreboard you can trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Request rate. Response rate. Average rating. Velocity over time.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
              Launch Review Rocket
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            What you get today
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "SMS and email review requests tied to real milestones",
              "Private feedback catcher for Negative Reviews",
              "Google Business Profile connection and auto pull",
              "Review carousel and badges for your site",
              "AI-assisted reply suggestions for fast, on-brand responses",
              "Templates that fit your voice and industry",
              "Reporting for requests, responses, ratings, velocity, and sources",
              "Multi-location routing with roll-up reporting"
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
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <TrendingUp className="w-16 h-16 text-[#e01f80] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Volume beats "best kept secret"
              </h3>
              <p className="text-gray-700">
                More reviews means higher map rank which means more free calls.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <Clock className="w-16 h-16 text-[#e01f80] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Speed beats silence
              </h3>
              <p className="text-gray-700">
                Fast, thoughtful replies flip fence-sitters into buyers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <Target className="w-16 h-16 text-[#e01f80] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Systems beat memory
              </h3>
              <p className="text-gray-700">
                Automation asks every time. No "we forgot."
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-colors">
              See Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <AlertTriangle className="w-12 h-12 text-yellow-600 flex-shrink-0 mt-2" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Warning</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>Do not "blast" old lists with the same message. You will look desperate.</p>
                <p>Do not fake reviews. You will get flagged.</p>
                <p>Do not delegate this to "whoever has time." No one has time.</p>
                <p className="font-semibold text-gray-900">
                  Use a system that asks the right customer at the right time with the right tone. Every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Setup is simple
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Connect & Import",
                description: "Connect Google Business Profile. Import contacts or sync Beautiful CRM."
              },
              {
                step: "Step 2",
                title: "Configure Messages",
                description: "Pick your triggers and messages. Approve the voice and timing."
              },
              {
                step: "Step 3",
                title: "Enable AI Replies",
                description: "Switch on AI reply assist so your responses go out fast."
              },
              {
                step: "Step 4",
                title: "Add Widgets",
                description: "Add the review carousel to your site. Watch fresh proof stack up."
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
              Launch Review Rocket
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
                Local services. Clinics and practices. Contractors. Home services. Legal. Finance. Coaching. 
                Anyone who wins business from search and reputation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Who this is not for</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                People looking for shortcuts or fake reviews. If you do not deliver value to customers, 
                more visibility will hurt you faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Objections handled
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                objection: "We already ask.",
                response: "No you do not. You think you do. Your staff forgets. Review Rocket does not."
              },
              {
                objection: "I worry about bad reviews.",
                response: "Good. That means you care. We route issues to you privately first so you can fix the relationship and earn the right to ask again."
              },
              {
                objection: "We do not have time to reply.",
                response: "AI writes a clean first draft. You approve in seconds."
              },
              {
                objection: "Will this hurt deliverability?",
                response: "Messages are permission-based and throttled. Opt out is included. We follow policy so your sender reputation stays clean."
              },
              {
                objection: "Is this compliant with Google rules?",
                response: "Yes. No review gating. Everyone can leave a public review. Unhappy feedback is handled privately while keeping the public option open."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">"{item.objection}"</h3>
                <p className="text-lg text-gray-700">{item.response}</p>
              </div>
            ))}
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
            <div className="text-xl opacity-90">Cancel any time.</div>
          </div>
          <p className="text-lg opacity-90 mb-12">
            SMS usage is billed at carrier rates. We handle compliance and opt-out language.
          </p>
          <button className="bg-white text-[#e01f80] px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
            Start Review Rocket
          </button>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Fast-action bonuses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Industry Ask Scripts",
                description: "Words that convert without sounding pushy."
              },
              {
                title: "Reply Swipe File",
                description: "Professional replies for raves and rough ones."
              },
              {
                title: "Site Widgets Pack",
                description: "Carousel, badges, and trust markers that lift conversion."
              },
              {
                title: "Launch Checklist",
                description: "Go live in under an hour."
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

      {/* Guarantee Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Guarantee</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Try Review Rocket for 30 days. If you do not see a clear lift in review velocity or quality, 
            tell us and we will credit month one. No drama.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Ready to launch?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#e01f80] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2">
              Launch Review Rocket
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors">
              See Live Demo
            </button>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default ReviewRocket;


import React from 'react';
import { ArrowRight, Users, MessageSquare, TrendingUp, Shield, Clock, Target, CheckCircle, AlertTriangle, Calendar, BarChart3, Zap, RefreshCw, Settings, DollarSign, Eye, GitMerge, Filter, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';

const BeautifulCRM = () => {
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
                <Settings className="w-4 h-4" />
                Revenue Operations Engine
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Beautiful CRM
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
                <strong>One system to run your revenue engine</strong>
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Unlimited users. Custom pipelines and stages built the way you do business. Stop paying per seat. Start paying for results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="/book-demo" className="bg-[#e01f80] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#c01a70] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Beautiful CRM
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  See the CRM Tour
                </a>
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
                Bring every lead, message, invoice, and campaign into one engine. Track money from first touch to paid. Automate the grind. Give your team clarity. Then scale what works.
              </p>
              <p className="text-lg text-gray-600 italic">If your pipeline lives in six tools and three inboxes, you are bleeding deals you never see.</p>
            </div>
          </div>
        </section>

        {/* Why This Wins Deals Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why this wins deals you are losing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <Zap className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Speed to action</h3>
                <p className="text-gray-700">New leads get routed, tagged, and messaged in seconds.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <GitMerge className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Process that sticks</h3>
                <p className="text-gray-700">Pipelines and stages mirror how you actually sell.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <RefreshCw className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow up that finishes</h3>
                <p className="text-gray-700">Tasks, reminders, and automations close loops.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <BarChart3 className="w-12 h-12 text-[#e01f80] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Numbers that matter</h3>
                <p className="text-gray-700">See where revenue begins and where it falls apart.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
                Get Beautiful CRM
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* The Engine Room Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              The engine room
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Unlimited contacts and users",
                "Custom fields, pipelines, and stages",
                "Smart lists and tasks",
                "Unified inbox",
                "Sites and funnels",
                "Payments and invoices",
                "Attribution dashboards",
                "Multi-location controls",
                "API and integrations"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-colors">
                See the CRM Tour
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              How it works in your business
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Model your pipeline</h3>
                <p className="text-gray-700">We map your stages, deal types, and handoffs. You get fields that matter and stages that match reality.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect your channels</h3>
                <p className="text-gray-700">Phone, SMS, email, chat, and social inboxes plug into one view. Forms and calendars push straight to the pipeline.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Turn on automations</h3>
                <p className="text-gray-700">Lead assignment, SLA timers, task creation, and follow up sequences go live. Nothing slips.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-[#e01f80] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Track money</h3>
                <p className="text-gray-700">Attribution and pipeline reports reveal what creates revenue and what wastes time. You scale the winners.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
                Get Beautiful CRM
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Built for Operators Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Built for operators, not hobbyists
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Appointment based services</h3>
                <p className="text-gray-700">that need bookings and reminders</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Clinics and practices</h3>
                <p className="text-gray-700">that run recalls and multi-location routing</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">B2B services</h3>
                <p className="text-gray-700">that manage proposals, tasks, and long cycles</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#e01f80] mb-4">Coaches and programs</h3>
                <p className="text-gray-700">that run funnels, calendars, and memberships</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg italic">If your day is spent in spreadsheets, shared inboxes, and chasing status, this replaces the chaos.</p>
          </div>
        </section>

        {/* Replace the Frankenstack Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Replace the Frankenstack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
              <p>Per seat CRM</p>
              <p>Separate help desk</p>
              <p>Standalone forms and chat</p>
              <p>Standalone funnel builder</p>
              <p>Standalone payments tool</p>
              <p>Separate call tracking</p>
              <p>Attribution band-aids</p>
            </div>
            <p className="text-2xl font-bold mt-16 text-[#e01f80]">One tool. One login. One source of truth.</p>
            <div className="text-center mt-12">
              <a href="/book-demo" className="border-2 border-[#e01f80] text-[#e01f80] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e01f80] hover:text-white transition-colors">
                See the CRM Tour
              </a>
            </div>
          </div>
        </section>

        {/* What Makes It Different Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What makes Beautiful CRM different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <Users className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlimited users included</h3>
                <p className="text-gray-700">Grow headcount without a tax on every seat.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <Filter className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipelines your way</h3>
                <p className="text-gray-700">Custom stages and fields by line of business.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <DollarSign className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue first</h3>
                <p className="text-gray-700">Dashboards show cash, not vanity metrics.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <Zap className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation first</h3>
                <p className="text-gray-700">Reps work hot tasks while the system handles everything else.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <Sparkles className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI assist available</h3>
                <p className="text-gray-700">Booking, replies, and workflow suggestions when you are ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Objections Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Objections handled
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  objection: "We already have a CRM.",
                  response: "If it worked, your team would be in it. If they avoid it, it is not helping. Migration is simple. Clarity is priceless."
                },
                {
                  objection: "My process is unique.",
                  response: "Good. We build pipelines and stages to match your reality. Templates get you live, customization makes it yours."
                },
                {
                  objection: "We do not want more software.",
                  response: "You want fewer logins and more revenue visibility. This consolidates tools and kills hidden costs."
                },
                {
                  objection: "I worry about adoption.",
                  response: "One inbox. Clear tasks. Fewer places to click. When it saves time, people use it."
                },
                {
                  objection: "Can it scale?",
                  response: "Multi-location, permissions, API, and roll-up reporting are built in."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#e01f80] mb-4">"{item.objection}"</h3>
                  <p className="text-lg text-gray-700">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Switch On Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What you can switch on day one
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Contact capture from every form and chat",
                "Auto assignment by round robin or rules",
                "Missed call text back",
                "Calendar booking with reminders",
                "Deal stage automations and tasks",
                "Quote, invoice, and subscription",
                "Review requests and responses",
                "Attribution for ads and campaigns"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#e01f80] mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/book-demo" className="bg-[#e01f80] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c01a70] transition-colors flex items-center justify-center gap-2 mx-auto">
                Get Beautiful CRM
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Reporting that moves decisions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <BarChart3 className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipeline by stage</h3>
                <p className="text-gray-700">with aging and velocity</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <DollarSign className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Source to revenue</h3>
                <p className="text-gray-700">with true attribution</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Users className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Activity to outcome</h3>
                <p className="text-gray-700">by rep</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Calendar className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No-show rate and show rate</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <TrendingUp className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Membership and subscription MRR</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Eye className="w-12 h-12 text-[#e01f80] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Location roll-up</h3>
                <p className="text-gray-700">with drill down</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">You finally know what to fix and what to fund.</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-[#e01f80] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Price</h2>
            <div className="bg-white/10 p-12 rounded-2xl mb-8">
              <div className="text-2xl mb-6">Starting at</div>
              <div className="text-6xl font-bold mb-4">$197</div>
              <div className="text-2xl mb-6">per month</div>
              <div className="text-xl opacity-90">Cancel anytime.</div>
            </div>
            <p className="text-lg opacity-90 mb-12">
              Messaging and telephony usage are billed at carrier rates. A2P registration and deliverability setup included during onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#e01f80] px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
                Get Beautiful CRM
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-[#e01f80] transition-colors">
                See the CRM Tour
              </button>
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What you get when you start today
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipeline blueprint workshop</h3>
                <p className="text-lg text-gray-700">to map stages that fit your business</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core automation pack</h3>
                <p className="text-lg text-gray-700">for leads, tasks, and reminders</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Forms and calendar templates</h3>
                <p className="text-lg text-gray-700">ready to deploy</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Attribution starter dashboards</h3>
                <p className="text-lg text-gray-700">to see ROI in week one</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              FAQ
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                { q: "Can I import our current data?", a: "Yes. CSV import or assisted migration." },
                { q: "Does email and SMS live here?", a: "Yes. Full inbox, templates, sequences, and logging." },
                { q: "Can I build custom fields and views?", a: "Yes. Unlimited custom fields and saved smart lists." },
                { q: "Do you support multiple brands or locations?", a: "Yes. Separate numbers, inboxes, calendars, and roll-up reporting." },
                { q: "Does it replace my website and funnels?", a: "It can. Unlimited pages and funnels are included." },
                { q: "Can I take payments inside the CRM?", a: "Yes. Quotes, invoices, subscriptions, and one time payments." },
                { q: "Is there an API?", a: "Yes. Webhooks and API for custom integrations." },
                { q: "How fast can we launch?", a: "Most teams are live in days, not months." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.q}</h3>
                  <p className="text-lg text-gray-700">{item.a}</p>
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
              Tools should not get credit for revenue. Systems should. <strong className="text-[#e01f80]">Beautiful CRM</strong> is the system. It centralizes the work, automates the grind, and makes the numbers obvious so you scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#e01f80] text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-[#c01a70] transition-colors">
                Get Beautiful CRM
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-[#e01f80] transition-colors">
                See the CRM Tour
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BeautifulCRM;


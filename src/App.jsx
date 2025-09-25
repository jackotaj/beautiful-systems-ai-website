import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  ArrowRight, Calendar, MessageSquare, Star, Zap, Users, BarChart3, Phone, Mail, Globe, CheckCircle, Share2, CreditCard, MapPin, Target, ClipboardList, Rocket, RotateCcw, Inbox, DollarSign, Bot, TrendingUp, Building, Bullseye, FileText, Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo (left) */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/beautifullogoblack.png" 
                  alt="Beautiful Systems"
                  className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            {/* Nav links and CTA (right) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#solutions" className="text-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:text-beautiful-pink transition-colors">
                Solutions
              </a>
              <a href="#components" className="text-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:text-beautiful-pink transition-colors">
                Components
              </a>
              <a href="#pricing" className="text-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:text-beautiful-pink transition-colors">
                Pricing
              </a>
              <Button className="bg-beautiful-pink hover:bg-beautiful-pink/90 text-white" asChild>
                <a href="/book-demo">Book a Strategy Call</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-beautiful-pink border-beautiful-pink font-semibold">
            Own the unfair advantage
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plug leaks. Fuel your pipeline.<br />
            <span className="text-beautiful-pink">Meet your 24/7 AI Employee.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CRM, marketing, and operations in one system. Answer in seconds, follow up forever, prove ROI.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Beautiful Systems unifies conversations, bookings, payments, and reviews into one growth engine. 
            AI runs the grind, dashboards prove ROI, and your business runs on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90 text-white text-lg px-8 py-3" asChild>
              <a href="/book-demo">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-beautiful-pink text-beautiful-pink hover:bg-beautiful-pink hover:text-white" asChild>
              <a href="/ai-employee">Activate My AI Employee</a>
            </Button>
          </div>
          
          {/* Capabilities Strip */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Attract', 'Capture', 'Converse', 'Convert', 'Retain', 'Measure', 'Extend'].map((capability) => (
              <Badge key={capability} variant="secondary" className="text-sm px-4 py-2">
                {capability}
              </Badge>
            ))}
          </div>
          
          {/* Proof Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-beautiful-pink" />
              <span>First response in seconds</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MessageSquare className="h-5 w-5 text-beautiful-pink" />
              <span>Follow-up that never stops</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <BarChart3 className="h-5 w-5 text-beautiful-pink" />
              <span>ROI you can prove</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Employee */}
      <section className="py-20 bg-gray-50" id="ai-employee">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The AI Employee</h2>
            <p className="text-xl text-gray-600 mb-8">Always on. Always polite. Always moving the next step.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conversation AI</h3>
              <p className="text-gray-600 text-sm">Chats on web, SMS, and social. Answers FAQs. Qualifies. Books the calendar.</p>
            </Card>
            <Card className="p-6 text-center">
              <Phone className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Voice AI</h3>
              <p className="text-gray-600 text-sm">Answers calls, routes smartly, schedules, and logs details.</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reviews AI</h3>
              <p className="text-gray-600 text-sm">Replies contextually, escalates issues, and grows 5-star proof.</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Workflow AI</h3>
              <p className="text-gray-600 text-sm">Drafts emails and posts. Builds automations from plain-English prompts.</p>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              <strong>Outcome:</strong> Faster response. Fewer no-shows. Higher show rates. Clear ROI.
            </p>
            <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
              <a href="/book-demo">
                See It in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">Everything you need to grow, in one place.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Users className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lead Capture & Nurture</h3>
              <p className="text-gray-600">Convert more visitors with webchat, forms, quizzes, and AI DMs. Then follow up by text, email, or phone—automatically.</p>
            </Card>
            <Card className="p-6">
              <Calendar className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bookings & Reminders</h3>
              <p className="text-gray-600">Let prospects book in seconds. AI reminders and rescheduling boost show rates and fill your calendar.</p>
            </Card>
            <Card className="p-6">
              <CreditCard className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Payments & Invoicing</h3>
              <p className="text-gray-600">Text-to-pay, one-click invoices, and recurring billing make every transaction smooth for you and your clients.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CRM Platform */}
      <section className="py-20 bg-gray-50" id="crm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The CRM Platform</h2>
            <p className="text-xl text-gray-600 mb-8">One system for messaging, pipeline, and reporting.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Inbox className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unified Inbox</h3>
              <p className="text-gray-600">Every conversation—SMS, email, webchat, Facebook, Instagram—in one place. Respond or let AI handle it for you.</p>
            </Card>
            <Card className="p-6">
              <BarChart3 className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pipeline Management</h3>
              <p className="text-gray-600">Track every lead and deal from first contact to closed sale. Automate follow-up and never miss a step.</p>
            </Card>
            <Card className="p-6">
              <DollarSign className="h-10 w-10 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">ROI Dashboard</h3>
              <p className="text-gray-600">See where leads come from, what converts, and your exact ROI—finally prove your marketing works.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20" id="components">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Components</h2>
            <p className="text-xl text-gray-600 mb-8">Plug in what you need. Grow as you go.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MapPin className="h-10 w-10 text-beautiful-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Landing Pages</h3>
              <p className="text-gray-600 text-sm">Convert traffic with beautiful, AI-built pages for every offer.</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="h-10 w-10 text-beautiful-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Webchat Widget</h3>
              <p className="text-gray-600 text-sm">Capture leads and answer questions instantly, 24/7.</p>
            </Card>
            <Card className="p-6 text-center">
              <ClipboardList className="h-10 w-10 text-beautiful-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Quizzes & Forms</h3>
              <p className="text-gray-600 text-sm">Engage and qualify leads with interactive quizzes and forms.</p>
            </Card>
            <Card className="p-6 text-center">
              <Share2 className="h-10 w-10 text-beautiful-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Referral Tracking</h3>
              <p className="text-gray-600 text-sm">Reward referrals automatically and grow word-of-mouth.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Playbooks */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Playbooks</h2>
            <p className="text-xl text-gray-600 mb-8">Everything you need, one simple price.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center border-2 border-beautiful-pink">
              <h3 className="text-2xl font-bold mb-2">Growth Platform</h3>
              <p className="text-xl text-gray-700 mb-6">Everything you need to capture, convert, and keep clients.</p>
              <ul className="text-gray-600 mb-8 space-y-2 text-left max-w-xs mx-auto">
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />CRM & Unified Inbox</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Bookings & Reminders</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Payments & Reviews</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Landing Pages & Forms</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Automation & AI</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />ROI Dashboard</li>
              </ul>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$297</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <Button className="bg-beautiful-pink hover:bg-beautiful-pink/90 w-full text-lg" asChild>
                <a href="/book-demo">Start Your Free Trial</a>
              </Button>
            </Card>
            <Card className="p-8 text-center border-2 border-beautiful-pink">
              <h3 className="text-2xl font-bold mb-2">Done-For-You AI Playbooks</h3>
              <p className="text-xl text-gray-700 mb-6">We set everything up, you get results—fast.</p>
              <ul className="text-gray-600 mb-8 space-y-2 text-left max-w-xs mx-auto">
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Custom AI Employee</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Automated Nurture & Followup</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Lead Capture Funnels</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Pipeline & ROI Setup</li>
                <li><CheckCircle className="inline-block h-5 w-5 text-beautiful-pink mr-2" />Team Training</li>
              </ul>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$2000</span>
                <span className="text-lg text-gray-600"> one-time</span>
              </div>
              <Button className="bg-beautiful-pink hover:bg-beautiful-pink/90 w-full text-lg" asChild>
                <a href="/book-demo">Book Strategy Call</a>
              </Button>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>All plans include live support, onboarding, and migration from your old system.</strong>
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-beautiful-pink text-beautiful-pink hover:bg-beautiful-pink hover:text-white" asChild>
              <a href="/compare">Compare Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center space-x-3">
            <img src="/beautifullogoblack.png" alt="Beautiful Systems" className="h-8 w-auto bg-white rounded px-1 py-1" />
            <span className="text-lg font-semibold">Beautiful Systems</span>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#solutions" className="hover:text-beautiful-pink">Solutions</a>
            <a href="#components" className="hover:text-beautiful-pink">Components</a>
            <a href="#pricing" className="hover:text-beautiful-pink">Pricing</a>
            <a href="/book-demo" className="hover:text-beautiful-pink">Book a Call</a>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Beautiful Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

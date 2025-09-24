import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ArrowRight, Calendar, MessageSquare, Star, Zap, Users, BarChart3, Phone, Mail, Globe, CheckCircle, Share2, CreditCard, MapPin, Target, ClipboardList, Rocket, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
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
            <div className="hidden md:flex items-center space-x-4">
              <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1">
                <a href="#platform" className="text-white">Solutions</a>
              </Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1">
                <a href="#components" className="text-white">Components</a>
              </Badge>
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1">
                <a href="#pricing" className="text-white">Pricing</a>
              </Badge>
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
      <section className="py-20 bg-gray-50">
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
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <Calendar className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book & Show AI</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Fill your calendar on autopilot.</p>
              <p className="text-gray-600 text-sm mb-6">
                Capture bookings on your site, chase and schedule by SMS or DM, confirm, remind, 
                and recover no-shows.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Website calendar widget</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Conversation AI through Webchat, SMS and Social DM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>AI booking workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Reminder ladder</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>No-show recovery and follow up</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>KPI dashboard</span>
                </div>
              </div>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/book-show-ai">Get Book & Show AI</a>
              </Button>
            </Card>
            
            <Card className="p-6">
              <Phone className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Never Missed</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Turn lost calls into customers.</p>
              <p className="text-gray-600 text-sm mb-6">
                Your AI receptionist picks up when you can't. It answers, routes, books, and 
                follows up by text—so you never lose revenue because of a missed call again.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Inbound Voice AI (answers calls, books directly)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Missed-call SMS fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Smart FAQ + routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Dashboard for call + SMS outcomes</span>
                </div>
              </div>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/never-missed">Enable Never Missed</a>
              </Button>
            </Card>
            
            <Card className="p-6">
              <Star className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review Rocket</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Collect more 5-stars and rank higher.</p>
              <p className="text-gray-600 text-sm mb-6">
                Request reviews automatically, route unhappy feedback privately to you, and 
                publish praise to Google and your site to rank higher.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>SMS & email requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Negative-feedback catcher</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Google profile connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Review carousel for your site</span>
                </div>
              </div>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/review-rocket">Launch Review Rocket</a>
              </Button>
            </Card>
            
            <Card className="p-6">
              <RotateCcw className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Reactivation</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Wake up dormant leads. Activate lost revenue.</p>
              <p className="text-gray-600 text-sm mb-6">
                Mine your old database for hidden sales by running automated win-back campaigns across 
                SMS and email.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Prebuilt win-back workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>SMS + email sequences</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>AI reply handler</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Reactivation dashboard</span>
                </div>
              </div>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/beautiful-reactivation">Launch Reactivation</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Beautiful CRM Platform */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Platform: Beautiful CRM</h2>
          <p className="text-xl text-gray-600 mb-8">Your all-in-one growth operating system.</p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            The hub where every lead, message, invoice, and campaign lives. All core solutions run on Beautiful CRM.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-beautiful-pink mb-12">
            One login. One dashboard. One growth engine.
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Unlimited contacts & users</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Websites, funnels, forms, and surveys</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Attribution dashboards that prove ROI</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Pipelines, tasks, and smart lists</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Payments, invoices, subscriptions, memberships</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Multi-location and team permissions</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">Unified inbox for SMS, email, chat, social, calls</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">AI workflows that build from plain-English prompts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-beautiful-pink mt-0.5" />
                <span className="text-gray-700">API and integrations</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-6">Starting at $197/mo</p>
            <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
              <a href="/beautiful-crm">
                Get Beautiful CRM
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Beautiful Components */}
      <section id="components" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beautiful Components</h2>
          <p className="text-xl text-gray-600 mb-16">Each stands alone and can be added any time.</p>
          
          <div className="text-center">
            <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
              <a href="/book-demo">
                See All Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ArrowRight, Calendar, MessageSquare, Star, Zap, Users, BarChart3, Phone, Mail, Globe, CheckCircle, Share2, CreditCard, MapPin, Target, ClipboardList, Rocket, RotateCcw, Inbox, DollarSign, Bot, TrendingUp, Building, Bullseye, FileText, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book & Show AI */}
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
            
            {/* Never Missed */}
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
            
            {/* Review Rocket */}
            <Card className="p-6">
              <Star className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review Rocket</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Collect more 5-stars and rank higher.</p>
              <p className="text-gray-600 text-sm mb-6">
                Request reviews automatically, route unhappy feedback privately to you, and 
                publish praise to Google and your site.
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
            
            {/* Beautiful Reactivation */}
            <Card className="p-6">
              <RotateCcw className="h-12 w-12 text-beautiful-pink mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Reactivation</h3>
              <p className="text-beautiful-pink font-semibold mb-4">Wake up dormant leads. Activate revenue.</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beautiful Components</h2>
            <p className="text-xl text-gray-600 mb-8">Each stands alone and can be added any time.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Row 1 */}
            <Card className="p-6 text-center">
              <Share2 className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Social</h3>
              <p className="text-gray-600 text-sm mb-4">Plan, post, reply, and report — with AI-generated content to keep your feed alive.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$147/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Launch Social</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <Globe className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Sites & Funnels</h3>
              <p className="text-gray-600 text-sm mb-4">Unlimited websites and funnels, with AI-assisted funnel builder.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$97/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Build My Site</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Automations</h3>
              <p className="text-gray-600 text-sm mb-4">AI builds workflows and sequences that run your business on repeat.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$147/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Automate Now</Button>
            </Card>
            
            {/* Row 2 */}
            <Card className="p-6 text-center">
              <Inbox className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Inbox</h3>
              <p className="text-gray-600 text-sm mb-4">AI-powered replies + one place for every SMS, email, chat, and DM.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$97/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Unify Inbox</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <CreditCard className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Payments</h3>
              <p className="text-gray-600 text-sm mb-4">AI reminders + failed payment recovery workflows. Get paid without chasing.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$97/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Get Paid Faster</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Webchat AI</h3>
              <p className="text-gray-600 text-sm mb-4">24/7 AI chat widget for your site. Captures leads, answers FAQs, books appointments instantly.</p>
              <p className="text-beautiful-pink font-bold text-lg mb-4">$147/mo</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" size="sm">Capture Leads</Button>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
              <a href="/components">
                Explore All Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & Playbooks */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Playbooks</h2>
            <p className="text-xl text-gray-600">Your business is always on. Your system should be too.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essentials */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-beautiful-pink mb-2">Essentials Playbook</h3>
              <p className="text-gray-600 mb-4">Plug the leaks. Start booking.</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">$397<span className="text-lg text-gray-600">/mo</span></div>
              <p className="text-gray-500 mb-6">Total Value: $1,500+/mo</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful CRM — custom pipelines & stages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Reactivation — wake dormant leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Automations — your playbooks on repeat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Book & Show AI — Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Listings — consistency everywhere</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6"><strong>Outcome:</strong> Calendar fills, reputation grows, no more missed money.</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90">Unlock Essentials</Button>
            </Card>
            
            {/* Growth - Most Popular */}
            <Card className="p-8 border-2 border-beautiful-pink relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-beautiful-pink text-white">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-beautiful-pink mb-2">Growth Playbook</h3>
              <p className="text-gray-600 mb-4">Stack momentum. Scale attention.</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">$897<span className="text-lg text-gray-600">/mo</span></div>
              <p className="text-gray-500 mb-6">Total Value: $3,000+/mo</p>
              <p className="text-gray-600 mb-4">Everything in Essentials, plus:</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Review Rocket — capture 5-stars on autopilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Never Missed — Voice (AI answers calls)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Social — plan, post, reply, report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Beautiful Payments — get paid without the chase</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6"><strong>Outcome:</strong> Leads captured, booked, paid, and tracked.</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90">Unlock Growth</Button>
            </Card>
            
            {/* Scale */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-beautiful-pink mb-2">Scale Playbook</h3>
              <p className="text-gray-600 mb-4">Done-For-You. Your growth engine, fully managed.</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">Custom Pricing</div>
              <p className="text-gray-500 mb-6">Total Value: $11,000+/mo</p>
              <p className="text-gray-600 mb-4">Everything in Growth, plus:</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>DFY Social Media Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>DFY Paid Ads (FB, IG, Google)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>DFY SEO — technical fixes & optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span>Monthly performance coaching</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6"><strong>Outcome:</strong> Agency-level execution. You run the business. We run the machine.</p>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/book-demo">Book a Strategy Call</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's map your growth engine.</h2>
          <p className="text-xl text-gray-600 mb-12">Bring your offer and a few numbers. We'll bring a practical plan.</p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-beautiful-pink rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Beautiful Demo/Discovery Call</h3>
                <p className="text-gray-600 text-sm">30 Mins</p>
              </div>
            </div>
            <Button size="lg" className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
              <a href="/book-demo">Book a Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

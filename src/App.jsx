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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
              <a href="#components" className="text-gray-600 hover:text-primary transition-colors">Components</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="/book-demo">Book a Strategy Call</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-primary border-primary font-semibold">
            Own the unfair advantage
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plug leaks. Fuel your pipeline.<br />
            <span className="text-primary">Meet your 24/7 AI Employee.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CRM, marketing, and operations in one system. Answer in seconds, follow up forever, prove ROI.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Beautiful Systems unifies conversations, bookings, payments, and reviews into one growth engine. 
            AI runs the grind, dashboards prove ROI, and your business runs on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
              <a href="/book-demo">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white" asChild>
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
              <Zap className="h-5 w-5 text-primary" />
              <span>First response in seconds</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Follow-up that never stops</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <BarChart3 className="h-5 w-5 text-primary" />
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
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conversation AI</h3>
              <p className="text-gray-600 text-sm">Chats on web, SMS, and social. Answers FAQs. Qualifies. Books the calendar.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Voice AI</h3>
              <p className="text-gray-600 text-sm">Answers calls, routes smartly, schedules, and logs details.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reviews AI</h3>
              <p className="text-gray-600 text-sm">Replies contextually, escalates issues, and grows 5-star proof.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Workflow AI</h3>
              <p className="text-gray-600 text-sm">Drafts emails and posts. Builds automations from plain-English prompts.</p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              <strong>Outcome:</strong> Faster response. Fewer no-shows. Higher show rates. Clear ROI.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/book-demo">
                See It in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Book & Show AI */}
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-grow">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Book & Show AI</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Fill your calendar on autopilot.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">
                  Capture bookings on your site, chase and schedule by SMS or DM, confirm, remind, and recover no-shows.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['Website calendar widget', 'Conversation AI through Webchat, SMS and Social DM', 'AI booking workflow', 'Reminder ladder', 'No-show recovery and follow up', 'KPI dashboard'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto" asChild>
                  <a href="/book-show-ai">Get Book & Show AI</a>
                </Button>
              </CardContent>
            </Card>

            {/* Never Missed */}
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-grow">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Never Missed</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Turn lost calls into customers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">
                  Your AI receptionist picks up when you can't. It answers, routes, books, and follows up by text—so you never lose revenue because of a missed call again.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['Inbound Voice AI (answers calls, books directly)', 'Missed-call SMS fallback', 'Smart FAQ + routing', 'Dashboard for call + SMS outcomes'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto" asChild>
                  <a href="/never-missed">Enable Never Missed</a>
                </Button>
              </CardContent>
            </Card>

            {/* Review Rocket */}
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-grow">
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Review Rocket</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Collect more 5-stars and rank higher.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">
                  Request reviews automatically, route unhappy feedback privately to you, and publish praise to Google and your site.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['SMS & email requests', 'Negative-feedback catcher', 'Google profile connection', 'Review carousel for your site'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto" asChild>
                  <a href="/review-rocket">Launch Review Rocket</a>
                </Button>
              </CardContent>
            </Card>

            {/* Beautiful Reactivation */}
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="flex-grow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Beautiful Reactivation</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Wake up dormant leads. Activate revenue.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">
                  Mine your old database for hidden sales by running automated win-back campaigns across SMS and email.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['Prebuilt win-back workflows', 'SMS + email sequences', 'AI reply handler', 'Reactivation dashboard'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto" asChild>
                  <a href="/beautiful-reactivation">Launch Reactivation</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beautiful CRM Platform */}
      <section id="platform" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Platform: Beautiful CRM
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Your all-in-one growth operating system.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              The hub where every lead, message, invoice, and campaign lives. All core solutions run on Beautiful CRM.
            </p>
            <h3 className="text-2xl font-bold text-primary mb-8">
              One login. One dashboard. One growth engine.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Unlimited contacts & users',
              'Pipelines, tasks, and smart lists',
              'Unified inbox for SMS, email, chat, social, calls',
              'Websites, funnels, forms, and surveys',
              'Payments, invoices, subscriptions, memberships',
              'AI workflows that build from plain-English prompts',
              'Attribution dashboards that prove ROI',
              'Multi-location and team permissions',
              'API and integrations'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-6">Starting at $197/mo</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/beautiful-crm">
                Get Beautiful CRM
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Beautiful Components */}
      <section id="components" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beautiful Components</h2>
            <p className="text-xl text-gray-600">Each stands alone and can be added any time.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Beautiful Social', desc: 'Plan, post, reply, and report — with AI-generated content to keep your feed alive.', cta: 'Launch Social', icon: 'Share2', price: '$147/mo' },
              { name: 'Beautiful Sites & Funnels', desc: 'Unlimited websites and funnels, with AI-assisted funnel builder.', cta: 'Build My Site', icon: 'Globe', price: '$97/mo' },
              { name: 'Beautiful Automations', desc: 'AI builds workflows and sequences that run your business on repeat.', cta: 'Automate Now', icon: 'Zap', price: '$147/mo' },
              { name: 'Beautiful Inbox', desc: 'AI-powered replies + one place for every SMS, email, chat, and DM.', cta: 'Unify Inbox', icon: 'Mail', price: '$97/mo' },
              { name: 'Beautiful Payments', desc: 'AI reminders + failed payment recovery workflows. Get paid without chasing.', cta: 'Get Paid Faster', icon: 'CreditCard', price: '$97/mo' },
              { name: 'Beautiful Webchat AI', desc: '24/7 AI chat widget for your site. Captures leads, answers FAQs, books appointments instantly.', cta: 'Capture Leads', icon: 'MessageCircle', price: '$147/mo' },
              { name: 'Beautiful Never Missed — Voice', desc: 'AI receptionist answers inbound calls, handles FAQs, routes, and books appointments — with SMS fallback.', cta: 'Answer Every Call', icon: 'Phone', price: '$297/mo' },
              { name: 'Beautiful Intelligence', desc: 'Attribution and ROI clarity powered by AI. Finally prove what works.', cta: 'Prove ROI', icon: 'BarChart3', price: '$197/mo' },
              { name: 'Beautiful Listings', desc: 'Consistency across 70+ directories — everywhere customers look.', cta: 'Sync Listings', icon: 'MapPin', price: '$97/mo' },
              { name: 'Beautiful Memberships', desc: 'Courses, communities, and client portals.', cta: 'Build Community', icon: 'Users', price: '$97/mo' },
              { name: 'Beautiful Ads Sync', desc: 'FB/IG/Google leads captured and followed up instantly with AI.', cta: 'Sync Ads', icon: 'Target', price: '$147/mo' },
              { name: 'Beautiful Forms & Surveys AI', desc: 'Smart forms, NPS/CSAT surveys, and instant AI qualification so every lead is followed up.', cta: 'Measure Satisfaction', icon: 'ClipboardList', price: '$97/mo' },
              { name: 'Beautiful Services', desc: 'Optimization calls, copy refresh, funnel/CRM audits.', cta: 'Get Expert Help', icon: 'Rocket', price: '$297/mo' },
              { name: 'Beautiful Reactivation', desc: 'Wake dormant leads. Automated win-back campaigns mine your database for hidden revenue.', cta: 'Reactivate Now', icon: 'RotateCcw', price: '$197/mo' }
            ].map((component, index) => {
              const iconMap = {
                'Share2': Share2,
                'Globe': Globe,
                'Zap': Zap,
                'Mail': Mail,
                'CreditCard': CreditCard,
                'MessageCircle': MessageSquare,
                'Phone': Phone,
                'BarChart3': BarChart3,
                'MapPin': MapPin,
                'Users': Users,
                'Target': Target,
                'ClipboardList': ClipboardList,
                'Rocket': Rocket,
                'RotateCcw': RotateCcw
              };
              const IconComponent = iconMap[component.icon];
              return (
                <Card 
                  key={component.name} 
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  {/* Magenta accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                  
                  <CardHeader className="pb-4 pt-8 px-8 flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <IconComponent className="w-8 h-8 text-gray-700 stroke-2" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {component.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed mt-2 mb-3">
                      {component.desc}
                    </CardDescription>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {component.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 mt-auto">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/95 hover:to-primary/70 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group/btn relative overflow-hidden"
                      size="lg"
                      asChild
                    >
                      <a href="/book-demo">
                        {/* Gradient sweep animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        
                        <span className="relative flex items-center justify-center">
                          {component.cta}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/95 hover:to-primary/70 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden group"
              asChild
            >
              <a href="/book-demo">
                {/* Gradient sweep animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative flex items-center">
                  Explore All Components
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Playbooks</h2>
            <p className="text-xl text-gray-600">Your business is always on. Your system should be too.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essentials Playbook */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-2">Essentials Playbook</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4">Plug the leaks. Start booking.</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mb-2">$397/mo</div>
                <p className="text-gray-600 mb-6">Total Value: $1,500+/mo</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'Beautiful CRM — custom pipelines & stages',
                    'Beautiful Reactivation — wake dormant leads',
                    'Beautiful Automations — your playbooks on repeat',
                    'Beautiful Book & Show AI — Pro',
                    'Beautiful Listings — consistency everywhere',
                    'Beautiful Never Missed — Text',
                    'Beautiful Forms & Chat + Inbox Lite'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Outcome:</strong> Calendar fills, reputation grows, no more missed money.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Unlock Essentials
                </Button>
              </CardContent>
            </Card>

            {/* Growth Playbook */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-2">Growth Playbook</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4">Stack momentum. Scale attention.</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mb-2">$897/mo</div>
                <p className="text-gray-600 mb-6">Total Value: $3,000+/mo</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-sm text-gray-600 mb-4">Everything in Essentials, plus:</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'Beautiful Review Rocket — capture 5-stars on autopilot',
                    'Beautiful Never Missed — Voice (AI answers calls)',
                    'Beautiful Social — plan, post, reply, report',
                    'Beautiful Payments — get paid without the chase',
                    'Beautiful Ads Sync + Intelligence — ROI proof',
                    'Beautiful Sites & Funnels — websites that convert'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Outcome:</strong> Leads captured, booked, paid, and tracked.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Unlock Growth
                </Button>
              </CardContent>
            </Card>

            {/* Scale Playbook */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-2">Scale Playbook</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4">Done-For-You. Your growth engine, fully managed.</CardDescription>
                <div className="text-2xl font-bold text-gray-900 mb-2">Custom Pricing</div>
                <p className="text-gray-600 mb-6">Total Value: $11,000+/mo</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-sm text-gray-600 mb-4">Everything in Growth, plus:</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'DFY Social Media Management',
                    'DFY Paid Ads (FB, IG, Google)',
                    'DFY SEO — technical fixes & optimization',
                    'Monthly performance coaching',
                    'Quarterly funnel and CRM audits',
                    'Full-service funnel builds',
                    'Dedicated success manager'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Outcome:</strong> Agency-level execution. You run the business. We run the machine.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Book a Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Tables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Value Comparison</h2>
            <p className="text-xl text-gray-600">See how Beautiful Systems compares to buying tools separately</p>
          </div>
          
          {/* Essentials Comparison Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Essentials Playbook Value</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary">Beautiful Essentials</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">CRM (unlimited users)</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$350+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Missed call text-back</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$100+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Listings consistency</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$200+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Automations</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$50+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Database reactivation</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$500+/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Forms & chat widget</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">$100+/mo</td>
                  </tr>
                  <tr className="bg-primary text-white font-bold">
                    <td className="py-4 px-6">Total Value</td>
                    <td className="text-center py-4 px-6">$397/mo</td>
                    <td className="text-center py-4 px-6">$1,300+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Growth Comparison Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Growth Playbook Value</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary">Beautiful Growth Playbook</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Frankenstack (Typical Tools)</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Cost If Bought Alone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Everything in Essentials</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-500">—</td>
                    <td className="text-center py-4 px-6 text-gray-700">$1,500+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Review automation</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Birdeye / Podium</td>
                    <td className="text-center py-4 px-6 text-gray-700">$300+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">AI call answering</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Ruby Receptionist</td>
                    <td className="text-center py-4 px-6 text-gray-700">$500+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Social scheduling</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Hootsuite / Buffer</td>
                    <td className="text-center py-4 px-6 text-gray-700">$99+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Payments & invoicing</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">QuickBooks + Stripe + add-ons</td>
                    <td className="text-center py-4 px-6 text-gray-700">$200+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Ads lead sync + ROI attribution</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">LeadsBridge + Attribution tool</td>
                    <td className="text-center py-4 px-6 text-gray-700">$300+/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Funnel/website builder</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">ClickFunnels</td>
                    <td className="text-center py-4 px-6 text-gray-700">$97+/mo</td>
                  </tr>
                  <tr className="bg-primary text-white font-bold">
                    <td className="py-4 px-6">Total Value: $3,000+/mo</td>
                    <td className="text-center py-4 px-6">Your Investment: $897/mo</td>
                    <td className="text-center py-4 px-6">Multiple vendors</td>
                    <td className="text-center py-4 px-6">$2,996+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Scale Comparison Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Scale Playbook Value</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary">Beautiful Scale Playbook (DFY)</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Frankenstack (Tools + Agencies)</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Cost If Bought Alone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Everything in Growth</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-500">—</td>
                    <td className="text-center py-4 px-6 text-gray-700">$3,000+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Social media management (DFY)</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Social agency</td>
                    <td className="text-center py-4 px-6 text-gray-700">$1,500–$3,000/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Paid ads management (DFY)</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Media agency</td>
                    <td className="text-center py-4 px-6 text-gray-700">$2,000–$5,000/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">SEO management (DFY)</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">SEO agency</td>
                    <td className="text-center py-4 px-6 text-gray-700">$1,000–$2,500/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Coaching + strategy</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Marketing coach</td>
                    <td className="text-center py-4 px-6 text-gray-700">$1,000+/mo</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">DFY funnels & campaign builds</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Freelancer/agency</td>
                    <td className="text-center py-4 px-6 text-gray-700">$2,000+/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Dedicated success manager</td>
                    <td className="text-center py-4 px-6"><span className="text-green-600 text-xl">✓</span></td>
                    <td className="text-center py-4 px-6 text-gray-700">Staff hire</td>
                    <td className="text-center py-4 px-6 text-gray-700">$4,000+/mo</td>
                  </tr>
                  <tr className="bg-primary text-white font-bold">
                    <td className="py-4 px-6">Total Value</td>
                    <td className="text-center py-4 px-6">Custom Pricing</td>
                    <td className="text-center py-4 px-6">Multiple vendors</td>
                    <td className="text-center py-4 px-6">$14,500+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

           {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's map your growth engine.</h2>
          <p className="text-xl text-gray-700 mb-12">Bring your offer and a few numbers. We'll bring a practical plan.</p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
            <iframe 
              src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px', height: '800px'}} 
              scrolling="no" 
              id="lHrJjJEhCPY2Atu8hj01_1758029670659"
              className="rounded-xl w-full"
              title="Book a Strategy Call"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/beautifullogoblack.png" alt="Beautiful Systems" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">CRM, marketing, and operations in one system.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/book-show-ai" className="hover:text-white transition-colors">Book & Show AI</a></li>
                <li><a href="/never-missed" className="hover:text-white transition-colors">Never Missed</a></li>
                <li><a href="/review-rocket" className="hover:text-white transition-colors">Review Rocket</a></li>
                <li><a href="/beautiful-reactivation" className="hover:text-white transition-colors">Beautiful Reactivation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/beautiful-crm" className="hover:text-white transition-colors">Beautiful CRM</a></li>
                <li><a href="#components" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="/book-demo" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>By submitting, you consent to receive communications. Messaging and call rates may apply.</p>
            <p className="mt-2">© Beautiful Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Booking Calendar Script */}
      <script src="https://links.beautifulcrm.com/js/form_embed.js" type="text/javascript"></script>
    </div>
  );
}

export default App;


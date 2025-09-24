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
              <a href="/ai-employee" className="text-gray-600 hover:text-primary transition-colors">AI Employee</a>
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

      {/* Core Solutions Section */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">Everything you need to grow your business, all in one platform.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center card-hover">
              <MessageSquare className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Book & Show AI</h3>
              <p className="text-gray-600 text-sm mb-4">Smart booking with automated reminders and no-show recovery.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/book-show-ai">Learn More</a>
              </Button>
            </Card>
            
            <Card className="p-6 text-center card-hover">
              <Phone className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Never Missed</h3>
              <p className="text-gray-600 text-sm mb-4">Instant text-back for every missed call. Never lose a lead again.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/never-missed">Learn More</a>
              </Button>
            </Card>
            
            <Card className="p-6 text-center card-hover">
              <Star className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Review Rocket</h3>
              <p className="text-gray-600 text-sm mb-4">Automated review requests that build your reputation safely.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/review-rocket">Learn More</a>
              </Button>
            </Card>
            
            <Card className="p-6 text-center card-hover">
              <RotateCcw className="h-12 w-12 text-beautiful-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beautiful Reactivation</h3>
              <p className="text-gray-600 text-sm mb-4">Win back lost customers with intelligent reactivation campaigns.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/beautiful-reactivation">Learn More</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Beautiful CRM Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beautiful CRM</h2>
              <p className="text-xl text-gray-600 mb-8">
                The only CRM built for growth. Unified inbox, smart pipelines, and dashboards that actually help you make decisions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-beautiful-pink" />
                  <span className="text-gray-700">Unified inbox for all conversations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-beautiful-pink" />
                  <span className="text-gray-700">Smart pipelines that move deals forward</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-beautiful-pink" />
                  <span className="text-gray-700">Dashboards that prove ROI</span>
                </div>
              </div>
              <Button size="lg" className="bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/beautiful-crm">
                  Explore Beautiful CRM
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-beautiful-pink/20 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business. No hidden fees, no surprises.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-beautiful-pink mb-6">$97<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">AI Employee (basic)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Never Missed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Basic CRM</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="/book-demo">Get Started</a>
              </Button>
            </Card>
            
            <Card className="p-8 text-center border-beautiful-pink border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-beautiful-pink text-white">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-beautiful-pink mb-6">$297<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Full AI Employee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">All core solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Beautiful CRM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
              </ul>
              <Button className="w-full bg-beautiful-pink hover:bg-beautiful-pink/90" asChild>
                <a href="/book-demo">Get Started</a>
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-beautiful-pink mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Everything included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-beautiful-pink" />
                  <span className="text-gray-700">White-label options</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

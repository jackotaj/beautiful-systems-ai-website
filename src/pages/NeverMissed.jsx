import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, Phone, MessageSquare, Calendar, Database, Clock, TrendingUp, DollarSign, CheckCircle, Users, Settings, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const NeverMissed = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-primary border-primary font-semibold">
              Answer every call. Book every lead.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Never Missed AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every missed call is money walking out. Your AI receptionist picks up when you cannot. It answers, routes, books, and texts back in seconds. Voicemail tag ends. Revenue stays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Enable Never Missed AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">Hear a Sample Call</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What happens on every call Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What happens on every call
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your AI receptionist handles every interaction with precision and intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Caller is greeted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Simple questions answered. Complex questions routed.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Booking is set</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    When booking is the goal, the slot is set on your calendar in real time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Missed call rescue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    When a call is missed, instant text goes out with a booking link and follow up ladder.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Everything logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Calls, texts, transcripts, and outcomes land in Beautiful CRM.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Enable Never Missed AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What you get Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What you get
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to turn every call into revenue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Inbound Voice AI</h3>
                  <p className="text-gray-600">that answers and books</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart routing and warm transfer</h3>
                  <p className="text-gray-600">to the right person</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Missed-call text</h3>
                  <p className="text-gray-600">with a booking link that follows up politely</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business hours, holidays, and overflow rules</h3>
                  <p className="text-gray-600">you control</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call recordings and transcripts</h3>
                  <p className="text-gray-600">tied to each contact</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dashboard</h3>
                  <p className="text-gray-600">for answer rate, bookings, rescued revenue, and ROI</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">See the Dashboard</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why it prints money Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why it prints money
              </h2>
              <p className="text-xl text-gray-600">
                Every interaction is optimized for conversion and revenue recovery.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Calls get answered in seconds. <strong className="text-primary">The hot lead stays hot.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Booking happens on the call. <strong className="text-primary">No "we'll call you back."</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Missed calls trigger a text. <strong className="text-primary">The lead books themselves.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Your team stops chasing and starts closing. <strong className="text-primary">Focus on high-value work.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    You see the lift in a clean dashboard. <strong className="text-primary">ROI is crystal clear.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-xl mt-12 text-center border border-primary/20">
              <p className="text-xl font-semibold text-gray-900">
                Faster answer time. Higher booking rates. Zero voicemail tag.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">Hear a Sample Call</a>
              </Button>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How it works in your business
              </h2>
              <p className="text-xl text-gray-600">
                Get up and running in four simple steps.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect your number</h3>
                  <p className="text-gray-600 text-lg">
                    Pick your main line or a tracking line. Set hours. Approve your greeting and FAQ.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Set booking rules</h3>
                  <p className="text-gray-600 text-lg">
                    Choose calendars, buffers, deposits if needed, and who gets what with round robin or priority.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Turn on rescue</h3>
                  <p className="text-gray-600 text-lg">
                    Missed-call text with booking link. Choose timing for follow up nudges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Go live</h3>
                  <p className="text-gray-600 text-lg">
                    AI answers. Books. Routes. Everything logs to Beautiful CRM. You watch the bookings roll in.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Enable Never Missed AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* The numbers that matter Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The numbers that matter
              </h2>
              <p className="text-xl text-gray-600">
                Track the metrics that directly impact your revenue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Answer time</h3>
                <p className="text-gray-600">under five seconds</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Booked from calls</h3>
                <p className="text-gray-600">real-time on calendar</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Missed-to-booked</h3>
                <p className="text-gray-600">percentage of rescued calls</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Show rate</h3>
                <p className="text-gray-600">before and after reminders</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue from AI-handled calls</h3>
                <p className="text-gray-600">tracked to the dollar</p>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">See the Dashboard</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Who this is for Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who this is for</h2>
                <p className="text-gray-600 text-lg">
                  Appointment-based services. Clinics and practices. Home services. Contractors. Legal. Finance. Coaching and programs. Any team tired of voicemail tag.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who this is not for</h2>
                <p className="text-gray-600 text-lg">
                  Teams that prefer to gamble with missed calls and slow callbacks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why not an answering service Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why not an answering service
              </h2>
              <p className="text-xl text-gray-600">
                Traditional services take messages. Never Missed books revenue.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-lg text-gray-600">Services take messages</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary mx-6" />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-primary">Never Missed books appointments</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-lg text-gray-600">Services cost more as volume climbs</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary mx-6" />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-primary">You pay a flat platform fee plus usage</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-lg text-gray-600">Services cannot run your automations</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary mx-6" />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-primary">We trigger reminders, tasks, and pipeline moves automatically</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">Hear a Sample Call</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Price</h2>
            
            <Card className="max-w-md mx-auto mb-8 border-primary shadow-lg">
              <CardHeader className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">$297</div>
                <div className="text-xl text-gray-600 mb-4">per month</div>
                <Badge variant="outline" className="text-primary border-primary">Cancel anytime</Badge>
              </CardHeader>
            </Card>
            
            <p className="text-gray-600 mb-8">
              Messaging and telephony usage is billed at carrier rates. A2P registration and compliance handled during onboarding.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
              <a href="/book-demo">
                Enable Never Missed
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Bonuses when you start today
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry greeting and FAQ pack</h3>
                <p className="text-gray-600">so you launch fast</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missed-call rescue scripts</h3>
                <p className="text-gray-600">tested to convert politely</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">After-hours playbook</h3>
                <p className="text-gray-600">that books for tomorrow without waking your team</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manager alerts</h3>
                <p className="text-gray-600">for VIP callers and hot opportunities</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Get Never Missed AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">FAQ</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I use my current phone number?</h3>
                <p className="text-gray-600">Yes. Port it or forward to your AI line.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Will callers know it is AI?</h3>
                <p className="text-gray-600">It sounds natural and stays on script. Complex issues escalate to a human.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What calendars are supported?</h3>
                <p className="text-gray-600">Native calendars with two-way sync, buffers, and round robin.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can it route to my team?</h3>
                <p className="text-gray-600">Yes. Warm transfer, departments, and overflow rules.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What about compliance and recording?</h3>
                <p className="text-gray-600">We provide consent prompts and settings. You control recording by state or region.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Does this replace a receptionist?</h3>
                <p className="text-gray-600">No. It catches what humans miss and handles after-hours. Your staff focus on high-value work.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I see transcripts?</h3>
                <p className="text-gray-600">Yes. Every call and text is stored on the contact record in Beautiful CRM.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if a caller prefers text?</h3>
                <p className="text-gray-600">The AI can switch to SMS and finish the booking there.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Final word</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Every missed call is a silent leak. <strong>Never Missed AI</strong> plugs it with an AI receptionist that answers, books, and rescues lost revenue. You stop apologizing for voicemail. You start counting booked jobs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Enable Never Missed AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <a href="/book-demo">Hear a Sample Call</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NeverMissed;


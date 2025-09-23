import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, Calendar, MessageCircle, Clock, Target, CheckCircle, Zap, Users, BarChart3, Phone, Star, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const BookShowAI = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-primary border-primary font-semibold">
              Stop leaking appointments
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Book & Show AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Deploy an AI employee that answers instantly, handles the back and forth, and keeps pushing until a time is on your calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Activate Book & Show AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">See Live Demo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What it does Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What it does so you don't have to
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your AI employee handles every step of the booking process with precision and persistence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Answers in seconds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    On your site's AI webchat, SMS, and DMs. Qualifies, handles FAQs, and books inside the conversation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Chases politely until booked</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Smart follow up across SMS and email until a time is locked in.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Locks the slot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Two-way calendar sync, buffers, round robin, and team routing.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Prevents no-shows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Confirmations and timed reminders. If they cancel, it reschedules.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Recovers lost revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Rebooks no-shows or requests a deposit when it makes sense.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Runs your playbooks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tags contacts. Moves deals. Sets tasks. Alerts your team the moment a booking hits.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Activate Book & Show AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why it prints money Section */}
        <section className="py-20 bg-white">
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
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Lead shows up. <strong className="text-primary">AI greets, answers, and books.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Lead hesitates. <strong className="text-primary">AI follows up until a time is set.</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Before the appointment, <strong className="text-primary">reminders fire.</strong> If they cancel, AI reschedules.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    If they ghost, <strong className="text-primary">recovery kicks in.</strong> You keep the slot or the deposit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-primary">Every touch logs in Beautiful CRM.</strong> Your ROI is visible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-xl mt-12 text-center border border-primary/20">
              <p className="text-xl font-semibold text-gray-900">
                Faster first response. Higher show rates. Fewer no-shows.
              </p>
            </div>
          </div>
        </section>

        {/* What you get Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What you get
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to turn visitors into booked appointments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Website calendar widget</h3>
                  <p className="text-gray-600">and embeddable booking links</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI webchat</h3>
                  <p className="text-gray-600">that books while leads are hot</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Follow up ladder</h3>
                  <p className="text-gray-600">for "not now" and ghosted leads</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Two-way sync</h3>
                  <p className="text-gray-600">with buffers and rules</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">No-show recovery</h3>
                  <p className="text-gray-600">that rebooks or collects a fee</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Workflow automations</h3>
                  <p className="text-gray-600">wired to your pipelines and stages</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm md:col-span-2">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">KPI dashboard</h3>
                  <p className="text-gray-600">for bookings, show rate, no-show rate, and revenue</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3" asChild>
                <a href="/book-demo">See Live Demo</a>
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
                Activate Book & Show AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Final word</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Empty slots cost you real money. <strong>Book & Show AI</strong> fills them. It answers fast, follows up without getting tired, and handles all the grunt work that humans forget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Activate Book & Show AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <a href="/book-demo">See Live Demo</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookShowAI;


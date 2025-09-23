import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, MessageSquare, Phone, Star, Zap, Users, CheckCircle, Clock, Target, Shield, BarChart3, Settings } from 'lucide-react';

export default function AIEmployee() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 text-lg px-6 py-2 text-primary border-primary font-semibold">
              Always on. Always polite. Always moving the next step.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The AI Employee
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Humans forget. We get distracted and lose customers. Your <strong>AI Employee</strong> answers in seconds across chat, text, DMs, and phone, then pushes the conversation to a booked time, a paid invoice, a posted review, or a closed ticket.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              It never gets tired. It never says "circle back."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Activate My AI Employee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="/book-demo">Book My Demo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* The Big Promise */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The big promise</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Turn inquiries into appointments and tasks into outcomes. Faster response. Fewer no-shows. Higher show rates. Clear ROI on one screen.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-gray-900">
                If your pipeline depends on memory, you are gambling. The house always wins.
              </p>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What it is</h2>
              <p className="text-xl text-gray-600">A set of purpose-built AIs working together inside Beautiful CRM:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Conversation AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Answers on your site's webchat, by SMS, and in social DMs. Handles FAQs. Qualifies. Books the calendar inside the chat.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Voice AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Answers inbound calls, routes to the right person, books live on your calendar, and texts back if a call is missed.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Reviews AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sends review requests at the right moments and drafts human replies you can approve in seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Workflow AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Drafts emails and posts. Builds automations from plain-English prompts. Triggers tasks and pipeline moves without hand-holding.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/book-demo">
                  See It in Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works in the wild</h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Lead appears</h3>
                <p className="text-sm text-gray-600">The AI greets, answers, and gets the booking.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Lead hesitates</h3>
                <p className="text-sm text-gray-600">Follow up across SMS and email keeps nudging until a time is set.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Before appointment</h3>
                <p className="text-sm text-gray-600">Confirmations and reminders cut no-shows. If they cancel, the AI reschedules.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">After the job</h3>
                <p className="text-sm text-gray-600">Review requests fire. Good feedback becomes public proof. Issues route privately.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold text-gray-900 mb-2">Back in CRM</h3>
                <p className="text-sm text-gray-600">Every touch logs to the contact. Pipelines move. Tasks get assigned. Dashboards show the money.</p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/book-demo">
                  Activate My AI Employee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Controls You Set */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Controls you set</h2>
              <p className="text-xl text-gray-600 mb-8">This is not a loose cannon. It is a trained employee with clear rules.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                'Approved scripts, FAQs, and tone of voice',
                'Hours, quiet times, and escalation rules',
                'Calendars, buffers, and round robin logic',
                'Deposit, reschedule, and no-show policies',
                'What the AI can do alone and when to hand off'
              ].map((control, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Settings className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{control}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What you get</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, text: 'Instant answers on chat, SMS, DMs, and phone' },
                { icon: Target, text: 'Booking in the conversation, not after a chase' },
                { icon: Users, text: 'Persistent follow up until booked or closed' },
                { icon: Shield, text: 'No-show prevention and recovery flows' },
                { icon: Star, text: 'Review capture and on-brand replies' },
                { icon: Zap, text: 'Workflow automation that moves deals and assigns tasks' },
                { icon: BarChart3, text: 'Attribution dashboards that tie channels to revenue' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/book-demo">
                  Book My Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why It Prints Money */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why it prints money</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Speed wins deals</h3>
                <p className="text-gray-600 text-sm">Seconds beat minutes.</p>
              </Card>
              
              <Card className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Consistency compounds</h3>
                <p className="text-gray-600 text-sm">Follow up never "slips."</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Recovery saves revenue</h3>
                <p className="text-gray-600 text-sm">Reschedules and deposits keep the calendar profitable.</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Proof converts</h3>
                <p className="text-gray-600 text-sm">Reviews boost rank and trust without more ad spend.</p>
              </Card>
              
              <Card className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Attribution ends arguments</h3>
                <p className="text-gray-600 text-sm">You see what works, then fund it.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common questions</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Will callers know it is AI?</h3>
                <p className="text-gray-600">It sounds natural and stays on script. Complex issues escalate to a human fast.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Can it use our exact process?</h3>
                <p className="text-gray-600">Yes. Pipelines and stages match how you sell. The AI triggers your rules.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Do I lose control?</h3>
                <p className="text-gray-600">No. You approve its personality, set guardrails, and review transcripts and logs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What if we are low volume?</h3>
                <p className="text-gray-600">The AI still answers instantly, which means you stop losing the few you have.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What about costs?</h3>
                <p className="text-gray-600">Platform fees are fixed. Messaging and voice usage are pass-through at carrier rates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Does this replace staff?</h3>
                <p className="text-gray-600">It handles the grind so your people focus on work that pays.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Word */}
        <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Final word</h2>
            <p className="text-xl text-gray-700 mb-12">
              You can keep patching leaks with more apps and reminders. Or you can hire an <strong>AI Employee</strong> that shows up every second, runs the playbook, and proves the result on one dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
                <a href="/book-demo">
                  Activate My AI Employee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="/book-demo">Book My Demo</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Check, ChevronDown, TrendingUp } from "lucide-react"

const Pricing = () => {
  return (
    <main className=" max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#121417] mb-4">Choose the plan that's right for you</h1>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {/* Free Plan */}
          <Card className="bg-[#f2f2f5] border-[#dee0e3] relative">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold text-[#121417]">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#121417]">$0</span>
                <span className="text-[#6b7582]">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-[#e5e8eb] text-[#121417] hover:bg-[#dee0e3]">Get Started</Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">100 scans per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Basic detection accuracy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Community support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-[#f2f2f5] border-[#dee0e3] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#dbe8f2] text-[#121417] px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
            </div>
            <CardHeader className="pb-4 pt-8">
              <h3 className="text-xl font-semibold text-[#121417]">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#121417]">$99</span>
                <span className="text-[#6b7582]">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-[#e5e8eb] text-[#121417] hover:bg-[#dee0e3]">Choose Plan</Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Unlimited scans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Advanced detection accuracy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">API access</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-[#f2f2f5] border-[#dee0e3] relative">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold text-[#121417]">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#121417]">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-[#e5e8eb] text-[#121417] hover:bg-[#dee0e3]">Contact Sales</Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Custom scan limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Highest detection accuracy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#121417]" />
                  <span className="text-[#121417]">Custom integrations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#121417] mb-8">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-[#f2f2f5] rounded-lg border border-[#dee0e3] hover:bg-[#e5e8eb] transition-colors">
                <span className="text-left font-medium text-[#121417]">
                  What is the difference between the Pro and Enterprise plans?
                </span>
                <ChevronDown className="w-5 h-5 text-[#6b7582]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 bg-[#f2f2f5] rounded-b-lg border-x border-b border-[#dee0e3]">
                <p className="text-[#6b7582] leading-relaxed">
                  The Pro plan offers unlimited scans with advanced detection accuracy and priority support, while the
                  Enterprise plan provides custom scan limits, the highest detection accuracy, dedicated support, and
                  custom integrations tailored to your specific needs.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-[#f2f2f5] rounded-lg border border-[#dee0e3] hover:bg-[#e5e8eb] transition-colors">
                <span className="text-left font-medium text-[#121417]">
                  Can I upgrade or downgrade my plan at any time?
                </span>
                <ChevronDown className="w-5 h-5 text-[#6b7582]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 bg-[#f2f2f5] rounded-b-lg border-x border-b border-[#dee0e3]">
                <p className="text-[#6b7582] leading-relaxed">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-[#f2f2f5] rounded-lg border border-[#dee0e3] hover:bg-[#e5e8eb] transition-colors">
                <span className="text-left font-medium text-[#121417]">What payment methods do you accept?</span>
                <ChevronDown className="w-5 h-5 text-[#6b7582]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 bg-[#f2f2f5] rounded-b-lg border-x border-b border-[#dee0e3]">
                <p className="text-[#6b7582] leading-relaxed">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#dbe8f2] text-[#121417] hover:bg-[#dbe8f2]/80">Contact Sales</Button>
          </div>
        </div>
      </main>
  )
}

export default Pricing

import React from 'react'
import { Button } from "@/components/ui/button";
const Whyus = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-[#121417] mb-6">Why Choose Veritas?</h1>
          <p className="text-[#61758a] text-lg leading-relaxed">
            In a world where digital deception is increasingly sophisticated, choosing the right partner for deepfake
            and document forgery detection is crucial. Veritas stands out as the premier choice, offering unparalleled
            accuracy, advanced technology, and a commitment to your security and satisfaction. Here's why you should
            trust Veritas with your verification needs.
          </p>
        </section>

        {/* Features Sections */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#121417] mb-4">Unmatched Accuracy and Advanced Technology</h2>
            <p className="text-[#61758a] leading-relaxed">
              Veritas employs cutting-edge artificial intelligence and machine learning algorithms to analyze documents
              and media with exceptional precision. Our technology is constantly updated to stay ahead of evolving
              forgery techniques, ensuring that you receive the most reliable and accurate results. We go beyond basic
              checks, providing in-depth analysis that identifies even the most subtle manipulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121417] mb-4">User-Friendly Interface</h2>
            <p className="text-[#61758a] leading-relaxed">
              Our platform is designed for ease of use, allowing you to quickly and efficiently upload and analyze
              documents or media. Whether you're a seasoned professional or new to verification services, Veritas offers
              an intuitive experience that simplifies the process without compromising on functionality. Get results in
              minutes with our streamlined interface.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121417] mb-4">Robust Data Security</h2>
            <p className="text-[#61758a] leading-relaxed">
              We understand the sensitive nature of the documents and media you entrust to us. Veritas employs
              state-of-the-art security measures to protect your data, ensuring confidentiality and compliance with
              industry standards. Your information is safe with us, allowing you to focus on the insights, not the
              security concerns.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121417] mb-4">Dedicated Customer Support</h2>
            <p className="text-[#61758a] leading-relaxed">
              At Veritas, we believe in providing exceptional customer support. Our team of experts is available to
              assist you with any questions or concerns, ensuring a smooth and satisfactory experience. We're committed
              to your success and are here to support you every step of the way.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#121417] mb-8">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="text-[#61758a] leading-relaxed">
              "Veritas has been instrumental in streamlining our verification processes. The accuracy and speed of their
              analysis have saved us countless hours and provided peace of mind." - Sarah Chen, Legal Firm Partner
            </blockquote>
            <blockquote className="text-[#61758a] leading-relaxed">
              "The user-friendly interface made it easy for our team to adopt Veritas quickly. The support team is
              responsive and helpful, making the entire experience seamless." - David Lee, Financial Analyst
            </blockquote>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button className="bg-[#0a80ed] hover:bg-[#0a80ed]/90 text-white px-8 py-3 text-lg">Get Started</Button>
        </div>
      </main>

    </div>
  )
}

export default Whyus

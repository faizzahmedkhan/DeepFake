import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#0f1417" }}>
              Contact Us
            </h1>
            <p className="text-lg" style={{ color: "#5c738a" }}>
              We're here to help. Reach out to us with any questions or feedback.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#0f1417" }}>
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border-0 text-sm"
                style={{
                  backgroundColor: "#e5e8eb",
                  color: "#5c738a",
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#0f1417" }}>
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border-0 text-sm"
                style={{
                  backgroundColor: "#e5e8eb",
                  color: "#5c738a",
                }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#0f1417" }}>
                Message
              </label>
              <Textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-0 text-sm resize-none"
                style={{
                  backgroundColor: "#e5e8eb",
                  color: "#5c738a",
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-sm font-medium text-white rounded-lg"
              style={{ backgroundColor: "#4080bf" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Contact
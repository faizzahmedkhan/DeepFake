"use client"
import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    })
    const [errors, setErrors] = useState({
      email: "",
      password: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
  
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!email) {
        return "Email is required"
      }
      if (!emailRegex.test(email)) {
        return "Please enter a valid email address"
      }
      return ""
    }
  
    const validatePassword = (password: string) => {
      if (!password) {
        return "Password is required"
      }
      if (password.length < 8) {
        return "Password must be at least 8 characters long"
      }
      return ""
    }
  
    const handleInputChange = (field: "email" | "password", value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
  
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }))
      }
    }
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
  
      // Validate all fields
      const emailError = validateEmail(formData.email)
      const passwordError = validatePassword(formData.password)
  
      setErrors({
        email: emailError,
        password: passwordError,
      })
  
      // If there are errors, don't submit
      if (emailError || passwordError) {
        return
      }
  
      setIsSubmitting(true)
  
      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Form submitted:", formData)
        // Handle successful submission here
      } catch (error) {
        console.error("Submission error:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  return (
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#0f1417] mb-8">Sign in to DeepDetect</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#0f1417] font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border rounded-lg bg-[#ffffff] text-[#0f1417] placeholder:text-[#5c738a] focus:ring-1 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#e5e8eb] focus:border-[#4080bf] focus:ring-[#4080bf]"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#0f1417] font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 border rounded-lg bg-[#ffffff] text-[#0f1417] placeholder:text-[#5c738a] focus:ring-1 ${
                  errors.password
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#e5e8eb] focus:border-[#4080bf] focus:ring-[#4080bf]"
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4080bf] hover:bg-[#4080bf]/90 disabled:bg-[#4080bf]/50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="text-center">
            <p className="text-[#5c738a] text-sm">Or sign in with</p>
          </div>

          {/* Google Sign In */}
          <Button
            variant="outline"
            disabled={isSubmitting}
            className="w-full bg-[#ffffff] text-[#0f1417] border border-[#e5e8eb] hover:bg-[#ebedf2] disabled:bg-[#ebedf2]/50 disabled:cursor-not-allowed py-3 rounded-lg font-medium"
          >
            Sign Up with Google
          </Button>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-[#5c738a] text-sm">
              {"Don't have an account? "}
              <Link href="/signup" className="text-[#4080bf] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
  )
}

export default Login





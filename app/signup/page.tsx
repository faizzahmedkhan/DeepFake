"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState, type FormEvent } from "react"

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    } else if (!/(?=.[a-zA-Z])(?=.\d)/.test(formData.password)) {
      newErrors.password = "Password must contain at least one letter and one number"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validateForm()) {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      // Handle successful submission here
    }

    setIsSubmitting(false)
  }

  return (
      <main className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold" style={{ color: "#0f1417" }}>
              Sign up for DeepDetect
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium" style={{ color: "#0f1417" }}>
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-0 text-sm ${errors.name ? "ring-2 ring-red-500" : ""}`}
                style={{
                  backgroundColor: "#ebedf2",
                  color: "#0f1417",
                }}
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#0f1417" }}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-0 text-sm ${errors.email ? "ring-2 ring-red-500" : ""}`}
                style={{
                  backgroundColor: "#ebedf2",
                  color: "#0f1417",
                }}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium" style={{ color: "#0f1417" }}>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-0 text-sm ${
                  errors.password ? "ring-2 ring-red-500" : ""
                }`}
                style={{
                  backgroundColor: "#ebedf2",
                  color: "#0f1417",
                }}
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white rounded-lg font-medium text-sm disabled:opacity-50"
              style={{ backgroundColor: "#4080bf" }}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>

          <div className="text-center">
            <span className="text-sm" style={{ color: "#5c738a" }}>
              Or
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full py-3 rounded-lg font-medium text-sm bg-white"
            style={{
              borderColor: "#e5e8eb",
              color: "#0f1417",
            }}
          >
            Sign Up with Google
          </Button>

          <div className="text-center">
            <span className="text-sm" style={{ color: "#5c738a" }}>
              Already have an account?{" "}
              <Link href="/login" className="hover:opacity-80" style={{ color: "#5c738a" }}>
                Log In
              </Link>
            </span>
          </div>
        </div>
      </main>
  )
}

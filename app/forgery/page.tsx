"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, BarChart3, Twitter, HelpCircle, Instagram } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [uploadProgress, setUploadProgress] = useState(60)
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(true)

  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">

      {/* Main Content */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#121417] mb-12 text-center">Document Forgery Detection</h1>

          {/* Upload Area */}
          <div className="mb-12">
            <div className="border-2 border-dashed border-[#dee0e3] rounded-lg p-16 text-center bg-[#f2f2f5]">
              <div className="flex flex-col items-center gap-4">
                <Upload className="w-12 h-12 text-[#6b7582]" />
                <div>
                  <p className="text-lg font-medium text-[#121417] mb-2">
                    Drag and drop a document here, or click to select files
                  </p>
                  <p className="text-[#6b7582] mb-6">Supported formats: PDF, DOCX</p>
                  <Button className="bg-[#dee0e3] text-[#121417] hover:bg-[#e5e8eb] border-0">Select Files</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Progress */}
          <div className="mb-12">
            <div className="mb-4">
              <p className="text-[#121417] font-medium mb-2">Uploading...</p>
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-[#6b7582] text-sm mt-2">{uploadProgress}% complete</p>
            </div>
          </div>

          {/* Analysis Results */}
          {isAnalysisComplete && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#121417] mb-6">Analysis Results</h2>
              <div className="bg-[#f2f2f5] rounded-lg p-6 mb-6">
                <p className="text-[#121417] text-lg">The document is likely forged. Confidence level: 85%</p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#dee0e3] text-[#121417] hover:bg-[#e5e8eb] border-0">
                  Download Detailed Report
                </Button>
                <Button className="bg-[#dee0e3] text-[#121417] hover:bg-[#e5e8eb] border-0">Share Findings</Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

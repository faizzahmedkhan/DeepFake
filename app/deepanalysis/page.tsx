"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, Twitter, Facebook, Instagram, CheckCircle, AlertCircle, X } from "lucide-react"

interface UploadedFile {
  file: File
  id: string
  progress: number
  status: "uploading" | "completed" | "error"
  preview?: string
}

export default function Component() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const supportedFormats = ["mp4", "avi", "mov", "wmv", "jpg", "jpeg", "png", "gif", "webp"]
  const maxFileSize = 100 * 1024 * 1024 // 100MB

  const validateFile = (file: File): string | null => {
    const extension = file.name.split(".").pop()?.toLowerCase()
    if (!extension || !supportedFormats.includes(extension)) {
      return `Unsupported format. Please use: ${supportedFormats.join(", ")}`
    }
    if (file.size > maxFileSize) {
      return "File size must be less than 100MB"
    }
    return null
  }

  const createFilePreview = (file: File): Promise<string | undefined> => {
    return new Promise((resolve) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      } else {
        resolve(undefined)
      }
    })
  }

  const simulateUpload = async (fileId: string) => {
    const totalSteps = 100
    for (let i = 0; i <= totalSteps; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50))

      setUploadedFiles((prev) =>
        prev.map((f) => (f.id === fileId ? { ...f, progress: i, status: i === 100 ? "completed" : "uploading" } : f)),
      )
    }
  }

  const handleFiles = async (files: FileList) => {
    const newFiles: UploadedFile[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const validationError = validateFile(file)

      if (validationError) {
        alert(validationError)
        continue
      }

      const fileId = Math.random().toString(36).substr(2, 9)
      const preview = await createFilePreview(file)

      newFiles.push({
        file,
        id: fileId,
        progress: 0,
        status: "uploading",
        preview,
      })
    }

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Start upload simulation for each file
    newFiles.forEach((uploadedFile) => {
      simulateUpload(uploadedFile.id)
    })
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFiles(files)
    }
  }, [])

  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFiles(files)
    }
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId))
  }

  const getOverallProgress = () => {
    if (uploadedFiles.length === 0) return 0
    const totalProgress = uploadedFiles.reduce((sum, file) => sum + file.progress, 0)
    return Math.round(totalProgress / uploadedFiles.length)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-[#ffffff]">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Upload Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#121417] mb-6">Upload Media for Deepfake Analysis</h1>
          <p className="text-[#6b7582] text-lg max-w-3xl mx-auto">
            Drag and drop your video or image file here, or click to browse. We support various formats including MP4,
            AVI, JPG, PNG, and more. Maximum file size: 100MB.
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`bg-[#f2f2f5] border-2 border-dashed rounded-lg p-16 text-center mb-8 transition-colors ${
            isDragOver ? "border-blue-400 bg-blue-50" : "border-[#dee0e3] hover:border-[#6b7582]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <Upload className={`w-12 h-12 ${isDragOver ? "text-blue-500" : "text-[#6b7582]"}`} />
            <div>
              <h3 className="text-xl font-semibold text-[#121417] mb-2">
                {isDragOver ? "Drop files here" : "Drag and drop files here"}
              </h3>
              <p className="text-[#6b7582] mb-6">Or click to browse</p>
              <Button onClick={handleFileSelect} className="bg-[#dee0e3] text-[#121417] hover:bg-[#dbe8f2]">
                Upload File
              </Button>
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".mp4,.avi,.mov,.wmv,.jpg,.jpeg,.png,.gif,.webp"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#121417] mb-4">Uploaded Files</h3>
            <div className="space-y-4">
              {uploadedFiles.map((uploadedFile) => (
                <div key={uploadedFile.id} className="bg-[#f2f2f5] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {uploadedFile.preview && (
                        <img
                          src={uploadedFile.preview || "/placeholder.svg"}
                          alt="Preview"
                          className="w-12 h-12 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-medium text-[#121417]">{uploadedFile.file.name}</p>
                        <p className="text-sm text-[#6b7582]">{formatFileSize(uploadedFile.file.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {uploadedFile.status === "completed" && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {uploadedFile.status === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(uploadedFile.id)}
                        className="text-[#6b7582] hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Progress value={uploadedFile.progress} className="w-full h-2" />
                  <p className="text-xs text-[#6b7582] mt-1">
                    {uploadedFile.status === "uploading" && `Uploading... ${uploadedFile.progress}%`}
                    {uploadedFile.status === "completed" && "Upload completed"}
                    {uploadedFile.status === "error" && "Upload failed"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Progress */}
        {uploadedFiles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-[#121417] mb-4">Overall Upload Progress</h2>
            <Progress value={getOverallProgress()} className="w-full h-2" />
            <p className="text-[#6b7582] text-sm mt-2">{getOverallProgress()}%</p>
          </div>
        )}

        {/* Analysis Results */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#121417] mb-6">Analysis Results</h2>
          <p className="text-[#6b7582] text-lg max-w-3xl mx-auto mb-8">
            Once the analysis is complete, the results will be displayed here. You will receive a detailed report
            indicating the likelihood of the content being a deepfake, along with a confidence score and any detected
            anomalies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#dee0e3] text-[#121417] hover:bg-[#dbe8f2]"
              disabled={uploadedFiles.filter((f) => f.status === "completed").length === 0}
            >
              Download Report
            </Button>
            <Button
              variant="outline"
              className="border-[#dee0e3] text-[#121417] hover:bg-[#f2f2f5]"
              disabled={uploadedFiles.filter((f) => f.status === "completed").length === 0}
            >
              Share Results
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

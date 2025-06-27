import Image from "next/image";
import Navbar from "./comp/navbar";
import Pricing from "./pricing/page";
import Footer from "./comp/footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="min-h-[500px] flex items-center justify-center text-center px-4"
          style={{
            background: "linear-gradient(135deg, #d4b5a0 0%, #c4a085 50%, #b8956f 100%)",
          }}
        >
          {/* Abstract 3D shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#e8c4a0] to-[#d4a373] rounded-full opacity-60"></div>
            <div className="absolute bottom-20 right-40 w-48 h-48 bg-gradient-to-br from-[#c4956c] to-[#a67c52] rounded-full opacity-40"></div>
            <div className="absolute top-40 right-60 w-20 h-20 bg-gradient-to-br from-[#f4e4d6] to-[#e8d5c4] rounded-full opacity-80"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Protect Your Reputation with VerityGuard
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Advanced AI-powered detection of deepfakes and document forgeries. Ensure authenticity and trust in the
              digital age.
            </p>
            <Button className="bg-[#0d80f2] hover:bg-[#0d80f2]/90 text-white px-8 py-3 text-lg"><Link href='/deepanalysis'>Detect Now</Link></Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417] mb-4">Key Features</h2>
          <p className="text-[#61758a] text-lg mb-12 max-w-2xl">
            Our platform offers a comprehensive suite of tools to safeguard your digital assets and reputation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#dbe0e5] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#61758a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Deepfake Detection</h3>
                <p className="text-[#61758a] leading-relaxed">
                  Identify manipulated videos and audio with our cutting-edge AI algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#dbe0e5] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#61758a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Document Forgery Detection</h3>
                <p className="text-[#61758a] leading-relaxed">
                  Verify the authenticity of documents and detect tampering with precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#dbe0e5] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#61758a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Real-time Analysis</h3>
                <p className="text-[#61758a] leading-relaxed">
                  Get instant results and insights into potential threats.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#ffffff] container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417] mb-4">Benefits</h2>
          <p className="text-[#61758a] text-lg mb-12 max-w-2xl">
            Experience the advantages of our robust detection capabilities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#e5e8eb] overflow-hidden py-0 h-[350px]">
              <Image src={'/benefit2.png'} alt="img" width={500} height={170}></Image>
              <CardContent className="px-6">
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Enhanced Security</h3>
                <p className="text-[#61758a] leading-relaxed">
                  Protect your personal and professional reputation from malicious content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e8eb] overflow-hidden py-0 h-[350px]">
              <Image src={'/benefit2.png'} alt="img" width={500} height={170}></Image>
              <CardContent className="px-6">
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Peace of Mind</h3>
                <p className="text-[#61758a] leading-relaxed">
                  Gain confidence in the authenticity of digital media and documents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e8eb] overflow-hidden py-0 h-[350px]">
              <Image src={'/benefit3.png'} alt="img" width={500} height={170}></Image>
              <CardContent className="px-6">
                <h3 className="text-xl font-semibold text-[#121417] mb-3">Cost-Effective</h3>
                <p className="text-[#61758a] leading-relaxed">Affordable solutions for individuals and businesses.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417] mb-4">Ready to Secure Your Digital World?</h2>
          <p className="text-[#61758a] text-lg mb-8">
            Start using VerityGuard today and stay ahead of digital deception.
          </p>
          <Button className="bg-[#0d80f2] hover:bg-[#0d80f2]/90 text-white px-8 py-3 text-lg"><Link href='/deepanalysis'>Detect Now</Link></Button>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileText, Eye, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link";


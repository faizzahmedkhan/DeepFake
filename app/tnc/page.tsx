import Link from "next/link"
import { ArrowLeft, Shield, FileText, Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Please read these terms carefully before using our AI-powered detection services. Your use of DEEPGUARD
              constitutes acceptance of these terms.
            </p>
            <p className="text-sm text-gray-600 mt-4">Last updated: December 27, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using DEEPGUARD's services, you acknowledge that you have read, understood, and agree
                to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our
                services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These terms apply to all users of our AI-powered deepfake detection and document forgery analysis
                services, including but not limited to individuals, businesses, and organizations.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                2. Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">DEEPGUARD provides AI-powered analysis services for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Detection and analysis of manipulated videos and audio content (deepfakes)</li>
                <li>Verification of document authenticity and detection of forgeries</li>
                <li>Real-time analysis and threat assessment</li>
                <li>Comprehensive reporting and insights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided "as is" and we make no guarantees about the accuracy, completeness, or
                reliability of our analysis results.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">Users of DEEPGUARD services agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate information when creating accounts and using services</li>
                <li>Use our services only for lawful purposes and in compliance with applicable laws</li>
                <li>Not attempt to reverse engineer, hack, or compromise our AI systems</li>
                <li>Respect intellectual property rights and privacy of others</li>
                <li>Not upload content that violates laws or infringes on rights of others</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Users are solely responsible for the content they submit for analysis and any actions taken based on our
                analysis results.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take your privacy seriously and are committed to protecting your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Content submitted for analysis is processed securely and deleted after analysis completion</li>
                <li>We do not store or retain user-submitted media or documents beyond necessary processing time</li>
                <li>
                  Personal data is handled in accordance with our Privacy Policy and applicable data protection laws
                </li>
                <li>We implement industry-standard security measures to protect your information</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations and Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive for accuracy, users acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>AI analysis may produce false positives or false negatives</li>
                <li>Our services should not be the sole basis for critical decisions</li>
                <li>Technology limitations may affect analysis accuracy</li>
                <li>Results should be verified through additional means when making important decisions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                DEEPGUARD disclaims all warranties, express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, DEEPGUARD shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from reliance on analysis results</li>
                <li>Costs of substitute services or technologies</li>
                <li>Any damages exceeding the amount paid for our services</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights in our services, including but not limited to software, algorithms,
                trademarks, and proprietary technology, remain the exclusive property of DEEPGUARD.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users retain ownership of content they submit but grant us a limited license to process and analyze such
                content for the purpose of providing our services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                8. Modifications and Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Modify these terms at any time with reasonable notice</li>
                <li>Suspend or terminate services for violations of these terms</li>
                <li>Update our services and features without prior notice</li>
                <li>Discontinue services with appropriate notice to users</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law and Disputes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes
                arising from these terms or use of our services shall be resolved through binding arbitration or in the
                courts of [Jurisdiction].
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700"><Link href='/contact'>Contact Legal Team</Link></Button>
                <Button variant="outline"><Link href='/privacy'>View Privacy Policy</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

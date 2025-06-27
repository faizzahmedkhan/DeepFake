import React from 'react'

const Privacy = () => {
  return (
    <div>
      <section className="relative py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold  mb-6">Privacy Policy</h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information when you use
            DEEPGUARD services.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> December 27, 2024
              </p>
              <p className="text-gray-700 leading-relaxed">
                At DEEPGUARD, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our deepfake detection and document verification services.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Name, email address, and contact information when you create an account</li>
                  <li>Payment information for subscription services</li>
                  <li>Company information for business accounts</li>
                  <li>Communication preferences and support interactions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Files and media uploaded for analysis (images, videos, documents)</li>
                  <li>Analysis results and detection reports</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Device information and IP addresses</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Service Delivery:</strong> Process your uploads and provide deepfake detection and document
                    verification services
                  </li>
                  <li>
                    <strong>Account Management:</strong> Maintain your account, process payments, and provide customer
                    support
                  </li>
                  <li>
                    <strong>Service Improvement:</strong> Analyze usage patterns to enhance our AI algorithms and user
                    experience
                  </li>
                  <li>
                    <strong>Communication:</strong> Send service updates, security alerts, and marketing communications
                    (with your consent)
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> Comply with applicable laws and protect against fraud and abuse
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Processing and Storage</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-blue-800">
                    <strong>Important:</strong> Files uploaded for analysis are processed using advanced AI algorithms
                    and are automatically deleted from our servers within 24 hours unless you choose to save results to
                    your account.
                  </p>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Data is encrypted in transit and at rest using industry-standard encryption</li>
                  <li>Processing occurs on secure servers with restricted access</li>
                  <li>We do not use your uploaded content to train our AI models without explicit consent</li>
                  <li>Analysis results are stored securely and accessible only to your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information. We may share information only in these
                  limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Trusted third parties who assist in operating our services
                    (cloud hosting, payment processing)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and
                    safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                    (with notice to users)
                  </li>
                  <li>
                    <strong>Consent:</strong> When you explicitly authorize us to share specific information
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to your personal information
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your account and associated data
                  </li>
                  <li>
                    <strong>Portability:</strong> Export your data in a machine-readable format
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications
                  </li>
                  <li>
                    <strong>Restrict Processing:</strong> Limit how we process your information
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Account information: Retained while your account is active and for 30 days after deletion</li>
                  <li>Uploaded files: Automatically deleted within 24 hours unless saved to your account</li>
                  <li>Analysis results: Retained according to your account settings or until account deletion</li>
                  <li>Usage logs: Retained for up to 12 months for security and service improvement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Employee access controls and security training</li>
                  <li>Incident response procedures for data breaches</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place, including standard contractual clauses and adequacy decisions, to
                  protect your information during international transfers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected such information, we
                  will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws.
                  We will notify you of material changes by email or through our service. Your continued use of our
                  services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-gray-700">
                  <p>
                    <strong>Email:</strong> privacy@deepguard.com
                  </p>
                  <p>
                    <strong>Address:</strong> DEEPGUARD Privacy Team
                  </p>
                  <p className="ml-16">123 Security Boulevard</p>
                  <p className="ml-16">Tech City, TC 12345</p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

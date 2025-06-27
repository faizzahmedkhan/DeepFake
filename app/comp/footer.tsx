import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="bg-[#121417] text-[#ffffff] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-xl font-semibold text-[#ffffff]">DEEPGUARD</span>
              </div>
              <p className="text-[#6b7582] text-sm max-w-md">
                Advanced deepfake detection technology to protect your digital content.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/why" className="text-[#6b7582] hover:text-[#ffffff] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-[#6b7582] hover:text-[#ffffff] transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-[#6b7582] hover:text-[#ffffff] transition-colors">
                Privacy
              </Link>
              <Link href="/tnc" className="text-[#6b7582] hover:text-[#ffffff] transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#3a3d41] mt-8 pt-8 text-center">
            <div className="text-[#6b7582] text-sm">© 2023 Veritas. All rights reserved.</div>
          </div>
        </div>
      </footer>
    )
}

export default Footer

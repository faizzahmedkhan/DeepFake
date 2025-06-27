import { Button } from "@/components/ui/button"
import { Check, ChevronDown, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
  //   <header className="w-full bg-[#ffffff] border-b border-[#e5e8eb]">
  //     <div className="max-w-7xl mx-auto px-6 pt-4">
  //       <div className="flex items-center justify-between">
  //         {/* Logo */}
  //         <div className="flex items-center">
  //           <Link href='../'><h1 className="text-xl font-semibold text-[#121417]">VerityGuard</h1></Link>
  //         </div>

  //         {/* Navigation Menu */}
  //         <nav className="hidden md:flex items-center space-x-8">
  //           <Link href="/deepanalysis" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             Deepfake Detection
  //           </Link>
  //           <Link href="/forgery" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             Document Forgery Detection
  //           </Link>
  //           {/* <Link href="" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             How It Works
  //           </Link> */}
  //           <Link href="/why" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             Why Us
  //           </Link>
  //           <Link href="/pricing" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             Pricing
  //           </Link>
  //           <Link href="/contact" className="text-[#121417] hover:text-[#0d80f2] transition-colors duration-200 font-medium">
  //             Contact Us
  //           </Link>
  //         </nav>

  //         {/* Get Started Button */}
  //         <div className="flex items-center">
  //             <Button className="bg-[#0d80f2] hover:bg-[#0d80f2]/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200">
  //           <Link href="/signup" className="inline-block">
  //               Get Started
  //           </Link>
  //             </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
   <header className="border-b border-[#dee0e3] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href='../'><span className="text-xl font-semibold text-[#121417]">DEEPGUARD</span></Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/deepanalysis" className="text-[#6b7582] hover:text-[#121417] transition-colors">
                Deepfake Analysis
              </Link>
              <Link href="/forgery" className="text-[#6b7582] hover:text-[#121417] transition-colors">
                Document Forgery
              </Link>
              <Link href="/why" className="text-[#6b7582] hover:text-[#121417] transition-colors">
                Why Us
              </Link>
              <Link href="pricing" className="text-[#6b7582] hover:text-[#121417] transition-colors">
                Pricing
              </Link>
              <Button variant="outline" className="bg-[#ffffff] text-[#121417] border-[#dee0e3] hover:bg-[#f2f2f5]">
                <Link href='/signup'>Get Started</Link>
              </Button>
              <Button className="bg-[#121417] text-[#ffffff] hover:bg-[#121417]/90"> <Link href='/contact'>Contact Sales</Link> </Button>
            </div>
          </nav>
        </div>
      </header>
  )
}

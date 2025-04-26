"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const linkVariants = {
    hover: { 
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto flex flex-col">
        {/* Top section with tagline and signup */}
        <div className="py-10 md:py-16 px-6 md:px-32 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center border-b">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Empowering Careers, Connecting Talent, Shaping Futures <span className="ml-1">💎</span>
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#FF9E44] hover:bg-[#FF9E44]/90 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium w-auto h-12">
              Build your Profile
            </Button>
          </motion.div>
        </div>
        
        {/* Middle section with links and info */}
        <div className="py-12 md:py-16 px-6 md:px-32 flex flex-col md:flex-row gap-16 md:gap-20 flex-1">
          {/* Corporate Address */}
          <motion.div 
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Corporate Address</h3>
            <p className="text-gray-700 mb-8">
              The Career Company, InFED, Indian Institute of Management Nagpur Mihan (Non-Sez),<br className="hidden md:block" />
              Nagpur, Maharashtra, India - 441108
            </p>
            
            {/* Social media links */}
            <div className="flex gap-6">
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link href="https://x.com/thecareerco_" aria-label="Follow us on Twitter" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link href="https://www.facebook.com/Thecareercompanyin/" aria-label="Follow us on Facebook" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link href="https://www.instagram.com/thecareercompanyindia/" aria-label="Follow us on Instagram" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link href="https://www.linkedin.com/company/thecareercompanyindia/" aria-label="Follow us on LinkedIn" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Links section - grid on mobile, columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-1 gap-12 md:gap-0">
            {/* Company Links */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="#about-us" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left scroll-smooth">
                    About Us
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/companies" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    For Companies
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/institutions" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    For Institutions
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/students" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    For Students
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            
            {/* Help Links */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Help</h3>
              <ul className="space-y-4">
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/support" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Customer Support
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/terms" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Terms & Conditions
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/privacy" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Privacy Policy
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            
            {/* Important Links */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">Important Links</h3>
              <ul className="space-y-4">
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="#join-mentor" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left scroll-smooth">
                    Join us as a Mentor
                  </Link>
                </motion.li>
                <motion.li variants={linkVariants} whileHover="hover">
                  <Link href="/join-our-team" className="text-gray-700 hover:text-black transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#FF9E44] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                    Join our Team
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="bg-black text-white py-6 px-6 md:px-32 flex flex-col md:flex-row gap-6 md:gap-0 justify-center md:justify-between items-center mt-auto">
          <div>©The Career Company</div>
        </div>
      </div>
    </footer>
  );
}
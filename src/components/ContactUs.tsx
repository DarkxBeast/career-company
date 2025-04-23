"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full border border-gray-100 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border border-gray-100 translate-x-1/4 translate-y-1/4 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Contact text */}
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-md">
              Have questions or need assistance? Feel free to reach out to us. we're here to help!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-[#FF9E44] hover:bg-[#FF9E44]/90 text-white font-medium py-4 px-8 rounded-full transition-colors"
            >
              Get in touch
            </Link>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/contact-support.png"
                alt="Customer support representative"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
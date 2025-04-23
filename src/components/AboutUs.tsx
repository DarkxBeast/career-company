"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        {/* White container with content */}
        <div className="ml-auto w-full md:w-[85%] lg:w-[75%] p-6 md:p-12 pt-12 md:pt-16 bg-white rounded-[50px] shadow-lg border border-[#D9D9D9] relative z-10">
          <div className="md:ml-[35%] lg:ml-[30%] xl:ml-[25%] -mt-1">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#090914] mb-8">About Us</h2>
            
            <div className="space-y-6 text-[#18181B] text-sm md:text-[14px] leading-6">
              <p>
                The Career Company was born out of a passion to accelerate career journeys. Our founder, 
                with years of experience leading Career Development Services at two premier institutes— IIM 
                Nagpur and IIM Udaipur—has successfully guided over 1,500 IIM graduates to the right roles.
                At the IIMs, every student received 1:1 career support, yet it still takes them 3-4 years to figure 
                out the right role.
              </p>
              <p>
                On the other hand, 10 million people join the workforce in India every year, and most don&apos;t get 
                any 1:1 career support. The Career Company started with a vision to provide 1:1 career support 
                at scale, helping people visualize their careers 10-15 years so they can make conscious 
                decisions early on, saving years of trial and error. We support you at every step of your career
                —just like a Journey with Saarthi for your career. Therefore, we are not just a resume company 
                or a preparation company, or placement company but The Career Company.
              </p>
            </div>

            <div className="mt-12 flex justify-center md:justify-start">
              <Link 
                href="/join-talent-pool" 
                className="bg-[#FF9E44] text-black font-semibold py-3.5 px-8 rounded-full text-base"
              >
                Join Our Talent Pool
              </Link>
            </div>
          </div>
        </div>

        {/* Left side image that overlays */}
        <div className="w-full md:w-[45%] lg:w-[40%] absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 md:z-20">
          <div className="rounded-[15px] overflow-hidden shadow-lg">
            <Image
              src="/images/about-us.png"
              alt="About The Career Company"
              width={750}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
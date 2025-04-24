"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Create ref for the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  // Track client-side initialization
  const [isClient, setIsClient] = useState(false);

  // Mark component as client-initialized
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set up intersection observer for video autoplay/pause ONLY on client
  useEffect(() => {
    // Only run this effect on the client side after first render
    if (!isClient) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const options = {
      root: null, // use viewport as root
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is visible, play it
          videoElement.play().catch((error) => {
            console.log("Autoplay was prevented:", error);
          });
        } else {
          // Video is not visible, pause it
          videoElement.pause();
        }
      });
    }, options);

    observer.observe(videoElement);

    // Cleanup observer when component unmounts
    return () => {
      observer.unobserve(videoElement);
    };
  }, [isClient]); // Only re-run if isClient changes

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        {/* White container with content */}
        <div className="ml-auto w-full md:w-[85%] lg:w-[75%] p-6 md:p-12 pt-12 md:pt-16 bg-white rounded-[50px] shadow-lg border border-[#D9D9D9] relative z-10">
          <div className="md:ml-[35%] lg:ml-[30%] xl:ml-[25%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090914] mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-[#18181B] text-sm md:text-[14px] leading-6">
              <p>
                The Career Company was born out of a passion to accelerate
                career journeys. Our founder, with years of experience leading
                Career Development Services at two premier institutes— IIM
                Nagpur and IIM Udaipur—has successfully guided over 1,500 IIM
                graduates to the right roles. At the IIMs, every student
                received 1:1 career support, yet it still takes them 3-4 years
                to figure out the right role.
              </p>
              <p>
                On the other hand, 10 million people join the workforce in India
                every year, and most don&apos;t get any 1:1 career support. The
                Career Company started with a vision to provide 1:1 career
                support at scale, helping people visualize their careers 10-15
                years so they can make conscious decisions early on, saving
                years of trial and error. We support you at every step of your
                career —just like a Journey with Saarthi for your career.
                Therefore, we are not just a resume company or a preparation
                company, or placement company but The Career Company.
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <Link
                href="/join-talent-pool"
                className="inline-block bg-[#FF9E44] text-black font-semibold py-3 px-6 md:py-3.5 md:px-8 rounded-full text-sm md:text-base transition-transform hover:scale-105"
              >
                Join Our Talent Pool
              </Link>
            </div>
          </div>
        </div>

        {/* Video container with responsive positioning */}
        <div className="w-full lg:w-[40%] mt-8 lg:mt-0 lg:absolute lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:z-20">
          <motion.div
            className="rounded-[15px] overflow-hidden shadow-xl bg-black aspect-[750/600] border border-gray-200/20"
            style={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
              suppressHydrationWarning
            >
              <source src="/videos/career-company.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

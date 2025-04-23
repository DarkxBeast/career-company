"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SuccessStories() {
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
      rootMargin: '0px',
      threshold: 0.5, // trigger when 50% of the video is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Video is visible, play it
          videoElement.play().catch(error => {
            console.log('Autoplay was prevented:', error);
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

  const testimonials = [
    {
      id: 1,
      name: "Ananya Yadav",
      role: "Jio Institute",
      quote: "The mentors patiently addressed all my doubts and queries, and took the time to analyse my resume in detail — offering tailored feedback and preparation strategies specific to my profile, rather than a generalized approach.",
      image: "/images/testimonials/T1.png"
    },
    {
      id: 2,
      name: "Akanksha Sherawat",
      role: "IIM Kozhikode",
      quote: "I have learnt about different techniques and approaches of Excel which I can further use in my future. The mentor was good and had the ability to engage students in the activities.",
      image: "/images/testimonials/T2.png"
    },
    {
      id: 3,
      name: "Kanika Bhardwaj IIMK",
      role: "IIM Kozhikode",
      quote: "New topics were taught in the session, and we had practice questions for each topic which helped us understand them easily. The speaker made the session interactive and cleared every doubt we had during the session.",
      image: "/images/testimonials/T3.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 flex flex-col items-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        
        <motion.div 
          className="w-full max-w-[1200px] h-auto aspect-video bg-black rounded-xl overflow-hidden shadow-lg"
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
            // This prop suppresses hydration warnings for attributes that might differ
            suppressHydrationWarning
          >
            <source src="/videos/career-company.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        {/* Testimonial cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full max-w-[1200px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
"use client";

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SuccessStories() {
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
    },
    {
      id: 4,
      name: "Rahul Sharma",
      role: "IIM Bangalore",
      quote: "The Career Company's guidance transformed my approach to career planning. Their personalized mentorship helped me secure my dream role in consulting.",
      image: "/images/testimonials/T1.png"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "XLRI Jamshedpur",
      quote: "The structured approach to interview preparation and the mock sessions were invaluable. I gained confidence and clarity about my career path.",
      image: "/images/testimonials/T2.png"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "ISB Hyderabad",
      quote: "What sets them apart is their deep understanding of industry requirements and their ability to tailor the guidance to each individual's strengths.",
      image: "/images/testimonials/T3.png"
    }
  ];

  const controls = useAnimationControls();

  useEffect(() => {
    const startScrolling = async () => {
      await controls.start({
        x: [0, -2400], // Reduced scroll distance for smoother animation
        transition: {
          duration: 60, // Increased duration from 40 to 60 seconds
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startScrolling();
    return () => controls.stop();
  }, [controls]);

  return (
    <section className="py-12 md:py-24 bg-white"> {/* Reduced vertical padding */}
      <div className="max-w-[100vw] mx-auto px-5 sm:px-10 flex flex-col items-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10" /* Reduced bottom margin */
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        
        <div className="relative w-full min-h-[350px] overflow-hidden"> {/* Reduced min-height */}
          <motion.div 
            className="flex gap-6 md:gap-8 mt-8 md:mt-12 pb-8" /* Reduced top and bottom margins/padding */
            animate={controls}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="flex-shrink-0 w-[400px] bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm flex flex-col"
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
            
            {/* Duplicate testimonials section with the same changes */}
            {testimonials.map((testimonial) => (
              <motion.div 
                key={`duplicate-${testimonial.id}`} 
                className="flex-shrink-0 w-[400px] bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm flex flex-col"
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
      </div>
    </section>
  );
}
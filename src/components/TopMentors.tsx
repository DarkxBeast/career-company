"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TopMentors() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const mentors = [
    {
      id: 1,
      name: "Arun Singhal",
      image: "/images/mentors/M1.png",
      position: "Board Member - Cello World",
      description: "Founder of Enrichmentors, leveraging 26+ years in top FMCGs to empower SMEs and individuals in strategy, career, and wealth growth."
    },
    {
      id: 2,
      name: "Vijoy Basu",
      image: "/images/mentors/M2.png",
      position: "Director - Cognizant",
      description: "Tech leader driving Fortune 200 firms from data to decisions with AI, analytics & digital transformation."
    },
    {
      id: 3,
      name: "Vinod Mathur",
      image: "/images/mentors/M3.png",
      position: "Director - Blue Yonder",
      description: "Strategic Consultant blending 25+ years of supply chain expertise with digital transformation and execution excellence."
    },
    {
      id: 4,
      name: "Gaurav Upadhyay",
      image: "/images/mentors/M4.png",
      position: "Senior Global Product Manager - Bain And Company",
      description: "Digital Product Leader driving AI-led growth across global B2B/B2C products in BFSI, Telecom & Retail."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Top Mentors for You
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-700 text-base sm:text-lg mb-6 sm:mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock the potential of personalized learning
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {mentors.map((mentor) => (
            <motion.div 
              key={mentor.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 flex flex-col items-center h-auto sm:h-[360px] md:h-[380px] lg:h-[400px] justify-between"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="flex-shrink-0 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={110}
                  height={110}
                  className="object-cover"
                />
              </motion.div>
              
              <div className="flex flex-col items-center flex-grow justify-between w-full">
                <div className="flex flex-col items-center text-center mb-0">
                  <div className="flex items-center justify-center gap-1">
                    <h3 className="text-base sm:text-lg font-semibold">{mentor.name}</h3>
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                      <Link href="#" aria-label={`${mentor.name}'s LinkedIn profile`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-600 text-center text-xs sm:text-sm mt-0.5 mb-2">{mentor.position}</p>
                </div>
                
                <p className="text-gray-700 text-center text-xs sm:text-sm h-auto sm:h-[80px] md:h-[85px] overflow-hidden mt-0 mb-3">{mentor.description}</p>
              </div>
              
              <motion.button 
                className="bg-black text-white w-full py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex-shrink-0 text-sm mt-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Profile
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("students");
  const [studentSlide, setStudentSlide] = useState(0);
  const [companySlide, setCompanySlide] = useState(0);

  // Card data for Students and Professionals
  const studentProfessionalCards = [
    {
      id: 1,
      title: "Career Path Finder",
      description: "Discover the right career path for you",
      icon: "/images/icons/S1.png",
      href: "/career-path-finder"
    },
    {
      id: 2,
      title: "Find Mentors",
      description: "Connect with industry experts",
      icon: "/images/icons/S2.png",
      href: "/mentors"
    },
    {
      id: 3,
      title: "Build Resumes",
      description: "Create standout professional resumes",
      icon: "/images/icons/S3.png",
      href: "/resumes"
    },
    {
      id: 4,
      title: "Course Suggestions",
      description: "Find courses aligned with your goals",
      icon: "/images/icons/S4.png",
      href: "/courses"
    },
    {
      id: 5,
      title: "Jobs & Internships",
      description: "Discover opportunities that match your skills",
      icon: "/images/icons/S5.png",
      href: "/jobs"
    },
    {
      id: 6,
      title: "Industry Updates",
      description: "Stay informed about your field",
      icon: "/images/icons/S6.png",
      href: "/industry-updates"
    },
    {
      id: 7,
      title: "Find Projects",
      description: "Work on real-world practical projects",
      icon: "/images/icons/S7.png",
      href: "/projects"
    }
  ];

  // Card data for Institutions
  const institutionCards = [
    {
      id: 1,
      title: "Corporate Training",
      description: "Customized training programs for your organization's needs",
      icon: "/images/icons/I1.png",
      href: "/institutions/training",
    },
    {
      id: 2,
      title: "Placement Services",
      description: "Connect your students with top employers",
      icon: "/images/icons/I2.png",
      href: "/institutions/placement",
    },
    {
      id: 3,
      title: "Campus Partnerships",
      description: "Collaborative programs to enhance student outcomes",
      icon: "/images/icons/I3.png",
      href: "/institutions/partnerships",
    },
    {
      id: 4,
      title: "Career Fairs",
      description: "Host career events with industry leaders",
      icon: "/images/icons/I4.png",
      href: "/institutions/fairs",
    },
  ];

  // Card data for Companies
  const companyCards = [
    {
      id: 1,
      title: "Talent Acquisition",
      description: "Find the right talent for your organization",
      icon: "/images/icons/C1.png",
      href: "/companies/talent",
    },
    {
      id: 2,
      title: "Employer Branding",
      description: "Enhance your company's reputation as an employer",
      icon: "/images/icons/C2.png",
      href: "/companies/branding",
    },
    {
      id: 3,
      title: "Skill Development",
      description: "Upskill your workforce with targeted training",
      icon: "/images/icons/C3.png",
      href: "/companies/skills",
    },
    {
      id: 4,
      title: "Diversity & Inclusion",
      description: "Build a diverse and inclusive workplace",
      icon: "/images/icons/C4.png",
      href: "/companies/diversity",
    },
    {
      id: 5,
      title: "Recruitment Solutions",
      description: "End-to-end recruitment services for your needs",
      icon: "/images/icons/C5.png",
      href: "/companies/recruitment",
    },
  ];

  // Define explicit slide content for different sections
  const studentSlides = [
    [0, 1, 2, 3], // Slide 1: Cards 1-4 (array indices 0-3)
    [3, 4, 5, 6], // Slide 2: Cards 4-7 (array indices 3-6)
  ];

  const companySlides = [
    [0, 1, 2, 3], // Slide 1: Cards 1-4 (array indices 0-3)
    [1, 2, 3, 4], // Slide 2: Card 5 + Cards 1-3 (to fill the slide)
  ];

  // Count of slides for each section
  const studentSlideCount = studentSlides.length;
  const companySlideCount = companySlides.length;

  // Navigation handlers for students section
  const isFirstStudentSlide = studentSlide === 0;
  const isLastStudentSlide = studentSlide === studentSlideCount - 1;

  const handleStudentPrevSlide = () => {
    if (!isFirstStudentSlide) {
      setStudentSlide((prev) => prev - 1);
    }
  };

  const handleStudentNextSlide = () => {
    if (!isLastStudentSlide) {
      setStudentSlide((prev) => prev + 1);
    }
  };

  // Navigation handlers for companies section
  const isFirstCompanySlide = companySlide === 0;
  const isLastCompanySlide = companySlide === companySlideCount - 1;

  const handleCompanyPrevSlide = () => {
    if (!isFirstCompanySlide) {
      setCompanySlide((prev) => prev - 1);
    }
  };

  const handleCompanyNextSlide = () => {
    if (!isLastCompanySlide) {
      setCompanySlide((prev) => prev + 1);
    }
  };

  // Get visible cards for students section
  const getVisibleStudentCards = () => {
    const indices = studentSlides[studentSlide];
    return indices.map((index) => studentProfessionalCards[index]);
  };

  // Get visible cards for companies section
  const getVisibleCompanyCards = () => {
    const indices = companySlides[companySlide];
    return indices.map((index) => companyCards[index]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full bg-white relative overflow-hidden"
    >
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="max-w-[1440px] mx-auto px-4 pt-24 pb-32 flex flex-col items-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.11, 0.95, 0.32, 1]
          }}
          className="text-[40px] md:text-[56px] font-bold text-center leading-tight text-[#1A1A1A] mb-6 max-w-[1200px]"
        >
          Where Ambition Meets Opportunity
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: [0.11, 0.95, 0.32, 1] 
          }}
          className="text-lg text-[#666666] text-center max-w-[800px] mb-16"
        >
          We guide students, professionals and lifelong learners toward
          purposeful growth. With clarity, mentorship, and insights, your career
          becomes your calling.
        </motion.p>

        <motion.div 
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative w-full max-w-[1230px]"
        >
          {/* Black rectangle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[214px] bg-black rounded-2xl"></div>
          
          {/* White box */}
          <div className="relative w-full max-w-[1230px] h-[548px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-2 z-10">
            <div className="flex justify-center pt-8 pb-6 relative">
              <div className="flex space-x-12">
                <button
                  className={`text-lg font-medium px-6 py-3 transition-colors relative ${
                    activeTab === "students"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("students")}
                >
                  For Students & Professionals
                  {activeTab === "students" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF9E44] rounded-full" />
                  )}
                </button>
                <button
                  className={`text-lg font-medium px-6 py-3 transition-colors relative ${
                    activeTab === "institutions"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("institutions")}
                >
                  For Institutions
                  {activeTab === "institutions" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF9E44] rounded-full" />
                  )}
                </button>
                <button
                  className={`text-lg font-medium px-6 py-3 transition-colors relative ${
                    activeTab === "companies"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("companies")}
                >
                  For Companies
                  {activeTab === "companies" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF9E44] rounded-full" />
                  )}
                </button>
              </div>
            </div>

            {/* Card Container and Button in Column Group */}
            <div className="flex flex-col items-center mt-10">
              {/* Card Container */}
              <div className="px-16 py-4 relative mb-4">
                <div className="flex justify-center">
                  {/* Cards for Students & Professionals */}
                  {activeTab === "students" && (
                    <div className="grid grid-cols-4 gap-6">
                      {getVisibleStudentCards().map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[212px] w-[212px]"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-36 h-32 mb-4 relative">
                            <Image 
                              src={card.icon} 
                              alt={card.title} 
                              fill
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.jpg';
                              }}
                            />
                          </div>
                          
                          {/* Card Title */}
                          <h3 className="text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Cards for Institutions */}
                  {activeTab === "institutions" && (
                    <div className="grid grid-cols-4 gap-6">
                      {institutionCards.map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[212px] w-[212px]"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-36 h-32 mb-4 relative">
                            <Image 
                              src={card.icon} 
                              alt={card.title} 
                              fill
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.jpg';
                              }}
                            />
                          </div>
                          
                          {/* Card Title */}
                          <h3 className="text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Cards for Companies */}
                  {activeTab === "companies" && (
                    <div className="grid grid-cols-4 gap-6">
                      {getVisibleCompanyCards().map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[212px] w-[212px]"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-36 h-32 mb-4 relative">
                            <Image 
                              src={card.icon} 
                              alt={card.title} 
                              fill
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.jpg';
                              }}
                            />
                          </div>
                          
                          {/* Card Title */}
                          <h3 className="text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sign Up / Login Button - only visible for students tab */}
              {activeTab === "students" && (
                <div className="mt-2 mb-6">
                  <button className="bg-[#FF9E44] text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors">
                    Sign Up / Login
                  </button>
                </div>
              )}

              {/* Contact Us Button - only visible for institutions tab */}
              {activeTab === "institutions" && (
                <div className="mt-2 mb-6">
                  <button className="bg-[#FF9E44] text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors">
                    Contact Us
                  </button>
                </div>
              )}

              {/* Contact Us Button - only visible for companies tab */}
              {activeTab === "companies" && (
                <div className="mt-2 mb-6">
                  <button className="bg-[#FF9E44] text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors">
                    Contact Us
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Arrows - only visible for students tab */}
            {activeTab === "students" && (
              <>
                <div
                  className={`absolute left-8 top-1/2 transform -translate-y-1/2 ${
                    isFirstStudentSlide
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
                  <button
                    onClick={handleStudentPrevSlide}
                    disabled={isFirstStudentSlide}
                    className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${
                    isLastStudentSlide
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
                  <button
                    onClick={handleStudentNextSlide}
                    disabled={isLastStudentSlide}
                    className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
                    aria-label="Next slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}

            {/* Navigation Arrows - only visible for companies tab */}
            {activeTab === "companies" && (
              <>
                <div
                  className={`absolute left-8 top-1/2 transform -translate-y-1/2 ${
                    isFirstCompanySlide
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
              <button 
                    onClick={handleCompanyPrevSlide}
                    disabled={isFirstCompanySlide}
                    className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
                aria-label="Previous slide"
              >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                </svg>
              </button>
            </div>
            
                <div
                  className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${
                    isLastCompanySlide
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
              <button 
                    onClick={handleCompanyNextSlide}
                    disabled={isLastCompanySlide}
                    className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
                aria-label="Next slide"
              >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                </svg>
              </button>
            </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 

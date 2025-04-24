"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("students");
  const [studentSlide, setStudentSlide] = useState(0);
  const [institutionSlide, setInstitutionSlide] = useState(0);
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
  const studentSlides = {
    mobile: [
      [0], [1], [2], [3], [4], [5], [6] // One card per slide on mobile
    ],
    tablet: [
      [0, 1], [2, 3], [4, 5], [6] // Two cards per slide on tablet
    ],
    desktop: [
      [0, 1, 2, 3], [3, 4, 5, 6] // Original desktop layout
    ]
  };

  const institutionSlides = {
    mobile: [
      [0], [1], [2], [3] // One card per slide on mobile
    ],
    tablet: [
      [0, 1], [2, 3] // Two cards per slide on tablet
    ],
    desktop: [
      [0, 1, 2, 3] // Original desktop layout
    ]
  };

  const companySlides = {
    mobile: [
      [0], [1], [2], [3], [4] // One card per slide on mobile
    ],
    tablet: [
      [0, 1], [2, 3], [4] // Two cards per slide on tablet
    ],
    desktop: [
      [0, 1, 2, 3], [1, 2, 3, 4] // Original desktop layout
    ]
  };

  // Add screen size state
  const [screenSize, setScreenSize] = useState('desktop');

  // Update screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Count of slides for each section based on screen size
  const studentSlideCount = studentSlides[screenSize as keyof typeof studentSlides].length;
  const institutionSlideCount = institutionSlides[screenSize as keyof typeof institutionSlides].length;
  const companySlideCount = companySlides[screenSize as keyof typeof companySlides].length;

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

  // Navigation handlers for institutions section
  const isFirstInstitutionSlide = institutionSlide === 0;
  const isLastInstitutionSlide = institutionSlide === institutionSlideCount - 1;

  const handleInstitutionPrevSlide = () => {
    if (!isFirstInstitutionSlide) {
      setInstitutionSlide((prev) => prev - 1);
    }
  };

  const handleInstitutionNextSlide = () => {
    if (!isLastInstitutionSlide) {
      setInstitutionSlide((prev) => prev + 1);
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
    const currentSlides = studentSlides[screenSize as keyof typeof studentSlides];
    const indices = currentSlides[studentSlide] || [];
    return indices.map((index) => studentProfessionalCards[index]);
  };

  // Get visible cards for institutions section
  const getVisibleInstitutionCards = () => {
    const currentSlides = institutionSlides[screenSize as keyof typeof institutionSlides];
    const indices = currentSlides[institutionSlide] || [];
    return indices.map((index) => institutionCards[index]);
  };

  // Get visible cards for companies section
  const getVisibleCompanyCards = () => {
    const currentSlides = companySlides[screenSize as keyof typeof companySlides];
    const indices = currentSlides[companySlide] || [];
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
        className="max-w-[1440px] mx-auto px-4 pt-12 md:pt-24 pb-16 md:pb-32 flex flex-col items-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.11, 0.95, 0.32, 1]
          }}
          className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-center leading-tight text-[#1A1A1A] mb-4 md:mb-6 max-w-[1200px] px-4"
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
          className="text-base md:text-lg text-[#666666] text-center max-w-[800px] mb-8 md:mb-16 px-4"
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
          className="relative w-full max-w-[1230px] px-4 sm:px-6"
        >
          {/* Black rectangle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[1400px] h-[214px] bg-black rounded-2xl"></div>
          
          {/* White box */}
          <div className="relative w-full max-w-[1230px] h-auto md:h-[548px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-2 z-10">
            <div className="flex justify-center pt-6 md:pt-8 pb-4 md:pb-6 relative">
              <div className="flex flex-col md:flex-row w-full md:w-auto px-4 space-y-2 md:space-y-0 md:space-x-12 items-center justify-center">
                <button
                  className={`text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-3 transition-colors relative w-full md:w-auto text-center group ${
                    activeTab === "students"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("students")}
                >
                  <span className="relative">
                    For Students & Professionals
                    {activeTab === "students" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
                <button
                  className={`text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-3 transition-colors relative w-full md:w-auto text-center group ${
                    activeTab === "institutions"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("institutions")}
                >
                  <span className="relative">
                    For Institutions
                    {activeTab === "institutions" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
                <button
                  className={`text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-3 transition-colors relative w-full md:w-auto text-center group ${
                    activeTab === "companies"
                      ? "text-[#FF9E44]"
                      : "text-[#666666] hover:text-[#333333]"
                  }`}
                  onClick={() => setActiveTab("companies")}
                >
                  <span className="relative">
                    For Companies
                    {activeTab === "companies" && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-[#FF9E44] rounded-full" />
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Card Container and Button in Column Group */}
            <div className="flex flex-col items-center mt-6 md:mt-10">
              {/* Card Container */}
              <div className="px-4 md:px-16 py-2 md:py-4 relative mb-4">
                <div className="flex justify-center">
                  {/* Cards for Students & Professionals */}
                  {activeTab === "students" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                      {getVisibleStudentCards().map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[180px] md:h-[212px] w-full max-w-[280px] mx-auto"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-28 md:w-36 h-24 md:h-32 mb-3 md:mb-4 relative">
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
                          <h3 className="text-sm md:text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Cards for Institutions */}
                  {activeTab === "institutions" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                      {getVisibleInstitutionCards().map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[180px] md:h-[212px] w-full max-w-[280px] mx-auto"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-28 md:w-36 h-24 md:h-32 mb-3 md:mb-4 relative">
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
                          <h3 className="text-sm md:text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Cards for Companies */}
                  {activeTab === "companies" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                      {getVisibleCompanyCards().map((card) => (
                        <Link 
                          href={card.href} 
                          key={card.id}
                          className="relative flex flex-col items-center rounded-lg border border-gray-200 p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white h-[180px] md:h-[212px] w-full max-w-[280px] mx-auto"
                        >
                          {/* Rectangular Image Container */}
                          <div className="w-28 md:w-36 h-24 md:h-32 mb-3 md:mb-4 relative">
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
                          <h3 className="text-sm md:text-base font-medium text-center text-gray-800">{card.title}</h3>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons - Added responsive classes */}
              {activeTab === "students" && (
                <div className="mt-2 mb-4 md:mb-6">
                  <button className="bg-[#FF9E44] text-black text-sm md:text-base font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors">
                    Sign Up / Login
                  </button>
                </div>
              )}

              {/* Contact Us Button - Added responsive classes */}
              {(activeTab === "institutions" || activeTab === "companies") && (
                <div className="mt-2 mb-4 md:mb-6">
                  <button className="bg-[#FF9E44] text-black text-sm md:text-base font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#ff9431] transition-colors">
                    Contact Us
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Arrows - Updated to include institutions */}
            {(activeTab === "students" || activeTab === "institutions" || activeTab === "companies") && (
              <>
                <div
                  className={`absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 ${
                    (activeTab === "students" 
                      ? isFirstStudentSlide 
                      : activeTab === "institutions"
                      ? isFirstInstitutionSlide
                      : isFirstCompanySlide)
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
                  <button
                    onClick={
                      activeTab === "students" 
                        ? handleStudentPrevSlide 
                        : activeTab === "institutions"
                        ? handleInstitutionPrevSlide
                        : handleCompanyPrevSlide
                    }
                    disabled={
                      activeTab === "students" 
                        ? isFirstStudentSlide 
                        : activeTab === "institutions"
                        ? isFirstInstitutionSlide
                        : isFirstCompanySlide
                    }
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
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
                  className={`absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 ${
                    (activeTab === "students" 
                      ? isLastStudentSlide 
                      : activeTab === "institutions"
                      ? isLastInstitutionSlide
                      : isLastCompanySlide)
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
                  <button
                    onClick={
                      activeTab === "students" 
                        ? handleStudentNextSlide 
                        : activeTab === "institutions"
                        ? handleInstitutionNextSlide
                        : handleCompanyNextSlide
                    }
                    disabled={
                      activeTab === "students" 
                        ? isLastStudentSlide 
                        : activeTab === "institutions"
                        ? isLastInstitutionSlide
                        : isLastCompanySlide
                    }
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors`}
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

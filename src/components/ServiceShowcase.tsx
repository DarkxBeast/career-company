"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceShowcase() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState('course');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  // Service categories
  const serviceCategories = [
    { id: 'course', name: 'Course' },
    { id: 'mentorship', name: 'Mentorship' },
    { id: 'findYourself', name: 'Find Yourself' },
    { id: 'projects', name: 'Projects' },
    { id: 'jobs', name: 'Jobs & Internships' },
    { id: 'resume', name: 'Resume' },
  ];

  // SECTION 1: Courses data
  const courses = [
  {
    id: 1,
      title: "Strategic Management Essentials",
      duration: "2 Hrs",
      price: "INR 3500",
      provider: "ABC"
  },
  {
    id: 2,
      title: "People Management & Leadership",
      duration: "2 Hrs",
      price: "INR 3500",
      provider: "ABC"
  },
  {
    id: 3,
      title: "Marketing Management Fundamentals",
      duration: "2 Hrs",
      price: "INR 3500",
      provider: "ABC"
  },
  {
    id: 4,
      title: "Business Analytics & Decision Making",
      duration: "2 Hrs",
      price: "INR 3500",
      provider: "ABC"
  },
  {
    id: 5,
      title: "Entrepreneurship & Innovation in Business",
      duration: "2 Hrs",
      price: "INR 3500",
      provider: "ABC"
    }
  ];

  // SECTION 2: Mentorship services
  const mentorshipData = [
    {
      id: 1,
      title: "Book Your 1:1 Resume Review",
      description: "Get expert feedback on your resume and improve your chances of landing interviews.",
      image: "/images/mentorship/MN1.png",
      link: "#"
    },
    {
      id: 2,
      title: "Book your 1:1 Career Roadmap",
      description: "Plan your career path with guidance from industry professionals.",
      image: "/images/mentorship/MN2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Book Your 1:1 Practice Interview",
      description: "Prepare for job interviews with mock sessions and valuable feedback.",
      image: "/images/mentorship/MN3.png",
      link: "#"
    }
  ];

  // SECTION 3: Find Yourself personality tests
  const personalityTests = [
    {
      id: 1,
      title: "THE TYPEFINDER PERSONALITY",
      description: "Discover your personality type and explore how it affects your career path and relationships.",
      imageUrl: "/images/personality/F1.png"
    },
    {
      id: 2,
      title: "CAREER PROFILER",
      description: "Find the career path that aligns with your strengths, values, and personality traits.",
      imageUrl: "/images/personality/F2.png"
    },
    {
      id: 3,
      title: "TEAM PERSONALITY & WORK STYLE",
      description: "Understand your work style and how you collaborate with team members effectively.",
      imageUrl: "/images/personality/F3.png"
    },
    {
      id: 4,
      title: "THE BIG FIVE PERSONALITY",
      description: "Explore the five major dimensions of personality and how they shape your behavior.",
      imageUrl: "/images/personality/F4.png"
    },
    {
      id: 5,
      title: "7 LOVE STYLE TESTS",
      description: "Discover your approach to relationships and how you express and receive love.",
      imageUrl: "/images/personality/F5.png"
    }
  ];

  // SECTION 4: Projects data
  const projects = [
    "Supply Chain Optimization for E-Commerce",
    "Digital Marketing Campaign Analysis",
    "Customer Experience Improvement Strategy",
    "Financial Modeling for Business Expansion",
    "Business Process Automation using AI",
    "Sustainability and ESG Reporting Framework",
    "HR Policy Development for Hybrid Work Culture",
    "Risk Management and Mitigation Strategy"
  ];

  // SECTION 5: Jobs data
  const jobStatuses = ["Open", "Planned", "On Progress", "Hold", "Completed", "Closed"];
  
  const jobs = [
    {
      id: 1,
      title: "Deadline for Clustar Project",
      date: "Dec 21, 2021",
      time: "6:00 PM"
    },
    {
      id: 2,
      title: "Fixing bugs on Live chat",
      date: "Dec 14, 2021",
      time: "3:00 PM"
    }
  ];

  // Function to handle category change
  const handleCategoryChange = (categoryId: string) => {
    console.log('Setting active category to:', categoryId);
    setActiveCategory(categoryId);
  };

  // Render the active section based on the selected category
  const renderActiveSection = () => {
    console.log('Currently rendering section:', activeCategory);
    
    switch (activeCategory) {
      case 'course':
  return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Find Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover top courses across business, tech, and more to match your career goals.</p>
            </div>

            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="relative h-[260px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
                  >
                    <div className="p-6 h-full flex flex-col">
                      {/* Course icon/image placeholder */}
                      <div className="w-14 h-14 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      {/* Course details */}
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                      <div className="mt-auto flex justify-between items-end">
                        <div>
                          <p className="text-sm text-gray-500">{course.duration}</p>
                          <p className="text-sm text-gray-500">{course.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-800">{course.price}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Call to action overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="text-white font-medium">View Course</span>
                    </div>
                  </div>
            ))}
          </div>
        </div>

            <div className="text-center">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                Find More Courses
              </Link>
            </div>
          </motion.div>
        );
      
      case 'mentorship':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Book Mentorship Sessions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Book a mentorship session to gain expert guidance, enhance your skills, and unlock new opportunities!</p>
            </div>
            
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {mentorshipData.map((item) => (
                  <div
                    key={item.id}
                    className="relative h-[310px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    {/* Background image with dark overlay */}
                    <div className="absolute inset-0">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-80"
                          width={500}
                          height={500}
                          priority
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    
                    {/* Center the title text */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                      <h3 className="text-white text-center text-2xl font-semibold px-2">{item.title}</h3>
                    </div>
                    
                    {/* Description - visible only on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <p className="text-white text-center">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/mentors" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                Find Mentors
              </Link>
            </div>
          </motion.div>
        );
      
      case 'findYourself':
  return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Find Yourself</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover your personality type, work style, and career matches through our assessment tools</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {personalityTests.map((test) => (
                <div
                  key={test.id}
                  className="relative h-[310px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Background image with dark overlay */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gray-700">
                      {/* Use an actual image if available, otherwise a placeholder */}
                      {test.imageUrl ? (
                        <Image 
                          src={test.imageUrl} 
                          alt={test.title} 
                          className="w-full h-full object-cover opacity-80"
                          width={500}
                          height={500}
                          priority
                        />
                      ) : null}
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                  </div>
                  
                  {/* Center the title text */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                    <h3 className="text-white text-center text-2xl font-semibold px-2">{test.title}</h3>
                  </div>
                  
                  {/* Description - visible only on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <p className="text-white text-center">{test.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/find-yourself" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                Find Yourself
              </Link>
            </div>
          </motion.div>
        );
      
      case 'projects':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Apply for Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Gain hands-on experience, build your skills, and work on real-world challenges!</p>
            </div>
            
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative h-[220px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    {/* Project background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700"></div>
                    
                    {/* Project title */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <h3 className="text-white text-center font-semibold px-2">{project}</h3>
                    </div>
                    
                    {/* Call to action overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="text-white font-medium">View Project</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/find-projects" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                Find More Projects
              </Link>
            </div>
          </motion.div>
        );
      
      case 'jobs':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#090914] mb-4 text-center">
              Apply for Jobs & Internships
                    </h2>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Apply for jobs and internships to kickstart your career, gain experience, and grow professionally!
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-gray-50 rounded-lg p-4 w-full md:w-1/3">
                <div className="bg-[#FF9E44] text-black p-4 rounded-lg flex items-center gap-2 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-bold">Explore open roles</span>
                </div>
                
                <div className="space-y-4">
                  {jobStatuses.map((status, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border ${index < 3 ? 'border-gray-800' : 'border-gray-300'}`}>
                        {index < 3 && (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10L9 13L14 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-gray-800">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4 w-full md:w-2/3">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="relative">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 19L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input type="text" placeholder="Search job, Company Name, roles." className="pl-8 pr-4 py-2 w-full border-none text-sm text-gray-500 focus:outline-none" />
                    </div>
                    </div>
                  </div>
                  
                {jobs.map((job) => (
                  <div key={job.id} className="py-6 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-gray-500 text-sm">{job.date} {job.time}</p>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="h-3 bg-gray-100 rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-1/2"></div>
                            </div>
                          </div>
                        ))}
                      </div>
            </div>
          </motion.div>
        );
      
      case 'resume':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4">
              {/* Left column - Simplified text content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-black mb-4">Create a Professional Resume</h2>
                <p className="text-gray-600 mb-8">Make your first impression count with a clear, professional resume that showcases your skills and achievements.</p>
                
                <Link 
                  href="/create-resume" 
                  className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors w-fit"
                >
                  Create my resume
                </Link>
              </div>
              
              {/* Right column - Resume image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-md shadow-lg rounded-lg overflow-hidden px-4">
                  <Image 
                    src="/images/resume-image.png" 
                    alt="Professional Resume Template" 
                    className="w-full h-auto"
                    width={500}
                    height={700}
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    ATS Friendly
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white rounded-lg shadow-sm p-6 md:p-8"
        >
          {/* Services Navigation */}
          <div className="flex justify-center mb-10">
            <div className=" w-auto overflow-x-auto">
              <div className="flex space-x-6 md:space-x-8 justify-center min-w-max p-2 bg-gray-50 rounded-full border border-gray-200 mx-auto">
                {serviceCategories.map((category) => (
          <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 md:px-8 py-2 rounded-full text-sm md:text-base transition-colors ${
                      activeCategory === category.id
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
          </button>
          ))}
        </div>
            </div>
          </div>

          {/* Content Section */}
          {renderActiveSection()}
        </motion.div>
      </div>
    </section>
  );
} 
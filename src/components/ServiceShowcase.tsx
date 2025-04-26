"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceShowcase() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState('mentorship');

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
    { id: 'mentorship', name: '1:1 Mentorship' },
    { id: 'course', name: 'Course' },
    { id: 'findYourself', name: 'Find Yourself' },
    { id: 'projects', name: 'Projects' },
    { id: 'jobs', name: 'Jobs & Internships' },
    { id: 'resume', name: 'Resume' },
    { id: 'industryUpdates', name: 'Industry Updates' },
  ];

  // SECTION 1: Courses data
  const courses = [
    {
      id: 1,
      title: "Strategic Management Essentials",
      duration: "2 Hrs",
      provider: "IIM Nagpur",
      icon: "/images/icons/S1.png"
    },
    {
      id: 2,
      title: "People Management & Leadership",
      duration: "2 Hrs",
      provider: "IIM Bangalore",
      icon: "/images/icons/S2.png"
    },
    {
      id: 3,
      title: "Marketing Management Fundamentals",
      duration: "2 Hrs",
      provider: "IIM Ahmedabad",
      icon: "/images/icons/S3.png"
    },
    {
      id: 4,
      title: "Business Analytics & Decision Making",
      duration: "2 Hrs",
      provider: "IIT Bombay",
      icon: "/images/icons/S4.png"
    },
    {
      id: 5,
      title: "Entrepreneurship & Innovation in Business",
      duration: "2 Hrs",
      provider: "ISB Hyderabad",
      icon: "/images/icons/S5.png"
    },
    {
      id: 6,
      title: "Financial Management & Analysis",
      duration: "2 Hrs",
      provider: "IIM Calcutta",
      icon: "/images/icons/S6.png"
    }
  ];

  // SECTION 2: Find Yourself personality tests
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

  // SECTION 4: Projects data
  const projects = [
    {
      id: 1,
      title: "Supply Chain Optimization for E-Commerce",
      people: "12 Enrolled",
      duration: "Estimated: 5 days",
      icon: "/images/icons/C1.png"
    },
    {
      id: 2,
      title: "Digital Marketing Campaign Analysis",
      people: "8 Enrolled",
      duration: "Estimated: 3 weeks",
      icon: "/images/icons/C2.png"
    },
    {
      id: 3,
      title: "Customer Experience Improvement Strategy",
      people: "10 Enrolled",
      duration: "Estimated: 4 weeks",
      icon: "/images/icons/C3.png"
    },
    {
      id: 4,
      title: "Business Process Automation using AI",
      people: "5 Enrolled",
      duration: "Estimated: 2 weeks",
      icon: "/images/icons/C4.png"
    },
    {
      id: 5,
      title: "Sustainability and ESG Reporting Framework",
      people: "15 Enrolled",
      duration: "Estimated: 6 weeks",
      icon: "/images/icons/C5.png"
    },
    {
      id: 6,
      title: "Risk Management and Mitigation Strategy",
      people: "3 Enrolled",
      duration: "Estimated: 4 weeks",
      icon: "/images/icons/C1.png"
    }
  ];

  // SECTION 5: Jobs data
  const jobs = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "Software Development Private Limited",
      location: "Bangalore",
      workType: "In Office",
      applicants: "2359 Applicants",
      timeLeft: "2 Days Left",
      companyLogo: "/images/jobs/J1.png"
    },
    {
      id: 2,
      title: "Senior Software Developer",
      company: "Software Development Private Limited",
      location: "Mumbai",
      workType: "WFH",
      applicants: "2359 Applicants",
      timeLeft: "2 Days Left",
      companyLogo: "/images/jobs/J2.png"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Software Development Private Limited",
      location: "Hyderabad",
      workType: "In Office",
      applicants: "1890 Applicants",
      timeLeft: "3 Days Left",
      companyLogo: "/images/jobs/J3.png"
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Software Development Private Limited",
      location: "Delhi",
      workType: "WFH",
      applicants: "1567 Applicants",
      timeLeft: "4 Days Left",
      companyLogo: "/images/jobs/J4.png"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Software Development Private Limited",
      location: "Chennai",
      workType: "In Office",
      applicants: "2100 Applicants",
      timeLeft: "2 Days Left",
      companyLogo: "/images/jobs/J5.png"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Software Development Private Limited",
      location: "Kolkata",
      workType: "WFH",
      applicants: "1234 Applicants",
      timeLeft: "5 Days Left",
      companyLogo: "/images/jobs/J6.png"
    }
  ];

  // Adding industry updates data
  const industryUpdates = [
    {
      id: 1,
      title: "New Labelling Norms Put FMCG Sector on Alert",
      category: "Management",
      date: "April 24, 2025",
      readTime: "5 min read",
      image: "/images/industry_updates/IU1.png"
    },
    {
      id: 2,
      title: "GCC workforce in India to reach 3 million by 2030",
      category: "Business",
      date: "April 23, 2025",
      readTime: "4 min read",
      image: "/images/industry_updates/IU2.png"
    },
    {
      id: 3,
      title: "Apple to Shift All U.S.-Bound iPhone Production to India by 2026",
      category: "Tech",
      date: "April 22, 2025",
      readTime: "6 min read",
      image: "/images/industry_updates/IU3.png"
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
              <p className="text-gray-600 mx-auto">Discover top courses across business, tech, and more. Powered by Course Central – your learning partner.<br/>
              Find the right course to match your career goals. Start learning today and unlock your potential</p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-10 justify-center">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="relative w-[360px] h-[189px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 bg-white border border-gray-100"
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="flex items-start mb-1">
                        {/* Course icon/image */}
                        <div className="relative w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                        
                        {/* Course title and tags */}
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {course.title.toLowerCase().includes('management') && (
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Management</span>
                            )}
                            {course.title.toLowerCase().includes('leadership') && (
                              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Leadership</span>
                            )}
                            {course.title.toLowerCase().includes('analytics') && (
                              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Analytics</span>
                            )}
                            {course.title.toLowerCase().includes('entrepreneurship') && (
                              <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">Entrepreneurship</span>
                            )}
                            {course.title.toLowerCase().includes('marketing') && (
                              <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs rounded-full">Marketing</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex items-center pl-14">
                          <div className="relative w-4 h-4 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center mr-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          </div>
                          <p className="text-sm font-bold text-gray-700">{course.provider}</p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/images/svgs/time.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <p className="text-sm font-bold text-gray-800">{course.duration}</p>
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
            
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-10 justify-center">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative w-[360px] h-[189px] rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 bg-white border border-gray-100"
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="flex items-start mb-2">
                        {/* Project icon/image */}
                        <div className="relative w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                        
                        {/* Project title and tags */}
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.title.toLowerCase().includes('optimization') && (
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Optimization</span>
                            )}
                            {project.title.toLowerCase().includes('analytics') && (
                              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Analytics</span>
                            )}
                            {project.title.toLowerCase().includes('strategy') && (
                              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Strategy</span>
                            )}
                            {project.title.toLowerCase().includes('automation') && (
                              <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">Automation</span>
                            )}
                            {project.title.toLowerCase().includes('marketing') && (
                              <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs rounded-full">Marketing</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex items-center">
                          <Image
                            src="/images/svgs/Users.svg"
                            alt="Users"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <p className="text-sm font-bold text-gray-700">{project.people}</p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/images/svgs/time.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <p className="text-sm font-bold text-gray-800">{project.duration}</p>
                        </div>
                      </div>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Jobs & Internships</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover exciting career opportunities and internships to kickstart your professional journey!</p>
            </div>
            
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="w-[320px] h-[290px] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 mx-auto flex flex-col justify-between border border-gray-100"
                  >
                    <div className="flex items-start justify-between space-x-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={job.companyLogo}
                          alt={job.company}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Job Title and Tags - Moved to right */}
                      <div className="flex-1 text-right">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex gap-2 justify-end">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{job.location}</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{job.workType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stacked Company Details at bottom */}
                    <div className="flex flex-col space-y-3 mt-auto pt-4">
                      {/* Company Name */}
                      <p className="text-sm text-gray-600 font-medium">{job.company}</p>
                      
                      {/* Applicants */}
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/images/svgs/Users.svg"
                          alt="Applicants"
                          width={16}
                          height={16}
                        />
                        <span className="text-sm text-gray-600">{job.applicants}</span>
                      </div>

                      {/* Time Left */}
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/images/svgs/time.svg"
                          alt="Time"
                          width={16}
                          height={16}
                        />
                        <span className="text-sm text-gray-600">{job.timeLeft}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/jobs" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                View All Jobs
              </Link>
            </div>
          </motion.div>
        );
      
      case 'resume':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Create a Professional Resume</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Your resume is your first impression—make it count. <br />Showcase your skills, achievements, and goals with clarity.</p>
            </div>
            
            {/* Video Player Section */}
            <div className="max-w-4xl mx-auto px-4 mb-12">
              <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/images/resume-image.png"
                >
                  <source src="/videos/career-company.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/create-resume" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                Create my resume
              </Link>
            </div>
          </motion.div>
        );

      // Add industry updates section after resume case
      case 'industryUpdates':
        return (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Industry Updates</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest trends, insights, and developments across various industries</p>
            </div>
            
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 justify-items-center">
                {industryUpdates.map((update) => (
                  <div
                    key={update.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer w-[320px] hover:scale-105"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={update.image}
                        alt={update.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                          {update.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {update.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <span>{update.date}</span>
                        <div className="flex items-center">
                          <Image
                            src="/images/svgs/time.svg"
                            alt="Read time"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <span>{update.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/industry-updates" 
                className="inline-flex items-center justify-center bg-[#FF9E44] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9E44]/90 transition-colors"
              >
                View All Updates
              </Link>
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
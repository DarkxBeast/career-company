"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function JoinAsMentor() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row mx-auto">
        {/* Left side - Black background */}
        <motion.div 
          className="lg:w-1/2 bg-[#1A1A1A] text-white px-6 sm:px-10 lg:px-20 py-16 lg:py-24 
                    flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[700px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background circle decoration */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full border border-gray-800 -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join us as<br />Mentor
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl mb-12 lg:mb-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Clarity gives you the blocks & components<br className="hidden md:block" />
              you need to create a truly professional<br className="hidden md:block" />
              website.
            </motion.p>
            
            <motion.div 
              className="flex mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FFD700" className="mr-1">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-lg lg:text-xl mb-12 lg:mb-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              With just 20 minutes a week, you can make a real<br className="hidden md:block" />
              difference in someone&apos;s future.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white mr-4 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Founder Name</p>
              <p className="text-sm text-gray-400">Founder, The Career Company</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - White background with form */}
        <motion.div 
          className="lg:w-1/2 bg-white px-6 sm:px-10 lg:px-20 py-16 lg:py-24"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join Us as Mentor
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 lg:mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            If you&apos;re passionate about helping young people build their careers,<br className="hidden md:block" />
            we have the perfect opportunity for you.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-[500px]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <label htmlFor="fullName" className="block text-gray-800 mb-1.5 font-medium">
                Full name <span className="text-gray-800">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-800 mb-1.5 font-medium">
                Email address <span className="text-gray-800">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
            </div>
            
            <div className="mb-7 sm:mb-8">
              <label htmlFor="phone" className="block text-gray-800 mb-1.5 font-medium">
                Phone number <span className="text-gray-800">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
            </div>
            
            <motion.button
              type="submit"
              className="bg-[#FF9E44] hover:bg-[#FF9E44]/90 text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-full font-medium text-lg transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join now
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
} 
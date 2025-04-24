"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState('Institutions');

  const renderForm = () => {
    if (activeTab === 'Institutions') {
      return (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Institution name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Institution name"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Your name"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Designation</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Your Designation"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Email address"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Phone number"
              placeholder=""
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Your name"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Designation</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Your designation"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Phone number"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Email address"
              placeholder=""
            />
          </div>
        </>
      );
    }
  };

  return (
    <section className="w-full overflow-hidden py-6 sm:py-8 md:py-16"> {/* Adjusted padding for mobile */}
      <div className="flex flex-col md:flex-row mx-auto">
        {/* Left side - Contact text with background image */}
        <div className="md:w-1/2 relative min-h-[300px] sm:min-h-[400px] md:min-h-[600px] overflow-hidden flex items-center"> {/* Added flex and items-center */}
          <div className="absolute inset-0">
            <Image
              src="/images/contact-us.jpg"
              alt="Modern office interior"
              fill
              className="object-cover grayscale brightness-75"
              priority
            />
            {/* Darker overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 p-4 sm:p-6 md:p-10 w-full flex flex-col justify-center items-center text-center"> {/* Added w-full */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white max-w-2xl">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl px-4">
              Have questions or need assistance? Feel free to reach out to us. we&apos;re here to help!
            </p>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="md:w-1/2 bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-16"> {/* Adjusted padding for mobile */}
          <div className="max-w-[500px] mx-auto">
            {/* Tab Switcher */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 p-1 rounded-full border-2 border-gray-900 w-fit mx-auto">
              <button
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all ${
                  activeTab === 'Institutions' 
                  ? 'bg-gray-900 text-white' 
                  : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('Institutions')}
              >
                Institutions
              </button>
              <button
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all ${
                  activeTab === 'Companies' 
                  ? 'bg-gray-900 text-white' 
                  : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('Companies')}
              >
                Companies
              </button>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
              {renderForm()}
              <div className="text-center mt-6 sm:mt-8">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
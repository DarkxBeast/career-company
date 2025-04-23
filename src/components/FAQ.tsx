"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What makes TCC different from other career platforms or EdTech sites?",
      answer: "The Career Company offers personalized mentorship from industry professionals, hands-on projects with real-world applications, and a supportive community network. Unlike other platforms, we focus on both skill development and career guidance, with direct connections to industry opportunities."
    },
    {
      id: 2,
      question: "Do I get support on how to apply what I've learned in real life or job scenarios?",
      answer: "Absolutely! Our program includes regular mentorship sessions, case study workshops, and mock interviews to help you apply your knowledge in practical settings. We also provide portfolio development guidance and career coaching throughout your journey."
    },
    {
      id: 3,
      question: "Is this just for people from Tier 1 colleges or tech backgrounds?",
      answer: "Not at all. The Career Company is designed to be inclusive for professionals from all educational backgrounds and career stages. We have specialized tracks for both beginners and experienced professionals, with personalized support to meet you where you are."
    },
    {
      id: 4,
      question: "How do TCC's career tracks work — is it just course access or more?",
      answer: "Our career tracks go beyond traditional courses. Each track includes structured learning modules, regular mentorship sessions, projects with industry relevance, networking events, career counseling, and job placement assistance where applicable."
    },
    {
      id: 5,
      question: "Can I talk to someone before committing to a course or career track?",
      answer: "Yes, we offer free consultation calls with our career advisors to help you determine the right path for your goals. You can discuss your background, aspirations, and get a clear understanding of our programs before making any commitment."
    },
    {
      id: 6,
      question: "What if I get stuck or lose consistency during a program?",
      answer: "We understand that challenges arise. That's why we provide regular check-ins, flexible scheduling options, and dedicated support. If you fall behind, our mentors will work with you to create a personalized catch-up plan to ensure you stay on track toward your goals."
    },
    {
      id: 7,
      question: "Are these certifications enough to switch careers or apply abroad?",
      answer: "Our certifications are recognized by industry partners and come with portfolios of real work, which significantly strengthen your applications. While we can't guarantee specific outcomes, our career transition success rate and international placement track record demonstrate the value employers place on our programs."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about the TCC platform.
          </motion.p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item) => (
            <motion.div 
              key={item.id}
              className="border-b border-gray-200 pb-4 md:pb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * item.id }}
              viewport={{ once: true }}
            >
              <div
                className="flex justify-between items-center w-full text-left py-2 cursor-pointer"
                onClick={() => toggleQuestion(item.id)}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900">
                  {item.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${activeIndex === item.id ? 'rotate-45' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
              
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
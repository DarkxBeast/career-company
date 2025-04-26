import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutUs from "@/components/AboutUs";
import StatsBar from "@/components/StatsBar";
import SuccessStories from "@/components/SuccessStories";
import TopMentors from "@/components/TopMentors";
import JoinAsMentor from "@/components/JoinAsMentor";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ServiceShowcase from "@/components/ServiceShowcase";
import MentorFrom from "@/components/MentorsFrom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Trusted By Section */}
      <MentorFrom />

      {/* About Us Section */}
      <AboutUs />

      {/* Stats Bar */}
      <StatsBar />

      {/* Service Showcase Section */}
      <ServiceShowcase />
      
      {/* Success Stories */}
      <SuccessStories />

      {/* Top Mentors */}
      <TopMentors />
      
      {/* Join As Mentor */}
      <JoinAsMentor />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Contact Us */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
}

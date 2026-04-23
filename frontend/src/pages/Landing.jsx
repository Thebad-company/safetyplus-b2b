import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import IndustrySection from "@/components/landing/IndustrySection";
import CalculatorSection from "@/components/landing/CalculatorSection";
import WorkwearSection from "@/components/landing/WorkwearSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

export default function Landing() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />
            <ExperienceSection />
            <PainPointsSection />
            <SolutionsSection />
            <WhyUsSection />
            <IndustrySection />
            <CalculatorSection />
            <WorkwearSection />
            <SocialProofSection />
            <ProcessSection />
            <ContactFormSection />
            <Footer />
            <FloatingCTA />
        </div>
    );
}
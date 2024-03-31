
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Inspiration } from "next/font/google";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96 antialiased bg-grid-white/[0.0] ">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpComingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}

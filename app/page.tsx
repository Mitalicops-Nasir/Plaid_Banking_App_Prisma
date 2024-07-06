import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import Navbar from "@/components/landing_page/navbar";
import Hero from "@/components/landing_page/Hero";
import Features from "@/components/landing_page/Features";
import Services from "@/components/landing_page/Services";
import Offers from "@/components/landing_page/Offers";
import Testimonial from "@/components/landing_page/Testimonial";
import CTA from "@/components/landing_page/CTA";
import Footer from "@/components/landing_page/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fbcfe8] to-slate-100 overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Offers />
      <Testimonial />
      <CTA/>
      <Footer/>
    </main>
  );
}

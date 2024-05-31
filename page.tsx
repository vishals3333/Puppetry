import Canva from "@/components/Canva";
import Discover from "@/components/Discover";
import FAQ from "@/components/FAQ";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import LiveCount from "@/components/LiveCount";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Turbo from "@/components/Turbo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveCount />
      <Canva />
      <GetApp />
      <Testimonials />
      <Discover />
      <FAQ />
      <Turbo />
      <SocialMedia />


    </>
  );
}

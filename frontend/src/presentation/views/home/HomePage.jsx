import "@/styles/home-style.css";
import { useRef, useState } from "react";
import HeroSection from "./section/HeroSection";
import ProductSection from "./section/ProductSection";
import BenefitSection from "./section/BenefitSection";
import ExploreSection from "./section/ExploreSection";
import TestimonialSection from "./section/TestimonialSection";
import CtaSection from "./section/CtaSection";
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <BenefitSection />
      <ExploreSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MeetTheFlock } from "@/components/sections/MeetTheFlock";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { RobinhoodSection } from "@/components/sections/RobinhoodSection";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { WhyFlamingos } from "@/components/sections/WhyFlamingos";
import { Roadmap } from "@/components/sections/Roadmap";
import { Eligibility } from "@/components/sections/Eligibility";
import { MintSection } from "@/components/sections/MintSection";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col min-h-screen">
        <Hero />
        <MeetTheFlock />
        <HorizontalGallery />
        <RobinhoodSection />
        <SpotlightSection />
        <WhyFlamingos />
        <Roadmap />
        <Eligibility />
        <MintSection />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

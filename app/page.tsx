import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import UserJourney from "@/components/UserJourney";
import BusinessModel from "@/components/BusinessModel";
import TrustSection from "@/components/TrustSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <ProblemSolution />
      <InteractiveDemo />
      <Features />
      <UserJourney />
      <BusinessModel />
      <TrustSection />
      <ChatWidget />
    </div>
  );
}

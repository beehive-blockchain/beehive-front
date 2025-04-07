import HeroSection from "@/components/hero-section";
import NewEra from "@/components/new-era";
import CurrentFundHoldings from "@/components/current-fund";
import TokenSupplyReduction from "@/components/token-supply";
import ReadyToStart from "@/components/ready";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewEra />
      <CurrentFundHoldings />
      <TokenSupplyReduction />
      <ReadyToStart />
      <Footer />
    </>
  );
};
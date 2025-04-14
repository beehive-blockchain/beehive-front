import HeroSection from '@/components/hero-section';
import NewEra from '@/components/new-era';
import CurrentFundHoldings from '@/components/current-fund';
import ReadyToStart from '@/components/ready';
import Footer from '@/components/footer';
import Tokenomics from '@/components/tokenomics';

export default function Home() {
	return (
		<>
			<HeroSection />
			<NewEra />
			<CurrentFundHoldings />
			<Tokenomics />
			<ReadyToStart />
			<Footer />
		</>
	);
}

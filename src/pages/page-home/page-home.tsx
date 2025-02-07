import HeroSection from '@/pages/page-home/page-home-components/hero-section';
import NewEraSection from '@/pages/page-home/page-home-components/new-era-section';
import CurrentFundHoldingsSection from '@/pages/page-home/page-home-components/current-fund-section';
import TokenomicsSection from '@/pages/page-home/page-home-components/tokenomics-section';
import ReadyToStartSection from '@/pages/page-home/page-home-components/ready-section';
import Footer from '@/components/footer';

export default function PageHome() {
	return (
		<>
			<HeroSection />
			<NewEraSection />
			<CurrentFundHoldingsSection />
			<TokenomicsSection />
			<ReadyToStartSection />
			<Footer />
		</>
	);
}

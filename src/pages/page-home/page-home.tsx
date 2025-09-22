import HeroSection from '@/pages/page-home/page-home-components/hero-section';
import NewEraSection from '@/pages/page-home/page-home-components/new-era-section';
import CurrentFundHoldingsSection from '@/pages/page-home/page-home-components/current-fund-section';
import TokenomicsSection from '@/pages/page-home/page-home-components/tokenomics-section';
import ReadyToStartSection from '@/pages/page-home/page-home-components/ready-section';

export default function PageHome() {
	return (
		<div className="pageMargin">
			<HeroSection />
			<NewEraSection />
			<CurrentFundHoldingsSection />
			<TokenomicsSection />
			<ReadyToStartSection />
		</div>
	);
}

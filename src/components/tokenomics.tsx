export default function Tokenomics() {
	return (
		<section className="bg-blanc-bleu font-display dark:bg-bleuFonce p-8">
			<div className="shadow-lg p-8 rounded-lg bg-white">
				<h2 className="heading-2 text-center">Tokenomics</h2>
				<p className="paragraph mt-4 text-center">
					Explore our tokenomics to understand the supply, distribution, and
					utility of our token. Get key insights into our economic model.
				</p>
				<h3 className="heading-3 mt-8 text-center">Token Distribution</h3>
				<p className="paragraph mt-4 text-center">
					Our token distribution is designed to ensure long-term sustainability
					and fair distribution among all stakeholders. The majority of tokens
					are allocated to the public sale, demonstrating our commitment to
					community ownership.
				</p>
				<div className="flex flex-row justify-center items-center mt-8 text-white dark:text-black space-x-8">
					<div className="bg-bleu rounded-lg shadow-lg p-4 flex flex-col justify-between">
						<p className="text-xs">Total Supply</p>
						<p className="text-xl font-semibold">1,000,000,000</p>
					</div>
					<div className="bg-bleu rounded-lg shadow-lg p-4 flex flex-col justify-between">
						<p className="text-xs font-semibold">Initial price</p>
						<p className="text-xl">$1</p>
					</div>
				</div>
				<div id="tokenomics">
					{/* TODO HVA : Box Tokenomics + Camenbert tokenomics*/}
				</div>
			</div>
		</section>
	);
}

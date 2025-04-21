import PieChartInteractive from './ui/pie-chart-interactive';

export default function CurrentFundHoldings() {
	return (
		<>
			<section className="bg-blanc-bleu font-display dark:bg-black p-8">
				<h2 className="heading-2">Current Fund Holdings</h2>
				<p className="paragraph my-4">
					View our current fund holdings for a transparent look at our
					portfolio. Stay informed with real-time updates on our diversified
					investments
				</p>
				<PieChartInteractive />
			</section>
		</>
	);
}

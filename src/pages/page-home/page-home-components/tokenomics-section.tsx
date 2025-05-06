import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import PieChartTokenomics from '@/components/ui/pie-chart-tokenomics';

export default function TokenomicsSection() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
				className="font-display px-8 py-6"
			>
				<div className="shadow-lg dark:shadow-bleu-fonce p-6 rounded-lg bg-blanc-bleu dark:dark:bg-bleu-fonce">
					<h2 className="heading-2 text-center">Tokenomics</h2>
					<p className="paragraph my-6 text-center mb-8">
						Explore our tokenomics to understand the supply, distribution, and
						utility of our token. Get key insights into our economic model.
					</p>
					<PieChartTokenomics />
					<h3 className="heading-3 mt-6 text-center">Token Distribution</h3>
					<p className="paragraph my-6 text-center">
						Our token distribution is designed to ensure long-term
						sustainability and fair distribution among all stakeholders. The
						majority of tokens are allocated to the public sale, demonstrating
						our commitment to community ownership.
					</p>
					<div className="flex flex-col md:flex-row justify-center items-center mt-6 text-white space-y-4 md:space-x-8 md:space-y-0">
						<div className="bg-bleu dark:bg-bleu-fonce rounded-lg shadow-lg dark:shadow-gray-900/80 py-2 flex flex-col items-center justify-between w-40 ">
							<p className="text-xs">Total Supply</p>
							<p className="text-xl font-semibold">1,000,000,000</p>
						</div>
						<div className="bg-bleu dark:bg-bleu-fonce rounded-lg shadow-lg dark:shadow-gray-900/80 py-2 flex flex-col items-center justify-between w-40">
							<p className="text-xs font-semibold">Initial price</p>
							<p className="text-xl">$1</p>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

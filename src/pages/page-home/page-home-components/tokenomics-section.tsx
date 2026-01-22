import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import PieChartTokenomics from '@/components/ui/pie-chart-tokenomics';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card-tokenomics';

export default function TokenomicsSection() {
	return (
		<>
			<motion.div
				id="tokenomics"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
				className="font-display max-w-5xl mx-auto space-y-12"
			>
				<PieChartTokenomics />

				<Card className="w-full">
					<CardHeader className="flex flex-col items-center space-y-2 pb-6">
						<CardTitle className="heading-3 text-center">Token Distribution</CardTitle>
						<CardDescription className="paragraph text-center text-base max-w-3xl">
							Our token distribution is designed to ensure long-term
							sustainability and fair distribution among all stakeholders. The
							majority of tokens are allocated to the public sale, demonstrating
							our commitment to community ownership.
						</CardDescription>
					</CardHeader>
					<CardContent className="pb-10">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
							<div className="glassmorphism p-8 text-center border-white/5 bg-white/5">
								<p className="muted-text uppercase mb-2 tracking-[0.2em]">Total Supply</p>
								<p className="text-4xl font-bold text-neutral-100 tracking-tight">1,000,000,000</p>
							</div>
							<div className="glassmorphism p-8 text-center border-white/5 bg-white/5">
								<p className="muted-text uppercase mb-2 tracking-[0.2em]">Initial Price</p>
								<p className="text-4xl font-bold text-neutral-100 tracking-tight">$1.00</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</>
	);
}

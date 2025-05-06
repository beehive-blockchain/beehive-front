import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import { Button } from '@/components/ui/button';

export function PageEarlyInvestors() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="flex flex-col justify-center items-center font-display px-8 py-6 mt-6"
			>
				<h1 className="heading-1 text-center">Early Investor Opportunity</h1>
				<div className="mt-12 shadow-lg dark:shadow-bleu-fonce p-6 rounded-lg bg-blanc-bleu dark:dark:bg-bleu-fonce">
					<h2 className="heading-3">Invest in beehive</h2>
					<Button variant="bleu" className="rounded-lg text-white w-full mt-4">
						Start Investing
					</Button>
					<p className="paragraph text-sm text-gray-400">
						By investing, you agree to the terms and condittions of the Beehive
						project.
					</p>
				</div>
			</motion.div>
		</>
	);
}

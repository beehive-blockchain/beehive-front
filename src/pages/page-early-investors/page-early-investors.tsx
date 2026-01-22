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
				<div className="mt-12 glassmorphism p-10 max-w-lg w-full border-white/5 backdrop-blur-2xl">
					<h2 className="heading-3 text-center mb-6">Invest in BeeHive</h2>
					<div className="space-y-4">
						<Button variant="bleuFonce" className="rounded-xl text-white w-full py-6 text-lg font-bold shadow-lg shadow-primary-600/20">
							Start Investing
						</Button>
						<p className="muted-text text-xs text-center px-4">
							By investing, you agree to the terms and conditions of the Beehive
							project.
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
}

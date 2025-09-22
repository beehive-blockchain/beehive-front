import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';

export default function TokenSupplyReductionSection() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="font-display"
			>
				<h2 className="heading-2">Token Supply Reduction</h2>
				<p className="paragraph mt-4">
					Our deflationary tokenomics ensure long-term value growth by reducing
					the token supply over time.
				</p>
			</motion.div>
		</>
	);
}

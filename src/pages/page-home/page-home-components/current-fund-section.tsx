import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import PieChartCurrentFunds from '@/components/ui/pie-chart-current-funds';

export default function CurrentFundHoldingsSection() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="font-display px-8 py-6"
			>
				<PieChartCurrentFunds />
			</motion.div>
		</>
	);
}

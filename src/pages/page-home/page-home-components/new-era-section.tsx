import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import shield from '@/assets/3Dicons/shield.png';
import target from '@/assets/3Dicons/target.png';
import wallet from '@/assets/3Dicons/wallet.png';

export default function NewEraSection() {
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
				<div className="max-w-6xl mx-auto">
					<h2 className="heading-2 text-center mb-16">
						A New Era of Investment Management
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="glassmorphism p-8 flex flex-col items-center text-center border-white/5 bg-white/5 transition-transform hover:translate-y-[-8px] duration-300">
							<div className="w-20 h-20 mb-8 flex items-center justify-center bg-primary-600/10 rounded-2xl">
								<img src={shield} alt="Shield Icon" className="w-12 h-12 object-contain" />
							</div>
							<h3 className="heading-3 mb-4">Risk Management</h3>
							<p className="paragraph text-base opacity-90">
								Advanced risk modeling and portfolio optimization to protect
								and grow your investment.
							</p>
						</div>
						
						<div className="glassmorphism p-8 flex flex-col items-center text-center border-white/5 bg-white/5 transition-transform hover:translate-y-[-8px] duration-300">
							<div className="w-20 h-20 mb-8 flex items-center justify-center bg-primary-600/10 rounded-2xl">
								<img src={wallet} alt="Wallet Icon" className="w-12 h-12 object-contain" />
							</div>
							<h3 className="heading-3 mb-4">Global Exposure</h3>
							<p className="paragraph text-base opacity-90">
								Diversified investment across multiple ecosystems and assets worldwide.
							</p>
						</div>

						<div className="glassmorphism p-8 flex flex-col items-center text-center border-white/5 bg-white/5 transition-transform hover:translate-y-[-8px] duration-300">
							<div className="w-20 h-20 mb-8 flex items-center justify-center bg-primary-600/10 rounded-2xl">
								<img src={target} alt="Target Icon" className="w-12 h-12 object-contain" />
							</div>
							<h3 className="heading-3 mb-4">Smart Allocation</h3>
							<p className="paragraph text-base opacity-90">
								Dynamic asset allocation driven by market conditions and
								real-time opportunities.
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

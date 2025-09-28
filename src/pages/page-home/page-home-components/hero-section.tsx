import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';

export default function HeroSection() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="flex flex-col justify-center items-center font-display mt-6"
			>
				<h1 className="heading-1 text-center title-gradient pb-4">
					The Future of Crypto Investment
				</h1>
				<p className="paragraph my-6 text-center">
					BeeHive leverages advanced algorithms and market intelligence to
					deliver exceptional returns in any market condition.
				</p>
				<div className="flex flex-row space-x-8">
					<div className="mt-6 flex flex-col items-center">
						<Button variant="bleuFonce" className="rounded-full text-white mb-6">
							Start Investing
						</Button>
						<p className="font-bold text-paragraph text-center">$X.XB</p>
						<p className="text-paragraph text-center">
							Assets Under Management
						</p>
					</div>
					<div className="mt-6 flex flex-col items-center">
						<Button variant="ghost" className="mb-6 rounded-full">
							Learn more
							<MoveRight />
						</Button>
						<p className="font-bold text-paragraph text-center">XX.X%</p>
						<p className="text-paragraph text-center">Average Annual Return</p>
					</div>
				</div>
			</motion.div>
		</>
	);
}

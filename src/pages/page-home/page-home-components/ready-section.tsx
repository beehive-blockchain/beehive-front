import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReadyToStartSection() {
	return (
		<>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="flex flex-col justify-center items-center font-display"
			>
				<h2 className="heading-2 text-center whitespace-pre">
					Ready To Start Your
					<span className="block text-white whitespace-pre">
						{' '}
						Crypto Journey ?
					</span>
				</h2>
				<p className="paragraph mt-4 text-center">
					Join thousands of investors who have already discovered the potential
					of Beehive. Get started today with as little as $1.
				</p>
				<div className="flex flex-row space-x-8">
					<div className="mt-6 flex flex-col items-center">
						<Button variant="bleu" className="rounded-full text-white mb-6">
							Start Investing
							<MoveRight />
						</Button>
						<p className="font-bold text-paragraph text-center">$X.XB</p>
						<p className="text-paragraph text-center">
							Assets Under Management
						</p>
					</div>
					<div className="mt-6 flex flex-col items-center">
						<Button variant="secondary" className="rounded-full mb-6">
							More informations
						</Button>
						<p className="font-bold text-paragraph text-center">XX.X%</p>
						<p className="text-paragraph text-center">Average Annual Return</p>
					</div>
				</div>
			</motion.div>
		</>
	);
}

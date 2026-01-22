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
					<span className="block text-primary-400 whitespace-pre">
						{' '}
						Crypto Journey?
					</span>
				</h2>
				<p className="paragraph mt-4 text-center max-w-2xl">
					Join thousands of investors who have already discovered the potential
					of Beehive. Get started today with as little as $1.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-4xl px-4">
					<div className="glassmorphism p-10 flex flex-col items-center justify-center text-center border-white/5 bg-white/5 transition-transform hover:scale-[1.02] duration-300">
						<p className="text-4xl font-bold text-neutral-100 mb-2 tracking-tight">$9.4B</p>
						<p className="muted-text uppercase tracking-[0.2em] text-[10px]">
							Assets Under Management
						</p>
						<Button variant="bleuFonce" className="rounded-xl text-white mt-8 px-10 py-7 text-lg font-bold w-full shadow-lg shadow-primary-600/20">
							Start Investing
							<MoveRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
					
					<div className="glassmorphism p-10 flex flex-col items-center justify-center text-center border-white/5 bg-white/5 transition-transform hover:scale-[1.02] duration-300">
						<p className="text-4xl font-bold text-neutral-100 mb-2 tracking-tight">15.2%</p>
						<p className="muted-text uppercase tracking-[0.2em] text-[10px]">
							Average Annual Return
						</p>
						<Button variant="ghost" className="rounded-xl mt-8 border-white/10 text-white/80 hover:text-white hover:bg-white/5 w-full py-7 text-lg font-bold">
							More Information
						</Button>
					</div>
				</div>
			</motion.div>
		</>
	);
}

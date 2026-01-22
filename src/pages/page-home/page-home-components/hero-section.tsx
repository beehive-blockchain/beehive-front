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
				<div className="glassmorphism p-10 mt-12 max-w-4xl w-full border-white/5 bg-white/5">
					<div className="flex flex-col items-center space-y-12">
						{/* First Row: Numbers */}
						<div className="flex flex-row justify-center gap-12 md:gap-32 w-full">
							<div className="text-center">
								<p className="text-4xl md:text-5xl font-bold text-neutral-100 tracking-tight">$9.4B</p>
								<p className="muted-text uppercase tracking-[0.2em] text-[10px] mt-2">
									Assets Under Management
								</p>
							</div>
							<div className="text-center">
								<p className="text-4xl md:text-5xl font-bold text-neutral-100 tracking-tight">15.2%</p>
								<p className="muted-text uppercase tracking-[0.2em] text-[10px] mt-2">
									Average Annual Return
								</p>
							</div>
						</div>

						{/* Second Row: Buttons */}
						<div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
							<Button variant="bleuFonce" className="rounded-xl text-white px-10 py-7 text-lg font-bold shadow-lg shadow-primary-600/20 flex-1 w-full">
								Start Investing
								<MoveRight className="ml-2 h-5 w-5" />
							</Button>
							<Button variant="ghost" className="rounded-xl border-white/10 text-white/80 hover:text-white hover:bg-white/5 py-7 text-lg font-bold flex-1 w-full">
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

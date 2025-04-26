import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

export default function Footer() {
	return (
		<>
			<footer className="text-black dark:text-white p-4 md:p-6">
				<motion.div
					variants={fadeIn}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 1.5 }}
					className="max-w-7xl mx-auto"
				>
					<div className="flex flex-col items-center md:items-baseline md:flex-row justify-between">
						<div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
							<h4 className="text-lg font-bold">BeeHive</h4>
							<p className="mt-2 hidden md:block md:w-2/5">
								A next-generation crypto investment focused on delivering
								exceptional returns through innovative strategies.
							</p>
						</div>
						<nav className="flex items-center gap-6">
							<a href="#about" className="hover:underline">
								About
							</a>
							<a href="#contact" className="hover:underline">
								Contact
							</a>
							<a href="#privacy" className="hover:underline">
								Privacy Policy
							</a>
						</nav>
					</div>
					<hr className="my-4 border-t border-gray-300 dark:border-gray-700" />
					<p className="text-center mt-4">
						&copy; 2025 BeeHive. All rights reserved.
					</p>
				</motion.div>
			</footer>
		</>
	);
}

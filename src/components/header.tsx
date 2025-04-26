import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

export default function Header() {
	return (
		<header className="text-black dark:text-white font-display w-full p-4 shadow-md">
			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.5 }}
				className="max-w-7xl mx-auto flex items-center justify-between"
			>
				{/* Logo */}
				<h2 className="text-lg font-bold">BeeHive</h2>

				{/* Navigation Links */}
				<nav className="hidden md:flex space-x-6 text-sm">
					<a href="#" className="hover:text-gray-500">
						Overview
					</a>
					<a href="#" className="hover:text-gray-500">
						Current Fund Holdings
					</a>
					<a href="#" className="hover:text-gray-500">
						Tokenomics
					</a>
					<a href="#" className="hover:text-gray-500">
						Supply
					</a>
				</nav>

				<Button variant={'bleu'}>Get started</Button>
			</motion.div>
		</header>
	);
}

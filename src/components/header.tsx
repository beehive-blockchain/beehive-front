import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { Link } from 'react-router-dom';
import ConnectWalletButton from '@/hooks/connect-wallet-button.hook';

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
					<Link to="/" className="hover:text-gray-500">
						Home
					</Link>
					<Link to="/earlyInvestors" className="hover:text-gray-500">
						Early Investors
					</Link>
					{/* Change the links when needed */}
					<Link to="/" className="hover:text-gray-500">
						Tokenomics
					</Link>
					<Link to="/" className="hover:text-gray-500">
						Supply
					</Link>
				</nav>

				<ConnectWalletButton />
			</motion.div>
		</header>
	);
}

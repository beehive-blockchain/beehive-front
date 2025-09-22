import { motion } from 'motion/react';
import { fadeIn } from '@/utils/animations';
import { Link } from 'react-router-dom';
import ConnectWalletButton from '@/hooks/connect-wallet-button.hook';
import { AppRoutePaths } from '@/router/app-route-paths';

export default function Header() {
	return (
		<header className="text-white font-display w-full p-4 shadow-md">
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
					<Link to={AppRoutePaths.HOME} className="hover:text-gray-500">
						Home
					</Link>
					<Link to={AppRoutePaths.EARLY_INVESTORS} className="hover:text-gray-500">
						Early Investors
					</Link>
					{/* Change the links when needed */}
					<Link to="/" className="hover:text-gray-500">
						Tokenomics
					</Link>
					<Link to="/" className="hover:text-gray-500">
						Supply
					</Link>
					{/* <Link to={AppRoutePaths.WHITE_PAPER} className="hover:text-gray-500">
						Docs
					</Link> */}
				</nav>

				<ConnectWalletButton />
			</motion.div>
		</header>
	);
}

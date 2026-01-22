import { motion } from 'motion/react';
import { fadeIn } from '@/utils/animations';
import { Link } from 'react-router-dom';
import ConnectWalletButton from '@/hooks/connect-wallet-button.hook';
import { AppRoutePaths } from '@/router/app-route-paths';

export default function Header() {
	return (
		<header className="relative w-full py-6 z-50">
			{/* Animated Specular Lights for Header */}
			<div className="absolute inset-x-0 top-0 h-48 pointer-events-none z-0 opacity-60">
				<div 
					className="absolute top-[-40%] left-[20%] w-[300px] h-[300px] bg-primary-600/10 rounded-full blur-[80px]"
					style={{ animation: 'float-1 12s infinite ease-in-out' }}
				/>
				<div 
					className="absolute top-[-30%] right-[20%] w-[250px] h-[250px] bg-primary-500/8 rounded-full blur-[70px]"
					style={{ animation: 'float-2 15s infinite ease-in-out' }}
				/>
			</div>

			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.5 }}
				className="max-w-6xl mx-auto flex items-center justify-between glass-header rounded-2xl px-10 py-5 relative z-10"
			>
				{/* Logo */}
				<h2 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
					BeeHive
				</h2>

				{/* Navigation Links */}
				<nav className="hidden md:flex space-x-10 text-sm font-medium">
					<Link to={AppRoutePaths.HOME} className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
						Home
					</Link>
					<Link to={AppRoutePaths.EARLY_INVESTORS} className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
						Early Investors
					</Link>
					<Link to="#tokenomics" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
						Tokenomics
					</Link>
					<Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
						Supply
					</Link>
				</nav>

				<div className="flex items-center gap-4">
					<ConnectWalletButton />
				</div>
			</motion.div>
		</header>
	);
}

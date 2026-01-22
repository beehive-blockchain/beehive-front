import Header from './components/header';
import { motion } from 'motion/react';
import { fadeIn } from '@/utils/animations';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

export default function Layout() {
	return (
		<motion.div
			variants={fadeIn}
			initial="hidden"
			animate="visible"
			transition={{ duration: 1.1 }}
			className="min-h-screen relative bg-[#0a0806]"
			style={{
				backgroundImage:
					'linear-gradient(to left bottom, #0a0806, #0e0b08, #120e0a, #16110c, #1a1410, #1f1814, #241c18, #2a211d)',
			}}
		>
			{/* Sparkling Stars Overlay */}
			<div className="stars-overlay" />

			{/* Global Fixed Ambient Lights */}
			<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
				<div 
					className="absolute top-[10%] left-[-15%] w-[80vw] h-[80vw] bg-primary-900/10 rounded-full blur-[160px]"
					style={{ animation: 'pulse-glow 10s infinite ease-in-out' }}
				/>
				<div 
					className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary-800/10 rounded-full blur-[140px]"
					style={{ animation: 'pulse-glow 15s infinite ease-in-out' }}
				/>
			</div>

			{/* Scrolling Progression Orbs - Clipped to content height */}
			<div className="absolute inset-x-0 top-0 z-0 pointer-events-none w-full h-full overflow-hidden min-h-full">
				<div className="absolute top-[800px] left-[70%] w-[500px] h-[500px] bg-primary-700/5 rounded-full blur-[120px]" />
				<div className="absolute top-[1600px] left-[10%] w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[140px]" />
				<div className="absolute top-[2800px] right-[20%] w-[550px] h-[550px] bg-primary-500/5 rounded-full blur-[130px] opacity-40" />
			</div>

			<div className="relative z-10 flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow">
					<Outlet />
				</main>
				<Footer />
			</div>
		</motion.div>
	);
}

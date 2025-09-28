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
			className="min-h-screen"
			style={{
				backgroundImage:
					'linear-gradient(to left bottom, #000207, #080c16, #0f1625, #162034, #1d2a43, #1f2c45, #212e47, #233049, #202d46, #1d2a43, #1a2740, #17243d)',
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</motion.div>
	);
}

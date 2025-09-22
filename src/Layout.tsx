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
					'linear-gradient(to left bottom, #000207, #090e17, #101623, #141d2f, #18243c, #182746, #182b50, #192e5a, #152e63, #102f6b, #0c2e74, #092e7c)',
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</motion.div>
	);
}

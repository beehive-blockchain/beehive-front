import Header from './components/header';
import { useAutoTheme } from '@/hooks/use-auto-theme';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { Outlet } from 'react-router-dom';

export default function Layout() {
	useAutoTheme();

	const isDarkMode = document.documentElement.classList.contains('dark');

	const gradient = isDarkMode
		? 'linear-gradient(to left bottom, #000207, #090e17, #101623, #141d2f, #18243c, #182746, #182b50, #192e5a, #152e63, #102f6b, #0c2e74, #092e7c)'
		: 'linear-gradient(to left bottom, #ffffff, #f5f7fa, #e4eaf1, #d5dce7, #c7cfdc)';

	return (
		<motion.div
			variants={fadeIn}
			initial="hidden"
			animate="visible"
			transition={{ duration: 1.1 }}
			className="min-h-screen"
			style={{
				backgroundImage: gradient,
			}}
		>
			<Header />
			<Outlet />
		</motion.div>
	);
}

import Layout from '@/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutePaths } from './app-route-paths';
import { PageEarlyInvestors } from '@/pages/page-early-investors/page-early-investors';
import PageHome from '@/pages/page-home/page-home';

const router = createBrowserRouter([
	{
		path: AppRoutePaths.HOME,
		element: <Layout />,
		children: [
			{ index: true, element: <PageHome /> },
			{
				path: AppRoutePaths.EARLY_INVESTORS,
				element: <PageEarlyInvestors />,
			},
			// {
			// 	path: AppRoutePaths.WHITE_PAPER,
			// 	element: <PageWhitePaper />,
			// },
		],
	},
]);

export function AppRouter() {
	return <RouterProvider router={router} />;
}

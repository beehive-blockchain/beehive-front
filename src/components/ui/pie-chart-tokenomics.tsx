'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card-tokenomics';
import {
    ChartConfig,
    ChartContainer, ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
const desktopData = [
	{ crypto: 'PublicSale', desktop: 50, fill: 'var(--color-PublicSale)' },
	{ crypto: 'Community', desktop: 15, fill: 'var(--color-Community)' },
	{ crypto: 'Team', desktop: 15, fill: 'var(--color-Team)' },
	{ crypto: 'Ecosystem', desktop: 10, fill: 'var(--color-Ecosystem)' },
	{
		crypto: 'PrivateInvestors',
		desktop: 10,
		fill: 'var(--color-PrivateInvestors)',
	},
];

const chartConfig = {
	PublicSale: {
		label: 'Public Sale',
		color: 'var(--chart-btc)',
	},
	Community: {
		label: 'Community',
		color: 'var(--chart-eth)',
	},
	Team: {
		label: 'Team',
		color: 'var(--color-bleu)',
	},
	Ecosystem: {
		label: 'Ecosystem',
		color: 'var(--chart-stbl)',
	},
	PrivateInvestors: {
		label: 'Private Investors',
		color: 'var(--chart-alt)',
	},
} satisfies ChartConfig;

export function Component() {
	const id = 'pie-interactive';
	const [activeCrypto, setActiveCrypto] = React.useState(desktopData[0].crypto);

	const activeIndex = React.useMemo(
		() => desktopData.findIndex((item) => item.crypto === activeCrypto),
		[activeCrypto]
	);
	const months = React.useMemo(
		() => desktopData.map((item) => item.crypto),
		[]
	);

	return (
		<Card data-chart={id} className="flex flex-col w-full">
			<CardHeader className="flex flex-col items-center space-y-2 pb-6">
				<CardTitle className="heading-3 text-center">Tokenomics</CardTitle>
				<CardDescription className="paragraph text-center text-base max-w-2xl">
					Explore our tokenomics to understand the supply, distribution, and
					utility of our token. Get key insights into our economic model.
				</CardDescription>
				<div className="flex w-full justify-end mt-4">
					<Select value={activeCrypto} onValueChange={setActiveCrypto}>
						<SelectTrigger
							className="h-9 w-[180px] rounded-xl pl-3 bg-white/5 border-white/10 text-neutral-200"
							aria-label="Select a value"
						>
							<SelectValue placeholder="Select segment" />
						</SelectTrigger>
						<SelectContent align="end" className="rounded-xl bg-neutral-900 border-white/10">
							{months.map((key) => {
								const config = chartConfig[key as keyof typeof chartConfig];

								if (!config) {
									return null;
								}

								return (
									<SelectItem
										key={key}
										value={key}
										className="rounded-lg [&_span]:flex"
									>
										<div className="flex items-center gap-2 text-xs">
											<span
												className="flex h-3 w-3 shrink-0 rounded-sm"
												style={{
													backgroundColor: `var(--color-${key})`,
												}}
											/>
											<p className="truncate text-white">{config?.label}</p>
										</div>
									</SelectItem>
								);
							})}
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent className="flex flex-1 justify-center pb-0">
				<ChartContainer
					id={id}
					config={chartConfig}
					className="mx-auto aspect-square w-full max-w-[300px] min-h-[300px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={desktopData}
							dataKey="desktop"
							nameKey="crypto"
							innerRadius={60}
							strokeWidth={5}
							activeIndex={activeIndex}
							activeShape={({
								outerRadius = 0,
								...props
							}: PieSectorDataItem) => (
								<g>
									<Sector {...props} outerRadius={outerRadius + 10} />
									<Sector
										{...props}
										outerRadius={outerRadius + 25}
										innerRadius={outerRadius + 12}
									/>
								</g>
							)}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-white text-3xl font-bold"
												>
													{desktopData[activeIndex].desktop.toLocaleString()}%
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-white/70 text-sm"
												>
													{desktopData[activeIndex].crypto}
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
export default function PieChartTokenomics() {
	return (
		<>
			<Component />
		</>
	);
}

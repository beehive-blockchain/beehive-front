'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import { Card, CardContent, CardHeader } from '@/components/ui/card-tokenomics';
import {
	ChartConfig,
	ChartContainer,
	ChartStyle,
	ChartTooltip,
	ChartTooltipContent,
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
		<Card data-chart={id} className="flex flex-col">
			<ChartStyle id={id} config={chartConfig} />
			<CardHeader className="flex-row items-start space-y-0 pb-0">
				<Select value={activeCrypto} onValueChange={setActiveCrypto}>
					<SelectTrigger
						className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
						aria-label="Select a value"
					>
						<SelectValue placeholder="Select month" />
					</SelectTrigger>
					<SelectContent align="end" className="rounded-xl">
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
			</CardHeader>
			<CardContent className="flex flex-1 justify-center pb-0">
				<ChartContainer
					id={id}
					config={chartConfig}
					className="mx-auto aspect-square w-full max-w-[300px]"
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

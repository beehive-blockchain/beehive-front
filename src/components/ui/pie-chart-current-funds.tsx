'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
	{ crypto: 'Bitcoin', desktop: 60, fill: 'var(--color-Bitcoin)' },
	{ crypto: 'Ethereum', desktop: 15, fill: 'var(--color-Ethereum)' },
	{ crypto: 'Stablecoins', desktop: 15, fill: 'var(--color-Stablecoins)' },
	{ crypto: 'Altcoins', desktop: 10, fill: 'var(--color-Altcoins)' },
];

const chartConfig = {
	Bitcoin: {
		label: 'Bitcoin',
		color: 'var(--chart-btc)',
	},
	Ethereum: {
		label: 'Ethereum',
		color: 'var(--chart-eth)',
	},
	Stablecoins: {
		label: 'Stablecoins',
		color: 'var(--chart-stbl)',
	},
	Altcoins: {
		label: 'Altcoins',
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
			<CardHeader className="flex flex-col items-center space-y-2 pb-6">
				<CardTitle className="heading-3 text-center">Current Fund Holdings</CardTitle>
				<CardDescription className="paragraph text-center text-base max-w-2xl">
					View our current fund holdings for a transparent look at our
					portfolio. Stay informed with real-time updates on our diversified
					investments.
				</CardDescription>
				<div className="flex w-full justify-end mt-4">
					<Select value={activeCrypto} onValueChange={setActiveCrypto}>
						<SelectTrigger
							className="h-9 w-[160px] rounded-xl pl-3 bg-white/5 border-white/10 text-neutral-200"
							aria-label="Select a value"
						>
							<SelectValue placeholder="Select asset" />
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
export default function PieChartCurrentFunds() {
	return (
		<>
			<Component />
		</>
	);
}

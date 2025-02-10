"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { crypto: "solana", tvl: 10, fill: "var(--color-solana)" },
  { crypto: "usdc", tvl: 10, fill: "var(--color-usdc)" },
  { crypto: "other", tvl: 5, fill: "var(--color-other)" },
  { crypto: "bitcoin", tvl: 60, fill: "var(--color-bitcoin)" },
  { crypto: "ethereum", tvl: 15, fill: "var(--color-ethereum)" },
]

const chartConfig = {
  tvl: {
    label: "$ TVL",
  },
  solana: {
    label: "Solana",
    color: "#22c55e",
  },
  usdc: {
    label: "USDC",
    color: "#2563eb",
  },
  other: {
    label: "Other",
    color: "#f87171",
  },
  bitcoin: {
    label: "Bitcoin",
    color: "#fbbf24",
  },
  ethereum: {
    label: "Ethereum",
    color: "#d1d5db",
  },
} satisfies ChartConfig

export function MyPieChartTokenomics() {
  const totalValueLocked = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tvl, 0)
  }, [])

  return (
    <Card className="flex flex-col rounded-none border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Vault repartition</CardTitle>
        <CardDescription>$ TVL</CardDescription>
      </CardHeader>
      <CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="tvl"
                nameKey="crypto"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalValueLocked.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            $ TVL
                          </tspan>
                        </text>
                      )
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </CardHeader>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total value locked
        </div>
      </CardFooter>
    </Card>
  )
}

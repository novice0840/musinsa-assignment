"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Cell,
  LabelList,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useApplicationStatistic } from "../hooks/useApplicationStatistic";

export const description = "A bar chart with a custom label";

const chartConfig = {
  applicantCount: {
    label: "지원자 수",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

export function JobChart() {
  const { data } = useApplicationStatistic();
  const chartData = data || [];

  if (!data || data.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>지원자 통계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            데이터가 없습니다.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>지원자 통계</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="description"
              type="category"
              tickLine={false}
              tickMargin={10}
              hide
              axisLine={false}
            />
            <XAxis dataKey="applicantCount" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="applicantCount"
              layout="vertical"
              fill="var(--color-applicantCount)"
              radius={4}
              minPointSize={5}
            >
              <LabelList
                dataKey="description"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
              <LabelList
                dataKey="applicantCount"
                position="insideRight"
                offset={8}
                className="fill-white"
                fontSize={12}
                formatter={(value: number) =>
                  value === 0 ? "0명" : `${value}명`
                }
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

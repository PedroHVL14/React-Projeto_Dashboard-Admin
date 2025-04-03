
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { name: "Jan", views: 4000, articles: 12 },
  { name: "Fev", views: 3000, articles: 10 },
  { name: "Mar", views: 2000, articles: 8 },
  { name: "Abr", views: 2780, articles: 9 },
  { name: "Mai", views: 1890, articles: 7 },
  { name: "Jun", views: 2390, articles: 8 },
  { name: "Jul", views: 3490, articles: 11 },
  { name: "Ago", views: 3490, articles: 12 },
  { name: "Set", views: 3490, articles: 14 },
  { name: "Out", views: 4000, articles: 12 },
  { name: "Nov", views: 5000, articles: 15 },
  { name: "Dez", views: 7000, articles: 20 },
];

const weekData = [
  { name: "Seg", views: 1000, articles: 3 },
  { name: "Ter", views: 1200, articles: 4 },
  { name: "Qua", views: 1300, articles: 3 },
  { name: "Qui", views: 800, articles: 2 },
  { name: "Sex", views: 1500, articles: 4 },
  { name: "Sab", views: 1000, articles: 2 },
  { name: "Dom", views: 700, articles: 1 },
];

export function AnalyticsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Análise de Desempenho</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Semanal</TabsTrigger>
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="weekly">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weekData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

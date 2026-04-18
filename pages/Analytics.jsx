import React from "react";
import { Card, CardBody, CardHeader, Chip, Progress, Button } from "@heroui/react";

const kpis = [
  { id: "k1", label: "Total companies", value: 482, delta: "+6%" },
  { id: "k2", label: "New this quarter", value: 37, delta: "+12%" },
  { id: "k3", label: "Total funding", value: "$2.4B", delta: "+4%" },
  { id: "k4", label: "Active researchers", value: 163, delta: "+3%" },
];

const sections = [
  { key: "ecosystem", title: "Ecosystem", desc: "High-level overview of activity and growth across KW.", href: "/analytics/ecosystem" },
  { key: "sectors", title: "Sectors", desc: "Breakdowns and trends by sector and sub-sector.", href: "/analytics/sectors" },
  { key: "geography", title: "Geography", desc: "Activity by city and neighborhood clusters.", href: "/analytics/geography" },
  { key: "investors", title: "Investors", desc: "Who’s active, where they invest, and round dynamics.", href: "/analytics/investors" },
  { key: "trends", title: "Trends", desc: "Momentum, hiring, and news velocity over time.", href: "/analytics/trends" },
];

export default function Analytics() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">Explore the ecosystem with curated dashboards</p>
          </div>
        </div>

        {/* KPI snapshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardBody className="p-5">
                <div className="text-sm text-[var(--color-text)]/70">{k.label}</div>
                <div className="text-2xl font-semibold mt-1">{k.value}</div>
                <Chip size="sm" color="success" variant="flat" className="mt-2 rounded-full">{k.delta} QoQ</Chip>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Dashboards */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Dashboards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s) => (
              <Card key={s.key} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors">
                <CardBody className="p-5 flex flex-col gap-2">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <div className="text-sm text-[var(--color-text)]/80">{s.desc}</div>
                  <div className="mt-2">
                    <Button as="a" href={s.href} size="sm" className="rounded-xl">Open</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Trend highlights (static demo) */}
        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardHeader className="px-6 pt-6 pb-2">
            <h2 className="text-lg font-semibold">Highlights</h2>
          </CardHeader>
          <CardBody className="p-6 pt-2 grid gap-3">
            {[
              { label: "AI sector share", value: 36 },
              { label: "Fintech hiring index", value: 62 },
              { label: "News velocity", value: 54 },
            ].map((h) => (
              <div key={h.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{h.label}</span>
                  <span className="text-[var(--color-text)]/70">{h.value}%</span>
                </div>
                <Progress
                  aria-label={h.label}
                  value={h.value}
                  classNames={{
                    base: "h-2",
                    track: "bg-[var(--color-background)]/60",
                    indicator: "bg-[var(--color-primary)]",
                  }}
                />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

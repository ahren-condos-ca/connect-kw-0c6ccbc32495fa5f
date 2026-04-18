import React from "react";
import { Card, CardBody, CardHeader, Progress, Chip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

const kpis = [
  { id: "k1", label: "Total companies", value: 482, change: "+6%" },
  { id: "k2", label: "New this quarter", value: 37, change: "+12%" },
  { id: "k3", label: "Total funding", value: "$2.4B", change: "+4%" },
  { id: "k4", label: "Active researchers", value: 163, change: "+3%" },
];

const segments = [
  { id: "s1", name: "AI", share: 36 },
  { id: "s2", name: "Quantum", share: 12 },
  { id: "s3", name: "Fintech", share: 22 },
  { id: "s4", name: "ClimateTech", share: 18 },
  { id: "s5", name: "Other", share: 12 },
];

export default function Analyticsecosystem() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Analytics: Ecosystem</h1>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardBody className="p-5">
                <div className="text-sm text-[var(--color-text)]/70">{k.label}</div>
                <div className="text-2xl font-semibold mt-1">{k.value}</div>
                <Chip size="sm" color="success" variant="flat" className="mt-2 rounded-full">
                  {k.change} QoQ
                </Chip>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Segment distribution */}
        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardHeader className="px-6 pt-6 pb-2">
            <h2 className="text-lg font-semibold">Sector distribution</h2>
          </CardHeader>
          <CardBody className="p-6 pt-2 grid gap-3">
            {segments.map((s) => (
              <div key={s.id}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{s.name}</span>
                  <span className="text-[var(--color-text)]/70">{s.share}%</span>
                </div>
                <Progress
                  aria-label={`${s.name} share`}
                  value={s.share}
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

        {/* Top movers */}
        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardHeader className="px-6 pt-6 pb-2">
            <h2 className="text-lg font-semibold">Top movers (last 30 days)</h2>
          </CardHeader>
          <CardBody className="p-0">
            <Table aria-label="Top movers">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>SECTOR</TableColumn>
                <TableColumn>CHANGE</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="m1">
                  <TableCell>Acme AI</TableCell>
                  <TableCell>AI</TableCell>
                  <TableCell>
                    <Chip size="sm" color="success" variant="flat" className="rounded-full">+18%</Chip>
                  </TableCell>
                </TableRow>
                <TableRow key="m2">
                  <TableCell>QuantumX</TableCell>
                  <TableCell>Quantum</TableCell>
                  <TableCell>
                    <Chip size="sm" color="success" variant="flat" className="rounded-full">+12%</Chip>
                  </TableCell>
                </TableRow>
                <TableRow key="m3">
                  <TableCell>GreenGrid</TableCell>
                  <TableCell>ClimateTech</TableCell>
                  <TableCell>
                    <Chip size="sm" color="warning" variant="flat" className="rounded-full">+6%</Chip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

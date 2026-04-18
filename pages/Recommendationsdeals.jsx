import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Recommendationsdeals() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="space-y-6">
      <h1 className="text-2xl font-bold">Recommended Deals</h1>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="px-6 pt-6 pb-0"><h2 className="text-xl font-semibold">Opportunities</h2></CardHeader>
      <CardBody className="p-6 pt-4">
      <Table aria-label="Recommended deals">
      <TableHeader>
      <TableColumn>COMPANY</TableColumn>
      <TableColumn>ROUND</TableColumn>
      <TableColumn>SECTOR</TableColumn>
      </TableHeader>
      <TableBody>
      <TableRow key="1"><TableCell>Acme AI</TableCell><TableCell>Seed</TableCell><TableCell>AI</TableCell></TableRow>
      <TableRow key="2"><TableCell>QuantumX</TableCell><TableCell>Series A</TableCell><TableCell>Quantum</TableCell></TableRow>
      <TableRow key="3"><TableCell>Finify</TableCell><TableCell>Pre-Seed</TableCell><TableCell>Fintech</TableCell></TableRow>
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Searchevents() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="space-y-6">
      <h1 className="text-2xl font-bold">Search: Events</h1>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="px-6 pt-6 pb-0"><h2 className="text-xl font-semibold">Upcoming & past</h2></CardHeader>
      <CardBody className="p-6 pt-4">
      <Table aria-label="Events results">
      <TableHeader>
      <TableColumn>EVENT</TableColumn>
      <TableColumn>DATE</TableColumn>
      <TableColumn>LOCATION</TableColumn>
      </TableHeader>
      <TableBody>
      <TableRow key="1"><TableCell>Founders Meetup</TableCell><TableCell>2026-04-21</TableCell><TableCell>Waterloo</TableCell></TableRow>
      <TableRow key="2"><TableCell>AI Demo Day</TableCell><TableCell>2026-05-12</TableCell><TableCell>Kitchener</TableCell></TableRow>
      <TableRow key="3"><TableCell>Fintech Forum</TableCell><TableCell>2026-06-09</TableCell><TableCell>Toronto</TableCell></TableRow>
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

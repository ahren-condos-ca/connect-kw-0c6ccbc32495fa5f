import { Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Searchinvestors() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="space-y-6">
      <h1 className="text-2xl font-bold">Search: Investors</h1>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="px-6 pt-6 pb-0"><h2 className="text-xl font-semibold">Results</h2></CardHeader>
      <CardBody className="p-6 pt-4">
      <Table aria-label="Investors results">
      <TableHeader>
      <TableColumn>NAME</TableColumn>
      <TableColumn>TYPE</TableColumn>
      <TableColumn>HQ</TableColumn>
      </TableHeader>
      <TableBody>
      <TableRow key="1"><TableCell>KW Ventures</TableCell><TableCell>VC</TableCell><TableCell>Waterloo</TableCell></TableRow>
      <TableRow key="2"><TableCell>Angel North</TableCell><TableCell>Angel</TableCell><TableCell>Kitchener</TableCell></TableRow>
      <TableRow key="3"><TableCell>Capital Q</TableCell><TableCell>Growth</TableCell><TableCell>Toronto</TableCell></TableRow>
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

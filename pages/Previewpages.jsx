import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";

export default function Previewpages() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="space-y-6">
      <h1 className="text-2xl font-bold">Preview Pages</h1>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="px-6 pt-6 pb-0">
      <h2 className="text-xl font-semibold">Route preview utility</h2>
      </CardHeader>
      <CardBody className="p-6 pt-4 text-[var(--color-text)]/80">
      Use the sidebar to navigate through pages. Each page has been scaffolded with a basic layout so you can preview the route.
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

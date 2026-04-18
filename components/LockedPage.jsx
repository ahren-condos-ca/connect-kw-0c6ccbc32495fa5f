import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { useLocation } from "react-router-dom";

export default function LockedPage() {
  const location = useLocation();
  const path = location?.pathname || "";

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center px-6 py-16">
      <Card className="max-w-lg w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
        <CardBody className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[var(--color-text)]">Preview placeholder</h1>
            <p className="text-[var(--color-text)]/80">
              This route is ready, but the page content hasn’t been generated yet.
            </p>
            <p className="text-[var(--color-text)]/60 text-sm">Route: <span className="font-mono">{path}</span></p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button as="a" href="/" variant="flat" className="rounded-full">Back to Home</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

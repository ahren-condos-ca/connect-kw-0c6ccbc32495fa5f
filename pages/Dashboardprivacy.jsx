import { Button, Card, CardBody, CardHeader, Switch } from "@heroui/react";
import React from "react";

export default function Dashboardprivacy() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="space-y-6">
      <h1 className="text-2xl font-bold">Privacy</h1>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="px-6 pt-6 pb-0"><h2 className="text-xl font-semibold">Visibility</h2></CardHeader>
      <CardBody className="p-6 pt-4 space-y-4">
      <div className="flex items-center justify-between">
      <span>Show profile publicly</span>
      <Switch defaultSelected size="sm" />
      </div>
      <div className="flex items-center justify-between">
      <span>Receive messages</span>
      <Switch size="sm" />
      </div>
      <div>
      <Button className="rounded-full">Save preferences</Button>
      </div>
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

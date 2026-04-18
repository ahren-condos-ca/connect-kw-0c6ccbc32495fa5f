import React from "react";
import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";

const shortcuts = [
  { key: "profile", title: "Profile", href: "/dashboard/profile", desc: "Edit your public profile" },
  { key: "updates", title: "Updates", href: "/dashboard/updates", desc: "Manage your feed" },
  { key: "privacy", title: "Privacy", href: "/dashboard/privacy", desc: "Control visibility" },
  { key: "analytics", title: "Analytics", href: "/dashboard/analytics", desc: "Your KPIs" },
  { key: "delegation", title: "Delegation", href: "/dashboard/delegation", desc: "Invite collaborators" },
];

const updates = [
  { id: "u1", when: "2h ago", text: "Acme AI raised a Series A ($10M)." },
  { id: "u2", when: "1d ago", text: "QuantumX posted 3 new roles." },
  { id: "u3", when: "3d ago", text: "City of Waterloo announced a new innovation hub." },
];

export default function Dashboard() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">Welcome back. Here’s what’s changed.</p>
          </div>
          <div className="flex gap-2">
            <Button as="a" href="/dashboard/profile" variant="flat" className="rounded-xl">Edit profile</Button>
            <Button as="a" href="/dashboard/analytics" className="rounded-xl">View my analytics</Button>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{label:"Saved companies",value:18},{label:"Alerts",value:6},{label:"Following",value:24},{label:"Recommendations",value:12}].map((k,i)=> (
            <Card key={i} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardBody className="p-5">
                <div className="text-sm text-[var(--color-text)]/70">{k.label}</div>
                <div className="text-2xl font-semibold mt-1">{k.value}</div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recent updates */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl lg:col-span-2">
            <CardHeader className="px-6 pt-6 pb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent updates</h2>
              <Button as="a" href="/dashboard/updates" size="sm" variant="flat" className="rounded-xl">Open feed</Button>
            </CardHeader>
            <CardBody className="p-6 pt-2 grid gap-3">
              {updates.map((u) => (
                <Card key={u.id} className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl">
                  <CardBody className="p-4 flex items-center gap-3">
                    <Chip size="sm" variant="flat" className="rounded-full w-fit">{u.when}</Chip>
                    <div className="text-[var(--color-text)]/85">{u.text}</div>
                    <div className="ml-auto">
                      <Button size="sm" variant="flat" className="rounded-xl">View</Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </CardBody>
          </Card>

          {/* Shortcuts */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Shortcuts</h2></CardHeader>
            <CardBody className="p-6 pt-2 grid grid-cols-1 gap-2">
              {shortcuts.map((s) => (
                <Button key={s.key} as="a" href={s.href} variant="flat" className="justify-start rounded-xl">
                  <div className="text-left">
                    <div className="font-medium">{s.title}</div>
                    <div className="text-xs text-[var(--color-text)]/70">{s.desc}</div>
                  </div>
                </Button>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

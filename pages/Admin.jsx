import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <>
      {[{ path: "/admin/companies", title: "Companies", count: 1280, desc: "Create, edit, and verify companies" },
      { path: "/admin/people", title: "People", count: 3420, desc: "Manage people profiles and roles" },
      { path: "/admin/investors", title: "Investors", count: 220, desc: "Manage investors and funds" },
      { path: "/admin/organizations", title: "Organizations", count: 140, desc: "Universities, programs, incubators" },
      { path: "/admin/events", title: "Events", count: 58, desc: "Publish and manage events" },
      { path: "/admin/users", title: "Users", count: 34, desc: "Portal users, roles, and access" }].map((item) => (
      <Card key={item.path} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-4">
      <div>
      <h3 className="text-[var(--color-text)] font-semibold">{item.title}</h3>
      <p className="text-[var(--color-text)]/70 text-sm mt-1">{item.desc}</p>
      </div>
      <Chip size="sm" className="bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]">{item.count}</Chip>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <Button as={Link} to={item.path} color="primary" className="rounded-xl w-full">Open</Button>
      </CardBody>
      </Card>
      ))}
      </>
      </div>
    </div>
  );
}

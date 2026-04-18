import React from "react";
import { Card, CardBody, CardHeader, Avatar } from "@heroui/react";

const values = [
  { id: "v1", title: "Open data, responsibly", desc: "We surface public signals while respecting privacy and consent." },
  { id: "v2", title: "Local first", desc: "Purpose-built for the Waterloo Region innovation community." },
  { id: "v3", title: "Connected by design", desc: "Entities are linked as a living graph of relationships." },
];

const stats = [
  { id: "s1", label: "Companies tracked", value: "480+" },
  { id: "s2", label: "Investors mapped", value: "120+" },
  { id: "s3", label: "Active researchers", value: "160+" },
];

const team = [
  { id: "t1", name: "Alex Kim", role: "Product", initials: "AK" },
  { id: "t2", name: "Riley Chen", role: "Engineering", initials: "RC" },
  { id: "t3", name: "Morgan Lee", role: "Community", initials: "ML" },
];

export default function About() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">About Connect KW</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">Mapping the KW innovation ecosystem</p>
          </div>
        </div>

        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardBody className="p-6 text-[var(--color-text)]/85 space-y-3">
            <p>
              Connect KW helps founders, researchers, investors, and builders discover the people and organizations shaping the Waterloo Region. We aggregate public signals and curate context so you can focus on what matters: building relationships and making progress.
            </p>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v) => (
            <Card key={v.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardBody className="p-5">
                <div className="text-lg font-semibold">{v.title}</div>
                <div className="text-sm text-[var(--color-text)]/80 mt-1">{v.desc}</div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">By the numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <Card key={s.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                <CardBody className="p-5">
                  <div className="text-sm text-[var(--color-text)]/70">{s.label}</div>
                  <div className="text-2xl font-semibold mt-1">{s.value}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((m) => (
              <Card key={m.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                <CardBody className="p-5 flex items-center gap-4">
                  <Avatar name={m.initials} className="w-10 h-10" />
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-[var(--color-text)]/70">{m.role}</div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

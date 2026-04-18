import React from "react";
import { Button, Card, CardBody, CardHeader, Chip, Input, Select, SelectItem, Tabs, Tab } from "@heroui/react";

const jobs = [
  { id: "j1", role: "ML Engineer", company: "Acme AI", match: 92 },
  { id: "j2", role: "Quantum Physicist", company: "QuantumX", match: 88 },
];
const deals = [
  { id: "d1", title: "Seed syndicate (AI)", lead: "KW Ventures", match: 86 },
  { id: "d2", title: "Pre-seed climate SPV", lead: "Angel North", match: 79 },
];
const founders = [
  { id: "f1", name: "Jane Doe", focus: "Applied AI", match: 91 },
  { id: "f2", name: "Omar Singh", focus: "Clean energy", match: 82 },
];

export default function Recommendations() {
  const [tab, setTab] = React.useState("jobs");
  const [q, setQ] = React.useState("");
  const [loc, setLoc] = React.useState("");

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Recommendations</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">Personalized suggestions based on your profile and activity</p>
          </div>
        </div>

        <Card className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl">
          <CardBody className="p-4">
            <Tabs
              selectedKey={tab}
              onSelectionChange={(k) => setTab(String(k))}
              classNames={{
                tabList: "bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl p-1",
                cursor: "bg-[var(--color-primary)] rounded-lg",
                tab: "rounded-lg text-[var(--color-text)]",
              }}
            >
              <Tab key="jobs" title="Jobs">
                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input label="Search" placeholder="Role or company" value={q} onValueChange={setQ} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
                    <Select label="Location" selectedKeys={loc ? [loc] : []} onSelectionChange={(keys) => setLoc(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
                      classNames={{ trigger: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12" }}>
                      {["Waterloo", "Kitchener", "Remote"].map((l) => (
                        <SelectItem key={l}>{l}</SelectItem>
                      ))}
                    </Select>
                    <div className="flex items-end">
                      <Button as="a" href="/recommendations/jobs" className="rounded-xl w-full">Open jobs</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {jobs.map((j) => (
                      <Card key={j.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                        <CardBody className="p-5 flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm text-[var(--color-text)]/70">{j.company}</div>
                            <div className="text-lg font-semibold">{j.role}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Chip color="success" variant="flat" className="rounded-full">{j.match}% match</Chip>
                            <Button size="sm" className="rounded-xl">Apply</Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab key="deals" title="Deals">
                <div className="mt-4 grid gap-4">
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["AI", "Quantum", "Fintech", "Climate"].map((t) => (
                      <Chip key={t} variant="flat" className="rounded-full cursor-pointer">{t}</Chip>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {deals.map((d) => (
                      <Card key={d.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                        <CardBody className="p-5 flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm text-[var(--color-text)]/70">Lead: {d.lead}</div>
                            <div className="text-lg font-semibold">{d.title}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Chip color="success" variant="flat" className="rounded-full">{d.match}% fit</Chip>
                            <Button size="sm" className="rounded-xl">View</Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                  <div>
                    <Button as="a" href="/recommendations/deals" variant="flat" className="rounded-xl">See all deals</Button>
                  </div>
                </div>
              </Tab>
              <Tab key="founders" title="Founders">
                <div className="mt-4 grid gap-4">
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["Applied AI", "Quantum", "Cleantech"].map((t) => (
                      <Chip key={t} variant="flat" className="rounded-full cursor-pointer">{t}</Chip>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {founders.map((f) => (
                      <Card key={f.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                        <CardBody className="p-5 flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm text-[var(--color-text)]/70">Focus: {f.focus}</div>
                            <div className="text-lg font-semibold">{f.name}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Chip color="success" variant="flat" className="rounded-full">{f.match}% match</Chip>
                            <Button size="sm" className="rounded-xl">Connect</Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                  <div>
                    <Button as="a" href="/recommendations/founders" variant="flat" className="rounded-xl">See all founders</Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

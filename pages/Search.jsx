import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Chip, Input, Tabs, Tab } from "@heroui/react";
import React from "react";

const categories = [
  { key: "companies", title: "Companies", desc: "Startups, scaleups, and enterprises", href: "/search/companies" },
  { key: "people", title: "People", desc: "Founders, researchers, operators", href: "/search/people" },
  { key: "investors", title: "Investors", desc: "Angels, funds, family offices", href: "/search/investors" },
  { key: "organizations", title: "Organizations", desc: "Incubators, labs, universities", href: "/search/organizations" },
  { key: "events", title: "Events", desc: "Meetups, demos, conferences", href: "/search/events" },
];

const trending = [
  { id: "acme-ai", name: "Acme AI", tag: "AI" },
  { id: "quantumx", name: "QuantumX", tag: "Quantum" },
  { id: "finify", name: "Finify", tag: "Fintech" },
  { id: "greengrid", name: "GreenGrid", tag: "ClimateTech" },
];

export default function Search() {
  const [q, setQ] = React.useState("");
  const [active, setActive] = React.useState("companies");

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {/* Header search */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Search the KW ecosystem</h1>
          <Input
            value={q}
            onValueChange={setQ}
            placeholder="Companies, people, investors, organizations, events…"
            classNames={{
              inputWrapper:
                "input-focus-primary bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl",
              input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
            }}
            startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]/80" />}
          />
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="text-[var(--color-text)]/70">Popular:</span>
            {[
              "Generative AI",
              "Computer Vision",
              "Quantum sensors",
              "Fintech payments",
              "Cleantech",
            ].map((t) => (
              <Chip key={t} variant="flat" size="sm" className="rounded-full cursor-pointer">
                {t}
              </Chip>
            ))}
          </div>
        </div>

        {/* Category tabs + quick nav */}
        <Card className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl">
          <CardBody className="p-4">
            <Tabs
              selectedKey={active}
              onSelectionChange={(k) => setActive(String(k))}
              classNames={{
                tabList:
                  "bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl p-1",
                cursor: "bg-[var(--color-primary)] rounded-lg",
                tab: "rounded-lg text-[var(--color-text)]",
              }}
            >
              {categories.map((c) => (
                <Tab key={c.key} title={c.title}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    {/* Category explainer */}
                    <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                      <CardHeader className="px-5 pt-5 pb-2">
                        <h3 className="text-lg font-semibold">{c.title}</h3>
                      </CardHeader>
                      <CardBody className="p-5 pt-2 text-[var(--color-text)]/80">
                        {c.desc}
                        <div className="mt-4">
                          <Button as="a" href={c.href} className="rounded-xl">Open {c.title} search</Button>
                        </div>
                      </CardBody>
                    </Card>

                    {/* Trending preview */}
                    <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl lg:col-span-2">
                      <CardHeader className="px-5 pt-5 pb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Trending {c.title.toLowerCase()}</h3>
                        <Button as="a" href={c.href} size="sm" variant="flat" className="rounded-xl">See all</Button>
                      </CardHeader>
                      <CardBody className="p-5 pt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {trending.map((t) => (
                          <Card key={t.id} className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors">
                            <CardBody className="p-4 flex flex-col gap-2">
                              <div className="font-medium truncate">{t.name}</div>
                              <Chip size="sm" variant="flat" className="w-fit rounded-full">{t.tag}</Chip>
                              <div className="mt-2">
                                <Button size="sm" as="a" href={`/company/${t.id}`} className="rounded-xl">
                                  View
                                </Button>
                              </div>
                            </CardBody>
                          </Card>
                        ))}
                      </CardBody>
                    </Card>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </CardBody>
        </Card>

        {/* Explore categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Explore by category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {categories.map((c) => (
              <Card key={c.key} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors">
                <CardBody className="p-4">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-[var(--color-text)]/70 mt-1 min-h-[2.5rem]">{c.desc}</div>
                  <Button as="a" href={c.href} size="sm" variant="flat" className="rounded-xl mt-3">
                    Open
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

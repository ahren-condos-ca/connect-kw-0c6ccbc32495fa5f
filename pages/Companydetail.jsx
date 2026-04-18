import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Tabs,
  Tab,
  Chip,
  Avatar,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useParams } from "react-router-dom";

const mockCompany = (id) => ({
  id,
  name: id?.replace(/[-_]/g, " ")?.replace(/\b\w/g, (m) => m.toUpperCase()) || "Acme AI",
  sector: "AI",
  location: "Kitchener",
  website: "https://example.com",
  employees: 42,
  funding: "$12.5M",
  founded: 2021,
  verified: true,
  summary:
    "Building AI copilots for industrial operations. Our platform optimizes energy usage and throughput with real-time inference.",
  people: [
    { id: "1", name: "Jane Doe", role: "CEO" },
    { id: "2", name: "Sam Patel", role: "CTO" },
  ],
  rounds: [
    { id: "r1", type: "Seed", amount: "$2.5M", date: "2022-03-10" },
    { id: "r2", type: "Series A", amount: "$10.0M", date: "2023-06-18" },
  ],
  related: [
    { id: "finify", name: "Finify", sector: "Fintech" },
    { id: "quantumx", name: "QuantumX", sector: "Quantum" },
  ],
});

export default function Companydetail() {
  const { id } = useParams();
  const company = React.useMemo(() => mockCompany(id), [id]);
  const [tab, setTab] = React.useState("overview");

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        {/* Header */}
        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardBody className="p-6 flex items-start gap-4">
            <Avatar name={company.name} className="w-14 h-14" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold truncate">{company.name}</h1>
                {company.verified ? (
                  <Chip size="sm" color="success" variant="flat" className="rounded-full">Verified</Chip>
                ) : null}
              </div>
              <div className="mt-1 flex flex-wrap gap-2 text-sm">
                <Chip size="sm" variant="flat" className="rounded-full">{company.sector}</Chip>
                <Chip size="sm" variant="flat" className="rounded-full">{company.location}</Chip>
                <span className="text-[var(--color-text)]/70">Founded {company.founded}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button as="a" href={company.website} target="_blank" className="rounded-xl">Visit site</Button>
              <Button variant="flat" className="rounded-xl">Follow</Button>
            </div>
          </CardBody>
        </Card>

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
              <Tab key="overview" title="Overview">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl lg:col-span-2">
                    <CardHeader className="px-5 pt-5 pb-2">
                      <h3 className="text-lg font-semibold">Summary</h3>
                    </CardHeader>
                    <CardBody className="p-5 pt-2 text-[var(--color-text)]/85">
                      {company.summary}
                    </CardBody>
                  </Card>
                  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                    <CardHeader className="px-5 pt-5 pb-2">
                      <h3 className="text-lg font-semibold">At a glance</h3>
                    </CardHeader>
                    <CardBody className="p-5 pt-2 text-sm grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[var(--color-text)]/60">Employees</div>
                        <div className="font-semibold">{company.employees}</div>
                      </div>
                      <div>
                        <div className="text-[var(--color-text)]/60">Funding</div>
                        <div className="font-semibold">{company.funding}</div>
                      </div>
                      <div>
                        <div className="text-[var(--color-text)]/60">Sector</div>
                        <div className="font-semibold">{company.sector}</div>
                      </div>
                      <div>
                        <div className="text-[var(--color-text)]/60">Location</div>
                        <div className="font-semibold">{company.location}</div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <Card className="mt-4 bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                  <CardHeader className="px-5 pt-5 pb-2">
                    <h3 className="text-lg font-semibold">Related companies</h3>
                  </CardHeader>
                  <CardBody className="p-5 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {company.related.map((r) => (
                      <Card key={r.id} className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl">
                        <CardBody className="p-4 flex items-center gap-3">
                          <Avatar name={r.name} className="w-8 h-8" />
                          <div className="min-w-0">
                            <div className="font-medium truncate">{r.name}</div>
                            <div className="text-xs text-[var(--color-text)]/70">{r.sector}</div>
                          </div>
                          <Button as="a" href={`/company/${r.id}`} size="sm" className="ml-auto rounded-xl">
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    ))}
                  </CardBody>
                </Card>
              </Tab>

              <Tab key="people" title="People">
                <div className="mt-4">
                  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                    <CardBody className="p-0">
                      <Table aria-label="Team members">
                        <TableHeader>
                          <TableColumn>NAME</TableColumn>
                          <TableColumn>ROLE</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {company.people.map((p) => (
                            <TableRow key={p.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Avatar name={p.name} className="w-6 h-6" />
                                  <a className="hover:underline" href={`/person/${p.id}`}>
                                    {p.name}
                                  </a>
                                </div>
                              </TableCell>
                              <TableCell>{p.role}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </div>
              </Tab>

              <Tab key="funding" title="Funding">
                <div className="mt-4">
                  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                    <CardBody className="p-0">
                      <Table aria-label="Funding rounds">
                        <TableHeader>
                          <TableColumn>ROUND</TableColumn>
                          <TableColumn>AMOUNT</TableColumn>
                          <TableColumn>DATE</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {company.rounds.map((r) => (
                            <TableRow key={r.id}>
                              <TableCell>{r.type}</TableCell>
                              <TableCell>{r.amount}</TableCell>
                              <TableCell>{r.date}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </div>
              </Tab>

              <Tab key="news" title="News">
                <div className="mt-4 grid gap-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl">
                      <CardBody className="p-4">
                        <div className="text-sm text-[var(--color-text)]/60">2024-0{i}-12</div>
                        <div className="font-medium mt-1">{company.name} featured in local innovation spotlight</div>
                        <div className="text-sm text-[var(--color-text)]/80 mt-1">
                          Short summary of the article goes here. This is a placeholder you can replace with a live feed.
                        </div>
                        <div className="mt-2">
                          <Button size="sm" variant="flat" className="rounded-xl">Read more</Button>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

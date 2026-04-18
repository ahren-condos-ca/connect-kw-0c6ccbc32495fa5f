import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Input,
  Select,
  SelectItem,
  Avatar,
  Chip,
  Button,
  Tabs,
  Tab,
} from "@heroui/react";

const samplePeople = [
  { id: "p1", name: "Jane Doe", role: "Founder", company: "Acme AI", expertise: "AI" },
  { id: "p2", name: "John Smith", role: "Researcher", company: "QuantumX", expertise: "Quantum" },
  { id: "p3", name: "Linda Chen", role: "CTO", company: "Finify", expertise: "Fintech" },
];

export default function Searchpeople() {
  const [query, setQuery] = React.useState("");
  const [expertise, setExpertise] = React.useState("");
  const [view, setView] = React.useState("cards");

  const results = React.useMemo(() => {
    return samplePeople.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery = q ? p.name.toLowerCase().includes(q) || p.company.toLowerCase().includes(q) : true;
      const matchesExp = expertise ? p.expertise === expertise : true;
      return matchesQuery && matchesExp;
    });
  }, [query, expertise]);

  const clearFilters = () => {
    setQuery("");
    setExpertise("");
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">People</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">{results.length} matches</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Tabs
              selectedKey={view}
              onSelectionChange={(k) => setView(String(k))}
              classNames={{
                tabList: "bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl p-1",
                cursor: "bg-[var(--color-primary)] rounded-lg",
                tab: "rounded-lg text-[var(--color-text)]",
              }}
            >
              <Tab key="cards" title="Cards" />
              <Tab key="table" title="Table" />
            </Tabs>
            <Button size="sm" variant="flat" className="rounded-xl" onPress={clearFilters}>
              Clear filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2">
                <h2 className="text-lg font-semibold">Filters</h2>
              </CardHeader>
              <CardBody className="p-6 pt-2 flex flex-col gap-4">
                <Input
                  label="Search"
                  placeholder="Name or company"
                  value={query}
                  onValueChange={setQuery}
                  classNames={{
                    inputWrapper:
                      "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl",
                    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                    label: "text-[var(--color-text)]",
                  }}
                />
                <Select
                  label="Expertise"
                  selectedKeys={expertise ? [expertise] : []}
                  onSelectionChange={(keys) => setExpertise(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
                  classNames={{
                    trigger:
                      "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12",
                    label: "text-[var(--color-text)]",
                  }}
                >
                  {["AI", "Quantum", "Fintech", "ClimateTech"].map((e) => (
                    <SelectItem key={e}>{e}</SelectItem>
                  ))}
                </Select>
                <Button variant="flat" className="rounded-xl" onPress={clearFilters}>
                  Reset
                </Button>
              </CardBody>
            </Card>
          </aside>

          {/* Results */}
          <section className="lg:col-span-9 order-1 lg:order-2">
            {/* Mobile controls */}
            <div className="md:hidden flex items-center justify-between gap-2 mb-3">
              <Tabs
                selectedKey={view}
                onSelectionChange={(k) => setView(String(k))}
                classNames={{
                  tabList: "bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-xl p-1",
                  cursor: "bg-[var(--color-primary)] rounded-lg",
                  tab: "rounded-lg text-[var(--color-text)]",
                }}
              >
                <Tab key="cards" title="Cards" />
                <Tab key="table" title="Table" />
              </Tabs>
              <Button size="sm" variant="flat" className="rounded-xl" onPress={clearFilters}>
                Clear
              </Button>
            </div>

            {view === "cards" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {results.map((p) => (
                  <Card
                    key={p.id}
                    className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors"
                  >
                    <CardBody className="p-5 flex items-center gap-4">
                      <Avatar name={p.name} className="w-10 h-10" />
                      <div className="min-w-0">
                        <div className="font-semibold truncate">{p.name}</div>
                        <div className="text-xs text-[var(--color-text)]/70 truncate">
                          {p.role} • {p.company}
                        </div>
                        <div className="mt-2">
                          <Chip size="sm" variant="flat" className="rounded-full">
                            {p.expertise}
                          </Chip>
                        </div>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <Button size="sm" as="a" href={`/person/${p.id}`} className="rounded-xl">
                          View
                        </Button>
                        <Button size="sm" variant="flat" className="rounded-xl">
                          Connect
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                <CardBody className="p-0">
                  <Table aria-label="People results">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>ROLE</TableColumn>
                      <TableColumn>COMPANY</TableColumn>
                      <TableColumn>EXPERTISE</TableColumn>
                    </TableHeader>
                    <TableBody emptyContent="No results">
                      {results.map((p) => (
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
                          <TableCell>{p.company}</TableCell>
                          <TableCell>{p.expertise}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            )}

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[var(--color-text)]/70">Page 1 of 3</span>
              <div className="flex gap-2">
                <Button size="sm" variant="flat" className="rounded-xl" isDisabled>
                  Previous
                </Button>
                <Button size="sm" className="rounded-xl">Next</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

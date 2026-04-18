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
  Chip,
  Button,
  Tabs,
  Tab,
  Switch,
  Avatar,
} from "@heroui/react";

const sampleCompanies = [
  {
    id: "acme-ai",
    name: "Acme AI",
    sector: "AI",
    location: "Kitchener",
    employees: 42,
    funding: "$12.5M",
    verified: true,
  },
  {
    id: "quantumx",
    name: "QuantumX",
    sector: "Quantum",
    location: "Waterloo",
    employees: 28,
    funding: "$8.2M",
    verified: false,
  },
  {
    id: "finify",
    name: "Finify",
    sector: "Fintech",
    location: "Cambridge",
    employees: 66,
    funding: "$21.0M",
    verified: true,
  },
  {
    id: "greengrid",
    name: "GreenGrid",
    sector: "ClimateTech",
    location: "Waterloo",
    employees: 18,
    funding: "$3.4M",
    verified: false,
  },
];

export default function Searchcompanies() {
  const [query, setQuery] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [verifiedOnly, setVerifiedOnly] = React.useState(false);
  const [view, setView] = React.useState("cards");

  const results = React.useMemo(() => {
    return sampleCompanies.filter((c) => {
      const matchesQuery = query
        ? c.name.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesSector = sector ? c.sector === sector : true;
      const matchesLocation = location ? c.location === location : true;
      const matchesVerified = verifiedOnly ? c.verified : true;
      return matchesQuery && matchesSector && matchesLocation && matchesVerified;
    });
  }, [query, sector, location, verifiedOnly]);

  const clearFilters = () => {
    setQuery("");
    setSector("");
    setLocation("");
    setVerifiedOnly(false);
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Companies</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">
              {results.length} results • refine with filters
            </p>
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
                  placeholder="Company name"
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
                  label="Sector"
                  selectedKeys={sector ? [sector] : []}
                  onSelectionChange={(keys) => setSector(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
                  classNames={{
                    trigger:
                      "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12",
                    label: "text-[var(--color-text)]",
                  }}
                >
                  {[
                    "AI",
                    "Quantum",
                    "Fintech",
                    "ClimateTech",
                  ].map((s) => (
                    <SelectItem key={s}>{s}</SelectItem>
                  ))}
                </Select>
                <Select
                  label="Location"
                  selectedKeys={location ? [location] : []}
                  onSelectionChange={(keys) =>
                    setLocation(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")
                  }
                  classNames={{
                    trigger:
                      "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12",
                    label: "text-[var(--color-text)]",
                  }}
                >
                  {["Kitchener", "Waterloo", "Cambridge"].map((l) => (
                    <SelectItem key={l}>{l}</SelectItem>
                  ))}
                </Select>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text)]">Verified only</span>
                  <Switch isSelected={verifiedOnly} onValueChange={setVerifiedOnly} size="sm" />
                </div>
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
                {results.map((c) => (
                  <Card
                    key={c.id}
                    className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors"
                  >
                    <CardBody className="p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={c.name} className="w-8 h-8" />
                        <div className="min-w-0">
                          <div className="font-semibold truncate">{c.name}</div>
                          <div className="text-xs text-[var(--color-text)]/70 truncate">
                            {c.location}
                          </div>
                        </div>
                        {c.verified ? (
                          <Chip color="success" size="sm" variant="flat" className="ml-auto">
                            Verified
                          </Chip>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-sm">
                        <Chip size="sm" variant="flat" className="rounded-full">
                          {c.sector}
                        </Chip>
                        <span className="text-[var(--color-text)]/70">•</span>
                        <span className="text-[var(--color-text)]/80">{c.employees} employees</span>
                        <span className="text-[var(--color-text)]/70">•</span>
                        <span className="text-[var(--color-text)]/80">{c.funding} raised</span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <Button as="a" href={`/company/${c.id}`} size="sm" className="rounded-xl">
                          View profile
                        </Button>
                        <Button size="sm" variant="flat" className="rounded-xl">
                          Save
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
                <CardBody className="p-0">
                  <Table aria-label="Companies results">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>SECTOR</TableColumn>
                      <TableColumn>LOCATION</TableColumn>
                      <TableColumn>EMPLOYEES</TableColumn>
                      <TableColumn>FUNDING</TableColumn>
                      <TableColumn>VERIFIED</TableColumn>
                    </TableHeader>
                    <TableBody emptyContent="No results match your filters">
                      {results.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar name={c.name} className="w-6 h-6" />
                              <a className="hover:underline" href={`/company/${c.id}`}>
                                {c.name}
                              </a>
                            </div>
                          </TableCell>
                          <TableCell>{c.sector}</TableCell>
                          <TableCell>{c.location}</TableCell>
                          <TableCell>{c.employees}</TableCell>
                          <TableCell>{c.funding}</TableCell>
                          <TableCell>{c.verified ? "Yes" : "No"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            )}

            {/* Pagination (static demo) */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[var(--color-text)]/70">Page 1 of 5</span>
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

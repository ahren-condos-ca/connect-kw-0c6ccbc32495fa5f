import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Chip, Input, Progress, Switch, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [activeTab, setActiveTab] = React.useState("cards");
    const sampleCompanies = [
      { id: 1, name: "PhotonIQ", sector: "AI", stage: "Seed", image: "https://picsum.photos/seed/a/640/360", description: "Building AI-driven photonics design tools for next-gen chips." },
      { id: 2, name: "FinPulse", sector: "Fintech", stage: "Series A", image: "https://picsum.photos/seed/b/640/360", description: "Real-time risk analytics for modern finance teams." },
      { id: 3, name: "QubitLabs", sector: "Quantum", stage: "Pre-Seed", image: "https://picsum.photos/seed/c/640/360", description: "Practical quantum software for industrial optimization." },
      { id: 4, name: "RoboPath", sector: "Robotics", stage: "Series B", image: "https://picsum.photos/seed/d/640/360", description: "Autonomous navigation systems for warehouse robots." },
      { id: 5, name: "MedSense", sector: "Healthtech", stage: "Seed", image: "https://picsum.photos/seed/e/640/360", description: "Wearable biosensors delivering continuous patient insights." },
      { id: 6, name: "AgriGrid", sector: "Agtech", stage: "Series A", image: "https://picsum.photos/seed/f/640/360", description: "IoT-enabled yield optimization for greenhouse farms." }
    ];
    const kpis = [
      { label: "Companies", value: "1,284", progress: 72, delta: 4.2 },
      { label: "People", value: "9,517", progress: 64, delta: 2.1 },
      { label: "Investors", value: "212", progress: 41, delta: -0.6 },
      { label: "Active Deals", value: "87", progress: 58, delta: 1.3 }
    ];
    const activities = [
      { id: 1, actor: "PhotonIQ", action: "raised", target: "$2.5M Seed", time: "2m ago", new: true, avatar: "https://picsum.photos/seed/aa/80" },
      { id: 2, actor: "FinPulse", action: "hired", target: "VP of Engineering", time: "15m ago", new: false, avatar: "https://picsum.photos/seed/bb/80" },
      { id: 3, actor: "QubitLabs", action: "partnered with", target: "Waterloo U.", time: "1h ago", new: false, avatar: "https://picsum.photos/seed/cc/80" },
      { id: 4, actor: "RoboPath", action: "opened", target: "Series B", time: "3h ago", new: false, avatar: "https://picsum.photos/seed/dd/80" }
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
          <section className="relative rounded-2xl overflow-hidden">
      <Card className="relative border border-[var(--color-border)] bg-[var(--color-surface)]/60 rounded-2xl shadow-primary">
      <img src="https://pixabay.com/get/g8e7eb91efa428cd95640b155a249458bbee96c8e86b55f57b53fb9995dc7d65400d3ea37a45d3a4e38a7a177de0e1eb5_640.jpg" alt="Nebula background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10" />
      <CardBody className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center gap-6">
      <Badge content="Beta" size="sm" color="primary" className="self-center" />
      <h1 className="text-[var(--color-text)] text-3xl md:text-5xl font-extrabold tracking-tight">Explore the KW Innovation Graph</h1>
      <p className="text-[var(--color-text)]/90 text-base md:text-lg max-w-2xl">Search across companies, people, investors, and organizations. Visualize relationships in a living knowledge graph.</p>
      <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 mt-2">
      <Input
      value={searchTerm}
      onValueChange={setSearchTerm}
      placeholder="Search companies, people, investors..."
      classNames={{
      inputWrapper: "input-focus-primary bg-[var(--color-background)]/70 border border-[var(--color-border)] rounded-2xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
      }}
      startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
      />
      <Link to="/search" className="self-stretch">
      <Button size="md" className="h-full w-full sm:w-auto rounded-2xl bg-[var(--color-primary)] text-[var(--color-text)] font-semibold hover:bg-[var(--color-primary-light)] transition-colors">Search</Button>
      </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">AI</Chip>
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Fintech</Chip>
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Quantum</Chip>
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Robotics</Chip>
      </div>
      <div className="flex gap-3 mt-4">
      <Link to="/analytics">
      <Button variant="bordered" className="rounded-2xl border-[var(--color-text)] text-[var(--color-text)]">Explore Analytics</Button>
      </Link>
      <Link to="/recommendations">
      <Button className="rounded-2xl bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-[var(--color-secondary-light)]">Get Recommendations</Button>
      </Link>
      </div>
      </CardBody>
      <CardFooter className="relative z-10 p-4 md:p-6 flex justify-center">
      <p className="text-[var(--color-text)]/70 text-xs">Data refreshed daily • Coverage: KW region</p>
      </CardFooter>
      </Card>
      </section>

  <section className="w-full">
      <Card className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 md:p-6">
      <Tabs
      selectedKey={activeTab}
      onSelectionChange={setActiveTab}
      classNames={{
      tabList: "bg-[var(--color-background)]/60 rounded-xl p-1",
      cursor: "bg-[var(--color-primary)] rounded-lg",
      tab: "rounded-lg text-[var(--color-text)]",
      tabContent: "group-data-[selected=true]:text-[var(--color-text)]"
      }}
      >
      <Tab key="cards" title="Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {sampleCompanies.map((c) => (
      <Card key={c.id} className="bg-[var(--color-background)]/70 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/30 transition hover:-translate-y-0.5">
      <CardHeader className="flex items-center justify-between p-4">
      <h3 className="text-[var(--color-text)] font-semibold text-base">{c.name}</h3>
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{c.sector}</Chip>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <img src={c.image} alt={c.name} className="w-full h-36 object-cover rounded-xl" />
      <p className="text-[var(--color-text)]/80 text-sm mt-3 line-clamp-3">{c.description}</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary-light)]">View</Button>
      </CardFooter>
      </Card>
      ))}
      </div>
      <div className="flex justify-end mt-4">
      <Button variant="light" className="rounded-xl text-[var(--color-text)] hover:text-[var(--color-primary)]" onClick={() => {}}>
      View more <ArrowRightIcon className="w-4 h-4 ml-1 text-[var(--color-text)]" />
      </Button>
      </div>
      </Tab>
      <Tab key="table" title="Table">
      <div className="mt-4">
      <Table aria-label="Companies table" className="bg-[var(--color-background)]/70 rounded-2xl">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
      <TableColumn className="text-[var(--color-text)]">SECTOR</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STAGE</TableColumn>
      </TableHeader>
      <TableBody>
      {sampleCompanies.map((c) => (
      <TableRow key={c.id}>
      <TableCell className="text-[var(--color-text)]">{c.name}</TableCell>
      <TableCell className="text-[var(--color-text)]">{c.sector}</TableCell>
      <TableCell className="text-[var(--color-text)]">{c.stage}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>
      </Tab>
      <Tab key="graph" title="Graph">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="relative overflow-hidden bg-[var(--color-background)]/70 border border-[var(--color-border)] rounded-2xl">
      <img src="https://pixabay.com/get/gde0ec0e3e6d00c37e975cd0967a1b3e44bde950268312efa530bbbc528248e7af96e4ec343f4d95ec5f2f931da695734_640.jpg" alt="Network teaser" className="w-full h-56 object-cover opacity-70" />
      <CardBody className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-tr from-[var(--color-background)]/40 to-transparent">
      <p className="text-[var(--color-text)] font-semibold text-lg">Interactive Graph</p>
      <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-[var(--color-secondary-light)]">Open Graph</Button>
      </CardBody>
      </Card>
      <Card className="bg-[var(--color-background)]/70 border border-[var(--color-border)] rounded-2xl p-4">
      <p className="text-[var(--color-text)]/90 text-sm">Explore relationships between companies, investors, and people in KW. Filter by sector, geography, and more.</p>
      <Button variant="bordered" className="mt-4 rounded-xl border-[var(--color-text)] text-[var(--color-text)]">Learn more</Button>
      </Card>
      </div>
      </Tab>
      </Tabs>
      </CardBody>
      </Card>
      </section>
  <section>
      {kpis.map((k) => (
      <Card key={k.label} className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
      <div>
      <p className="text-[var(--color-text)]/80 text-xs uppercase tracking-wide">{k.label}</p>
      <p className="text-[var(--color-text)] text-2xl font-bold">{k.value}</p>
      </div>
      <Chip size="sm" variant="flat" className={`rounded-xl ${k.delta >= 0 ? 'bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/15 text-[var(--color-accent)]'}`}>{k.delta >= 0 ? `+${k.delta}%` : `${k.delta}%`}</Chip>
      </div>
      <Progress 
      aria-label={`${k.label} progress`}
      value={k.progress}
      classNames={{
      indicator: "bg-[var(--color-primary)] rounded-lg",
      track: "bg-[var(--color-border)] rounded-lg"
      }}
      />
      </CardBody>
      </Card>
      ))}
      </section>
  <section>
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 border-b border-[var(--color-border)]">
      <p className="text-[var(--color-text)] font-semibold">Recent Activity</p>
      </CardHeader>
      <CardBody className="p-0 divide-y divide-[var(--color-border)]">
      {activities.map((a) => (
      <div key={a.id} className="flex items-center gap-4 p-4">
      <Avatar src={a.avatar} className="w-10 h-10" />
      <div className="min-w-0 flex-1">
      <p className="text-[var(--color-text)] text-sm truncate"><span className="font-semibold text-[var(--color-text)]">{a.actor}</span> {a.action} <span className="font-semibold text-[var(--color-text)]">{a.target}</span></p>
      <p className="text-[var(--color-text)]/70 text-xs mt-1">{a.time}</p>
      </div>
      {a.new && (
      <Badge content="new" color="primary">
      <span className="sr-only text-[var(--color-text)]">New</span>
      </Badge>
      )}
      </div>
      ))}
      </CardBody>
      </Card>
      <Card className="bg-[var(--color-background)]/70 border border-[var(--color-border)] rounded-2xl p-4">
      <p className="text-[var(--color-text)] font-semibold">Stay in the loop</p>
      <p className="text-[var(--color-text)]/80 text-sm mt-1">Subscribe to alerts for new funding rounds, hires, and partnerships.</p>
      <Button className="mt-4 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary-light)]">Subscribe</Button>
      </Card>
      </section>
  <section>
      <Card className="bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <CardBody className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="max-w-2xl">
      <h3 className="text-[var(--color-text)] text-2xl font-bold">Own Your Presence</h3>
      <p className="text-[var(--color-text)]/80 text-sm mt-2">Claim your company profile to update details, verify information, and control what’s visible. Stealth mode available.</p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
      <Switch size="sm" classNames={{ wrapper: "bg-[var(--color-background)]/70" }}>
      <span className="text-[var(--color-text)] text-xs">Stealth tips</span>
      </Switch>
      <Button className="rounded-2xl bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary-light)]">Claim profile</Button>
      </div>
      </CardBody>
      </Card>
      </section>

      </div>
    </div>
  );
}

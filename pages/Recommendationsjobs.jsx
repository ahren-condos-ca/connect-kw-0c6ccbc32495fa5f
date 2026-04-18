import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Select,
  SelectItem,
  Chip,
} from "@heroui/react";

const sampleJobs = [
  { id: "j1", role: "ML Engineer", company: "Acme AI", location: "Waterloo", match: 92 },
  { id: "j2", role: "Quantum Physicist", company: "QuantumX", location: "Kitchener", match: 88 },
  { id: "j3", role: "Product Manager", company: "Finify", location: "Remote", match: 81 },
];

export default function Recommendationsjobs() {
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [loc, setLoc] = React.useState("");

  const results = React.useMemo(() => {
    return sampleJobs.filter((j) => {
      const q = query.toLowerCase();
      const matchesQ = q ? j.role.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) : true;
      const matchesL = level ? (level === "Senior" ? j.role.toLowerCase().includes("senior") : true) : true;
      const matchesLoc = loc ? j.location === loc : true;
      return matchesQ && matchesL && matchesLoc;
    });
  }, [query, level, loc]);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Recommended Jobs</h1>

        <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
          <CardHeader className="px-6 pt-6 pb-2">
            <h2 className="text-lg font-semibold">Your preferences</h2>
          </CardHeader>
          <CardBody className="p-6 pt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Search"
              placeholder="Role or company"
              value={query}
              onValueChange={setQuery}
              classNames={{
                inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl",
                input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                label: "text-[var(--color-text)]",
              }}
            />
            <Select
              label="Level"
              selectedKeys={level ? [level] : []}
              onSelectionChange={(keys) => setLevel(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
              classNames={{
                trigger: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12",
                label: "text-[var(--color-text)]",
              }}
            >
              {["Junior", "Intermediate", "Senior"].map((l) => (
                <SelectItem key={l}>{l}</SelectItem>
              ))}
            </Select>
            <Select
              label="Location"
              selectedKeys={loc ? [loc] : []}
              onSelectionChange={(keys) => setLoc(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
              classNames={{
                trigger: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl h-12",
                label: "text-[var(--color-text)]",
              }}
            >
              {["Waterloo", "Kitchener", "Remote"].map((l) => (
                <SelectItem key={l}>{l}</SelectItem>
              ))}
            </Select>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((j) => (
            <Card key={j.id} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardBody className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-sm text-[var(--color-text)]/70">{j.company}</div>
                    <div className="text-lg font-semibold">{j.role}</div>
                  </div>
                  <Chip color="success" variant="flat" className="rounded-full">{j.match}% match</Chip>
                </div>
                <div className="text-sm text-[var(--color-text)]/70">{j.location}</div>
                <div className="flex gap-2">
                  <Button className="rounded-xl">Apply</Button>
                  <Button variant="flat" className="rounded-xl">Save</Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

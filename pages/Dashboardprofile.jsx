import React from "react";
import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Switch, Avatar } from "@heroui/react";

export default function Dashboardprofile() {
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [publicProfile, setPublicProfile] = React.useState(true);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Profile card */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl lg:col-span-1">
            <CardHeader className="px-6 pt-6 pb-2">
              <h2 className="text-lg font-semibold">Your identity</h2>
            </CardHeader>
            <CardBody className="p-6 pt-2 flex flex-col items-center gap-4">
              <Avatar name={name || "You"} className="w-20 h-20" />
              <Button variant="flat" className="rounded-xl w-full">Upload new photo</Button>
              <div className="w-full flex items-center justify-between">
                <span className="text-sm">Public profile</span>
                <Switch isSelected={publicProfile} onValueChange={setPublicProfile} size="sm" />
              </div>
            </CardBody>
          </Card>

          {/* Right: Form */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl lg:col-span-2">
            <CardHeader className="px-6 pt-6 pb-2">
              <h2 className="text-lg font-semibold">Edit profile</h2>
            </CardHeader>
            <CardBody className="p-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full name" value={name} onValueChange={setName} />
              <Input label="Title" value={title} onValueChange={setTitle} />
              <Input type="email" label="Email" value={email} onValueChange={setEmail} />
              <Select
                label="Organization"
                selectedKeys={org ? [org] : []}
                onSelectionChange={(keys) => setOrg(Array.from(keys)[0] ? String(Array.from(keys)[0]) : "")}
              >
                {["Acme AI", "QuantumX", "Finify", "Other"].map((o) => (
                  <SelectItem key={o}>{o}</SelectItem>
                ))}
              </Select>
              <div className="md:col-span-2 mt-2 flex gap-2">
                <Button className="rounded-xl">Save changes</Button>
                <Button variant="flat" className="rounded-xl">Cancel</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Card, CardBody, CardHeader, Chip, Input, Switch } from "@heroui/react";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subscribe, setSubscribe] = React.useState(true);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">We’d love to hear from you</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">How to reach us</h2></CardHeader>
            <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-3">
              <div>
                <div className="text-sm text-[var(--color-text)]/60">Email</div>
                <div className="font-medium">support@connectkw.example</div>
              </div>
              <div>
                <div className="text-sm text-[var(--color-text)]/60">Community</div>
                <div className="font-medium">Join the #connect-kw channel</div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <Chip size="sm" variant="flat" className="rounded-full">Support</Chip>
                <Chip size="sm" variant="flat" className="rounded-full">Partnerships</Chip>
                <Chip size="sm" variant="flat" className="rounded-full">Media</Chip>
              </div>
            </CardBody>
          </Card>

          {/* Form */}
          <Card className="lg:col-span-2 bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Send a message</h2></CardHeader>
            <CardBody className="p-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Your name" value={name} onValueChange={setName} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
              <Input type="email" label="Email" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
              <Input label="Subject" value={subject} onValueChange={setSubject} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
              <Input label="Message" value={message} onValueChange={setMessage} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} description="Write your message here" />
              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <Switch size="sm" isSelected={subscribe} onValueChange={setSubscribe} />
                  <span className="text-sm text-[var(--color-text)]/80">Subscribe to updates</span>
                </div>
                <Button className="rounded-xl">Send</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Card, CardBody, Input, Switch } from "@heroui/react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-[var(--color-text)]/70 mt-1">Welcome back to Connect KW</p>
          </div>

          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
            <CardBody className="p-6 space-y-4">
              <Input type="email" label="Email" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
              <Input type="password" label="Password" value={password} onValueChange={setPassword} classNames={{ inputWrapper: "bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl" }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch size="sm" isSelected={remember} onValueChange={setRemember} />
                  <span className="text-sm text-[var(--color-text)]/80">Remember me</span>
                </div>
                <a className="text-sm underline text-[var(--color-primary)]" href="#">Forgot password?</a>
              </div>
              <div className="flex items-center justify-between">
                <a className="text-sm underline text-[var(--color-primary)]" href="/register">Create account</a>
                <Button className="rounded-xl">Sign in</Button>
              </div>
            </CardBody>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button variant="flat" className="rounded-xl">Sign in with Google</Button>
            <Button variant="flat" className="rounded-xl">Sign in with GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

const toc = [
  { id: "intro", title: "Introduction" },
  { id: "data", title: "Data we collect" },
  { id: "use", title: "How we use data" },
  { id: "control", title: "Your controls" },
  { id: "contact", title: "Contact" },
];

export default function Privacy() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-[var(--color-text)]/70 mt-1">Last updated: 2024-03-01</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* TOC */}
          <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl h-fit">
            <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">On this page</h2></CardHeader>
            <CardBody className="p-6 pt-2 grid gap-2">
              {toc.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-sm text-[var(--color-text)]/80 hover:underline">
                  {s.title}
                </a>
              ))}
            </CardBody>
          </Card>

          {/* Content */}
          <div className="lg:col-span-3 grid gap-4">
            <Card id="intro" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Introduction</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-3">
                <p>Connect KW surfaces public signals from the KW innovation ecosystem. We respect user privacy and provide controls to manage visibility.</p>
              </CardBody>
            </Card>

            <Card id="data" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Data we collect</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Account data: name, email, organization</li>
                  <li>Usage analytics: pages viewed, interactions (aggregated)</li>
                  <li>Public signals: company sites, news, job boards</li>
                </ul>
              </CardBody>
            </Card>

            <Card id="use" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">How we use data</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide search, recommendations, and analytics features</li>
                  <li>Improve product quality and reliability</li>
                  <li>Send important account or service updates</li>
                </ul>
              </CardBody>
            </Card>

            <Card id="control" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Your controls</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Manage profile visibility in Dashboard → Privacy</li>
                  <li>Request changes to records you own</li>
                  <li>Export or delete your account data by contacting support</li>
                </ul>
              </CardBody>
            </Card>

            <Card id="contact" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Contact</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85">
                Reach us at <a href="mailto:privacy@connectkw.example" className="underline">privacy@connectkw.example</a>.
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

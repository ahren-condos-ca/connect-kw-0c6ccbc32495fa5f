import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";

const toc = [
  { id: "accept", title: "Acceptance of terms" },
  { id: "use", title: "Acceptable use" },
  { id: "license", title: "License" },
  { id: "warranty", title: "No warranty" },
  { id: "liability", title: "Limitation of liability" },
  { id: "changes", title: "Changes" },
];

export default function Terms() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <p className="text-sm text-[var(--color-text)]/70 mt-1">Last updated: 2024-03-01</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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

          <div className="lg:col-span-3 grid gap-4">
            <Card id="accept" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Acceptance of terms</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-3">
                <p>By accessing or using Connect KW you agree to these terms. If you do not agree, do not use the service.</p>
              </CardBody>
            </Card>

            <Card id="use" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Acceptable use</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>No scraping or rate-limiting abuse</li>
                  <li>No misuse of personal data</li>
                  <li>Comply with applicable laws</li>
                </ul>
              </CardBody>
            </Card>

            <Card id="license" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">License</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85">
                You are granted a limited, non-exclusive, non-transferable license to use the service.
              </CardBody>
            </Card>

            <Card id="warranty" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">No warranty</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85">
                The service is provided “as is” without warranties of any kind.
              </CardBody>
            </Card>

            <Card id="liability" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Limitation of liability</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85">
                In no event will we be liable for any indirect, incidental, or consequential damages.
              </CardBody>
            </Card>

            <Card id="changes" className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
              <CardHeader className="px-6 pt-6 pb-2"><h2 className="text-lg font-semibold">Changes</h2></CardHeader>
              <CardBody className="p-6 pt-2 text-[var(--color-text)]/85">
                We may update these terms from time to time. Continued use constitutes acceptance of updated terms.
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

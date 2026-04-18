
        import React from "react";
import { Breadcrumbs } from "@heroui/react";
import { Link } from "react-router-dom";
        export default function BreadcrumbsBar({ items }) {
        return (
            <div className="w-full rounded-xl bg-[var(--color-surface)]/60 border border-[var(--color-border)] p-3">
    <Breadcrumbs className="text-[var(--color-text)]" itemClasses={{ separator: 'px-2 text-[var(--color-text)]/60', item: 'text-[var(--color-text)]', link: 'text-[var(--color-text)] hover:text-[var(--color-primary)]' }}>
    {items.map((it, idx) => (
    <Link key={idx} to={it.href} className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-sm">{it.label}</Link>
    ))}
    </Breadcrumbs>
    </div>
        );
        }


        import React from "react";
import { Chip, Tooltip } from "@heroui/react";
import { LockClosedIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
        export default function PrivacyPill({ level }) {
        return (
            <Tooltip content={<span className="text-[var(--color-text)] text-xs">{level === 'private' ? 'Only you and approved delegates can view' : 'Visible to everyone'}</span>} className="bg-[var(--color-surface)] text-[var(--color-text)]">
    <Chip
    variant="flat"
    className={`rounded-xl px-3 py-1 text-xs ${level === 'private' ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)]' : 'bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]'}`}
    startContent={level === 'private' ? <LockClosedIcon className="w-3.5 h-3.5 text-[var(--color-accent)]" /> : <GlobeAltIcon className="w-3.5 h-3.5 text-[var(--color-secondary)]" />}
    >
    <span className="text-[var(--color-text)]/90">{level === 'private' ? 'Private' : 'Public'}</span>
    </Chip>
    </Tooltip>
        );
        }

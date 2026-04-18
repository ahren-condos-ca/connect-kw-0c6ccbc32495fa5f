
        import React from "react";
import { Badge, Tooltip, Avatar, Card, CardBody } from "@heroui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
        export default function VerificationBadge() {
        return (
            <Badge content={<CheckIcon className="w-3.5 h-3.5 text-[var(--color-text)]" />} color="success" shape="circle" className="align-middle">
    <Tooltip content={<span className="text-[var(--color-text)] text-xs">Verified profile</span>} className="bg-[var(--color-surface)] text-[var(--color-text)]">
    <span className="inline-flex items-center gap-2 text-[var(--color-text)] text-sm">
    <span className="text-[var(--color-text)]">Verified</span>
    </span>
    </Tooltip>
    </Badge>
        );
        }

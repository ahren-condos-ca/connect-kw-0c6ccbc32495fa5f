import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Admininvestors() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="Investors"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "type", label: "Type" },
      { key: "focus", label: "Focus" },
      { key: "aum", label: "AUM ($M)" },
      { key: "active", label: "Active" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "type", label: "Type", type: "select", options: ["Angel", "VC", "PE", "CVC"] },
      { key: "focus", label: "Focus", type: "select", options: ["AI", "Fintech", "Health", "SaaS"] },
      { key: "aum", label: "AUM ($M)", type: "number" },
      { key: "active", label: "Active", type: "switch" },
      ]}
      initialData={[
      { id: 1, name: "KW Angels", type: "Angel", focus: "SaaS", aum: 25, active: true },
      { id: 2, name: "Pioneer VC", type: "VC", focus: "AI", aum: 180, active: true },
      { id: 3, name: "Legacy Capital", type: "PE", focus: "Health", aum: 520, active: false },
      ]}
      />
      </div>
    </div>
  );
}

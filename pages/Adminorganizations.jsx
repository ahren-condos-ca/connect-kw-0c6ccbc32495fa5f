import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Adminorganizations() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="Organizations"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "type", label: "Type" },
      { key: "region", label: "Region" },
      { key: "members", label: "Members" },
      { key: "verified", label: "Verified" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "type", label: "Type", type: "select", options: ["University", "Accelerator", "Incubator", "Program", "Association"] },
      { key: "region", label: "Region", type: "text" },
      { key: "members", label: "Members", type: "number" },
      { key: "verified", label: "Verified", type: "switch" },
      ]}
      initialData={[
      { id: 1, name: "University of Waterloo", type: "University", region: "Waterloo, ON", members: 40000, verified: true },
      { id: 2, name: "Communitech", type: "Accelerator", region: "Kitchener, ON", members: 850, verified: true },
      { id: 3, name: "KW Devs", type: "Association", region: "Waterloo Region", members: 1200, verified: false },
      ]}
      />
      </div>
    </div>
  );
}

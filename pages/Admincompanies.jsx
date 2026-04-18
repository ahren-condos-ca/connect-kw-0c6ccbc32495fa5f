import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Admincompanies() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="Companies"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "sector", label: "Sector" },
      { key: "location", label: "Location" },
      { key: "employees", label: "Employees" },
      { key: "verified", label: "Verified" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "sector", label: "Sector", type: "select", options: ["AI", "Fintech", "Health", "SaaS", "Cyber"] },
      { key: "location", label: "Location", type: "text" },
      { key: "employees", label: "Employees", type: "number" },
      { key: "website", label: "Website", type: "text" },
      { key: "verified", label: "Verified", type: "switch" },
      ]}
      initialData={[
      { id: 1, name: "DeepVision AI", sector: "AI", location: "Waterloo, ON", employees: 42, website: "deepvision.ai", verified: true },
      { id: 2, name: "FinWave", sector: "Fintech", location: "Kitchener, ON", employees: 18, website: "finwave.io", verified: false },
      { id: 3, name: "MediLink Health", sector: "Health", location: "Waterloo, ON", employees: 65, website: "medilink.health", verified: true },
      ]}
      />
      </div>
    </div>
  );
}

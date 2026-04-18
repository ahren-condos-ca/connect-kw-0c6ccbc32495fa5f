import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Adminpeople() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="People"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "title", label: "Title" },
      { key: "company", label: "Company" },
      { key: "email", label: "Email" },
      { key: "verified", label: "Verified" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "company", label: "Company", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "verified", label: "Verified", type: "switch" },
      ]}
      initialData={[
      { id: 1, name: "Ava Chen", title: "CTO", company: "DeepVision AI", email: "ava@deepvision.ai", verified: true },
      { id: 2, name: "Liam Patel", title: "CEO", company: "FinWave", email: "liam@finwave.io", verified: false },
      { id: 3, name: "Noah Singh", title: "Head of Product", company: "MediLink Health", email: "noah@medilink.health", verified: true },
      ]}
      />
      </div>
    </div>
  );
}

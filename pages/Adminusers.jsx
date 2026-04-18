import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Adminusers() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="Users"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "role", label: "Role" },
      { key: "active", label: "Active" },
      { key: "lastLogin", label: "Last Login" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "role", label: "Role", type: "select", options: ["Admin", "Editor", "Viewer"] },
      { key: "active", label: "Active", type: "switch" },
      { key: "lastLogin", label: "Last Login", type: "date" },
      ]}
      initialData={[
      { id: 1, name: "Admin User", email: "admin@connectkw.app", role: "Admin", active: true, lastLogin: "2026-04-12" },
      { id: 2, name: "Editor Jane", email: "jane@connectkw.app", role: "Editor", active: true, lastLogin: "2026-04-29" },
      { id: 3, name: "Viewer Sam", email: "sam@connectkw.app", role: "Viewer", active: false, lastLogin: "2026-03-18" },
      ]}
      />
      </div>
    </div>
  );
}

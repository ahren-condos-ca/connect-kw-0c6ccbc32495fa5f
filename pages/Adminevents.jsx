import AdminCrudPage from "../components/admin/AdminCrudPage";
import React from "react";

export default function Adminevents() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <AdminCrudPage
      entityName="Events"
      idField="id"
      columns={[
      { key: "name", label: "Name" },
      { key: "date", label: "Date" },
      { key: "location", label: "Location" },
      { key: "eventType", label: "Type" },
      { key: "published", label: "Published" },
      ]}
      fields={[
      { key: "name", label: "Name", type: "text" },
      { key: "date", label: "Date", type: "date" },
      { key: "location", label: "Location", type: "text" },
      { key: "eventType", label: "Type", type: "select", options: ["Conference", "Meetup", "Workshop", "Demo Day", "Webinar"] },
      { key: "published", label: "Published", type: "switch" },
      ]}
      initialData={[
      { id: 1, name: "KW Tech Summit", date: "2026-05-10", location: "Kitchener, ON", eventType: "Conference", published: true },
      { id: 2, name: "AI Meetup", date: "2026-06-02", location: "Waterloo, ON", eventType: "Meetup", published: false },
      { id: 3, name: "Founder Workshop", date: "2026-06-22", location: "Waterloo, ON", eventType: "Workshop", published: true },
      ]}
      />
      </div>
    </div>
  );
}

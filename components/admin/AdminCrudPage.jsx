
        import React from "react";
import { Card, CardHeader, CardBody, Button, Input, Select, SelectItem, Switch, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Chip } from "@heroui/react";
        export default function AdminCrudPage({ entityName, columns, fields, initialData, idField = 'id' }) {
  const [data, setData] = React.useState(initialData || []);
  const [search, setSearch] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const idRef = React.useRef(data.length ? Math.max(...data.map((d) => Number(d[idField] ?? d.id) || 0)) + 1 : 1);

  const singleLabel = React.useMemo(() => (entityName.endsWith("s") ? entityName.slice(0, -1) : entityName), [entityName]);

  const stringKeys = React.useMemo(() => fields.filter(f => (f.type === "text" || f.type === "select" || f.type === "email" || f.type === "date")).map(f => f.key), [fields]);

  const filteredData = React.useMemo(() => {
  const q = search.trim().toLowerCase();
  if (!q) return data;
  return data.filter((item) => stringKeys.some((k) => String(item[k] ?? "").toLowerCase().includes(q)));
  }, [search, data, stringKeys]);

  const openAdd = () => {
  setIsEditing(false);
  const defaults = fields.reduce((acc, f) => {
  acc[f.key] = f.type === "switch" ? false : "";
  return acc;
  }, {});
  setFormData(defaults);
  setIsModalOpen(true);
  };

  const openEdit = (item) => {
  setIsEditing(true);
  setFormData(item);
  setIsModalOpen(true);
  };

  const handleDelete = (id) => {
  setData((prev) => prev.filter((it) => (it[idField] ?? it.id) !== id));
  };

  const handleBulkDelete = () => {
  if (selectedKeys === "all") {
  setData([]);
  } else {
  const ids = new Set(Array.from(selectedKeys));
  setData((prev) => prev.filter((it) => !ids.has(String(it[idField] ?? it.id)) && !ids.has((it[idField] ?? it.id))));
  }
  setSelectedKeys(new Set());
  };

  const handleSave = () => {
  if (isEditing) {
  setData((prev) => prev.map((it) => ((it[idField] ?? it.id) === (formData[idField] ?? formData.id) ? { ...it, ...formData } : it)));
  } else {
  const newId = formData[idField] ?? formData.id ?? idRef.current;
  idRef.current = Number(newId) + 1;
  setData((prev) => [...prev, { ...formData, [idField || "id"]: newId }]);
  }
  setIsModalOpen(false);
  };

  const renderCellValue = (val) => {
  if (typeof val === "boolean") {
  return <Chip size="sm" className={`rounded-md ${val ? 'bg-success-600/20 text-success-500' : 'bg-danger-600/20 text-danger-500'}`}>{val ? 'Yes' : 'No'}</Chip>;
  }
  return String(val ?? "-");
  };

  const renderField = (f) => {
  const value = formData[f.key];
  const setValue = (v) => setFormData((prev) => ({ ...prev, [f.key]: v }));

  if (f.type === "select") {
  const selectedKey = value ? new Set([String(value)]) : new Set();
  return (
  <Select
  label={f.label}
  selectedKeys={selectedKey}
  onSelectionChange={(keys) => setValue(Array.from(keys)[0] || "")}
  classNames={{
  trigger: "bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-xl h-12",
  popoverContent: "bg-[var(--color-background)] text-[var(--color-text)] rounded-xl",
  label: "text-[var(--color-text)]"
  }}
  >
  {(f.options || []).map((opt) => (
  <SelectItem key={String(opt.value ?? opt)}>{String(opt.label ?? opt)}</SelectItem>
  ))}
  </Select>
  );
  }

  if (f.type === "switch") {
  return (
  <div className="flex items-center h-12">
  <Switch isSelected={Boolean(value)} onValueChange={setValue}>
  <span className="text-[var(--color-text)]">{f.label}</span>
  </Switch>
  </div>
  );
  }

  const inputType = f.type === "number" ? "number" : f.type === "date" ? "date" : f.type === "email" ? "email" : "text";
  return (
  <Input
  type={inputType}
  label={f.label}
  value={String(value ?? "")}
  onValueChange={setValue}
  classNames={{
  inputWrapper: "bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-xl",
  input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
  label: "text-[var(--color-text)]"
  }}
  />
  );
  };
        return (
            <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
    <CardHeader className="flex items-center justify-between gap-3 p-4">
    <div className="flex items-center gap-3">
    <h2 className="text-lg font-semibold text-[var(--color-text)]">{entityName} Admin</h2>
    <Chip size="sm" className="bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]">{data.length} items</Chip>
    </div>
    <div className="flex items-center gap-2">
    <Input
    placeholder={`Search ${entityName.toLowerCase()}...`}
    value={search}
    onValueChange={setSearch}
    classNames={{
    base: "w-64",
    inputWrapper: "bg-[var(--color-background)]/80 border border-[var(--color-border)] rounded-xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60"
    }}
    />
    <Button color="primary" onPress={openAdd} className="rounded-xl">Add {singleLabel}</Button>
    <Button color="danger" variant="flat" onPress={handleBulkDelete} isDisabled={selectedKeys.size === 0} className="rounded-xl">Delete selected</Button>
    </div>
    </CardHeader>
    <CardBody className="p-0">
    <Table
    aria-label={`${entityName} table`}
    selectionMode="multiple"
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    classNames={{
    base: "bg-transparent",
    table: "min-w-full",
    th: "bg-[var(--color-background)] text-[var(--color-text)]",
    td: "text-[var(--color-text)]"
    }}
    >
    <TableHeader>
    {columns.map((col) => (
    <TableColumn key={col.key} className="text-[var(--color-text)]">{col.label}</TableColumn>
    ))}
    <TableColumn key="actions" className="text-[var(--color-text)]">Actions</TableColumn>
    </TableHeader>
    <TableBody emptyContent={`No ${entityName.toLowerCase()} found`}>
    {filteredData.map((item) => (
    <TableRow key={item[idField] ?? item.id}>
    {columns.map((col) => (
    <TableCell key={col.key} className="text-[var(--color-text)]">
    {renderCellValue(item[col.key])}
    </TableCell>
    ))}
    <TableCell className="text-[var(--color-text)]">
    <div className="flex gap-2">
    <Button size="sm" variant="flat" className="rounded-lg" onPress={() => openEdit(item)}>Edit</Button>
    <Button size="sm" color="danger" className="rounded-lg" onPress={() => handleDelete(item[idField] ?? item.id)}>Delete</Button>
    </div>
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
    </CardBody>

    <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen} classNames={{ base: "bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl", backdrop: "bg-black/50" }}>
    <ModalContent>
    <ModalHeader className="flex flex-col gap-1">{isEditing ? `Edit ${singleLabel}` : `Add ${singleLabel}`}</ModalHeader>
    <ModalBody>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {fields.map((f) => (
    <div key={f.key} className="min-w-0">
    {renderField(f)}
    </div>
    ))}
    </div>
    </ModalBody>
    <ModalFooter>
    <Button variant="flat" onPress={() => setIsModalOpen(false)} className="rounded-xl">Cancel</Button>
    <Button color="primary" onPress={handleSave} className="rounded-xl">Save</Button>
    </ModalFooter>
    </ModalContent>
    </Modal>
    </Card>
        );
        }

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  EnvelopeIcon,
  UserIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [isDark, setIsDark] = React.useState(true);

  const navItems = React.useMemo(
    () => [
      { to: "/", label: "Home", icon: HomeIcon },
      { to: "/search", label: "Search", icon: MagnifyingGlassIcon },
      { to: "/analytics", label: "Analytics", icon: AdjustmentsHorizontalIcon },
      { to: "/recommendations", label: "Recommendations", icon: StarIcon },
      { to: "/dashboard", label: "Dashboard", icon: UserCircleIcon, badge: null },
      { to: "/admin", label: "Admin", icon: Cog6ToothIcon },
      { to: "/about", label: "About", icon: BookmarkIcon },
      { to: "/contact", label: "Contact", icon: EnvelopeIcon },
      { to: "/login", label: "Login", icon: UserIcon },
      { to: "/register", label: "Register", icon: UserIcon },
      { to: "/privacy", label: "Privacy", icon: Cog6ToothIcon },
      { to: "/terms", label: "Terms", icon: Cog6ToothIcon },
    ],
    []
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("theme");
    const prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
    setIsDark(theme === "dark");
  }, []);

  const toggleTheme = (selected) => {
    const theme = selected ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("theme", theme);
    }
    setIsDark(selected);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-64 p-4 sticky top-0 h-screen">
          <Card className="h-full bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl shadow-primary">
            <CardBody className="h-full flex flex-col gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-extrabold">
                  KW
                </div>
                <span className="text-[var(--color-text)] font-semibold text-lg">Connect KW</span>
              </div>

              {/* Navigation - top-level only */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[var(--color-primary)]/10",
                        isActive
                          ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "text-[var(--color-text)]",
                      ].join(" ")
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.badge ? (
                      <Badge content={item.badge} color="primary" className="ml-auto" />
                    ) : null}
                  </NavLink>
                ))}
              </nav>

              {/* Tip section */}
              <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
                <div className="rounded-xl p-3 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
                  <p className="text-[var(--color-text)] text-sm font-medium">Pro tip</p>
                  <p className="text-[var(--color-text)]/80 text-xs mt-1">
                    Use the global search to quickly find companies, people, and investors.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </aside>

        {/* Main content column */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header Bar */}
          <Navbar
            maxWidth="xl"
            className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
          >
            <NavbarContent justify="start">
              <NavbarMenuToggle
                className="text-[var(--color-text)] md:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
              <NavbarBrand>
                <span className="text-[var(--color-text)] font-semibold">Connect KW</span>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex" justify="center">
              <Input
                labelPlacement="outside-left"
                placeholder="Search companies, people, investors..."
                value={search}
                onValueChange={setSearch}
                classNames={{
                  base: "w-[520px]",
                  inputWrapper:
                    "input-focus-primary bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl",
                  input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                  label: "text-[var(--color-text)]",
                }}
                startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
              />
            </NavbarContent>

            <NavbarContent justify="end" className="gap-2">
              {/* Theme toggle */}
              <Switch size="sm" isSelected={isDark} onValueChange={toggleTheme} classNames={{ wrapper: "bg-[var(--color-surface)]/70" }}>
                <span className="sr-only text-[var(--color-text)]">Toggle theme</span>
              </Switch>

              {/* Notifications */}
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" className="rounded-full min-w-0 p-0 w-9 h-9">
                    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Notifications"
                  classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[240px]" }}
                >
                  <DropdownItem key="none" className="text-[var(--color-text)]">
                    No new notifications
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* User menu */}
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" className="rounded-full min-w-0 p-0">
                    <Avatar size="sm" className="w-9 h-9" name="You" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="User menu"
                  classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[220px]" }}
                >
                  <DropdownItem key="profile" startContent={<UserCircleIcon className="w-4 h-4 text-[var(--color-text)]" />}>
                    Profile
                  </DropdownItem>
                  <DropdownItem key="settings" startContent={<Cog6ToothIcon className="w-4 h-4 text-[var(--color-text)]" />}>
                    Settings
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>

            {/* Mobile search */}
            <NavbarMenu className="bg-[var(--color-background)]/90 backdrop-blur-md border-t border-[var(--color-border)]">
              <div className="px-3 py-2">
                <Input
                  placeholder="Search companies, people, investors..."
                  value={search}
                  onValueChange={setSearch}
                  classNames={{
                    base: "w-full",
                    inputWrapper:
                      "input-focus-primary bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl",
                    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                  }}
                  startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
                />
              </div>
              {navItems.map((item) => (
                <NavbarMenuItem key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[var(--color-primary)]/10",
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text)]",
                      ].join(" ")
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>

          {/* Main content area */}
          <main className="flex-1 min-w-0 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

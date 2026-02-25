import "./Sidebar.css";

const navItems = [
  { icon: "home", label: "Home", hasSubmenu: false },
  { icon: "user", label: "My Info", hasSubmenu: true },
  { icon: "people", label: "People", hasSubmenu: false, active: true },
  { icon: "team", label: "Team Management", hasSubmenu: true },
  { icon: "project", label: "Project Setup", hasSubmenu: true },
  { icon: "hiring", label: "Hiring", hasSubmenu: false },
  { icon: "report", label: "Report", hasSubmenu: false },
];

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>  
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3"/>
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      <circle cx="17" cy="7" r="3"/>
      <path d="M21 20c0-3.3-2.7-6-6-6"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18"/>
      <path d="M9 21V9"/>
    </svg>
  );
}

function HiringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.35-4.35"/>
      <path d="M11 8v6M8 11h6"/>
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <path d="M14 2v6h6"/>
      <path d="M8 13h8M8 17h5"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="6.8"/>
      <circle cx="12" cy="12" r="2.2"/>
      <circle cx="8.3" cy="9.3" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );
}

function ChevronDoubleLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 18l-6-6 6-6"/>
      <path d="M19 18l-6-6 6-6"/>
    </svg>
  );
}

function ChevronDoubleRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 18l6-6-6-6"/>
      <path d="M5 18l6-6-6-6"/>
    </svg>
  );
}

const iconMap = {
  home: HomeIcon,
  user: UserIcon,
  people: PeopleIcon,
  team: TeamIcon,
  project: ProjectIcon,
  hiring: HiringIcon,
  report: ReportIcon,
};

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={onMobileClose} />
      )}

      <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""} ${mobileOpen ? "sidebar--mobile-open" : ""}`}>
        {/* Logo */}
        <div className="sidebar__logo">
          {!collapsed && <span className="sidebar__logo-text">CORE</span>}
          {collapsed && <span className="sidebar__logo-text sidebar__logo-text--small">C</span>}
          <button className="sidebar__toggle" onClick={onToggle} aria-label="Toggle sidebar">
            {collapsed ? <ChevronDoubleRight /> : <ChevronDoubleLeft />}
          </button>
        </div>

        {/* Nav */}
        <nav className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.label}
                className={`sidebar__nav-item ${item.active ? "sidebar__nav-item--active" : ""}`}
              >
                <span className="sidebar__nav-icon">
                  <Icon />
                </span>
                {!collapsed && (
                  <>
                    <span className="sidebar__nav-label">{item.label}</span>
                    {item.hasSubmenu && (
                      <span className="sidebar__nav-arrow">
                        <ChevronRight />
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Settings at bottom */}
        <div className="sidebar__footer">
          <button className="sidebar__nav-item sidebar__nav-item--settings">
            <span className="sidebar__nav-icon">
              <SettingsIcon />
            </span>
            {!collapsed && <span className="sidebar__nav-label">Settings</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

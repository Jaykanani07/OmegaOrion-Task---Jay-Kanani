import { useState } from "react";
import { employees } from "../data/employees";
import "./PeoplePage.css";

/* ── toolbar icons ── */
function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}
function OrgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <rect x="2" y="17" width="6" height="4" rx="1" />
      <rect x="9" y="17" width="6" height="4" rx="1" />
      <rect x="16" y="17" width="6" height="4" rx="1" />
      <path d="M12 6v4M5 17v-4h14v4" />
    </svg>
  );
}
function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* ── badge SVG overlay on avatar ── */
function BadgeSVG() {
  return (
    <svg className="emp-card__badge-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.55)" />
      {/* handshake / award icon */}
      <path d="M13 22c0 0 1.5-2 4-2s4 2 4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 22c0 0 1.5-2 4-2s3 2 3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="17" r="3" stroke="white" strokeWidth="1.5" />
      <path d="M14 28h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── single employee card ── */
function EmployeeCard({ employee }) {
  return (
    <div className="emp-card">
      <div className="emp-card__avatar-wrap">
        <img
          className="emp-card__avatar"
          src={employee.image}
          alt={employee.name}
          style={{ objectPosition: employee.avatarPosition || "50% 12%" }}
          loading="lazy"
        />
        <div className="emp-card__badge-wrap">
          <BadgeSVG />
        </div>
      </div>

      <div className="emp-card__info">
        <p className="emp-card__name">{employee.name}</p>
        <p className="emp-card__role" style={{ color: employee.roleColor }}>
          {employee.role}
        </p>
        <div className="emp-card__dots">
          {employee.skills.map((color, i) => (
            <span
              key={i}
              className="emp-card__dot"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── main People page ── */
export default function PeoplePage() {
  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState("grid");

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="people">
      {/* Toolbar */}
      <div className="people__toolbar">
        <div className="people__search-wrap">
          <span className="people__search-icon">
            <SearchIcon />
          </span>
          <input
            className="people__search"
            type="text"
            placeholder="Search by Employee Name or Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="people__actions">
          <button className="people__action-btn" title="Download">
            <DownloadIcon />
          </button>
          <button className="people__action-btn" title="Filter">
            <FilterIcon />
          </button>
          <button className="people__action-btn people__action-btn--dark" title="Add Employee">
            <PlusIcon />
          </button>
          <button
            className={`people__action-btn ${activeView === "grid" ? "people__action-btn--active" : ""}`}
            title="Grid view"
            onClick={() => setActiveView("grid")}
          >
            <GridIcon />
          </button>
          <button
            className={`people__action-btn ${activeView === "list" ? "people__action-btn--active" : ""}`}
            title="List view"
            onClick={() => setActiveView("list")}
          >
            <ListIcon />
          </button>
          <button
            className={`people__action-btn ${activeView === "org" ? "people__action-btn--active" : ""}`}
            title="Org chart"
            onClick={() => setActiveView("org")}
          >
            <OrgIcon />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="people__grid">
        {filtered.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
        {filtered.length === 0 && (
          <div className="people__empty">No employees found.</div>
        )}
      </div>

      {/* Pagination */}
      <div className="people__pagination">
        <span className="people__rows-label">Rows per page:</span>
        <div className="people__rows-select">
          <span>100</span>
          <ChevronDownIcon />
        </div>
        <span className="people__page-info">1-100 of 500</span>
        <button className="people__page-btn" disabled>
          <ChevronLeftIcon />
        </button>
        <button className="people__page-btn">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

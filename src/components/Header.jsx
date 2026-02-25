import { useState, useEffect } from "react";
import "./Header.css";

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 01-3.46 0"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function useTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function Header({ onMenuClick }) {
  const time = useTime();

  return (
    <header className="header">
      <div className="header__left">
        {/* Mobile menu button */}
        <button className="header__menu-btn" onClick={onMenuClick} aria-label="Open menu">
          <MenuIcon />
        </button>
        <h1 className="header__title">People</h1>
      </div>

      <div className="header__right">
        <div className="header__timezone">
          <span className="header__tz-label">MST</span>
          <span className="header__tz-divider" />
          <ClockIcon />
          <span className="header__time">{formatTime(time)}</span>
        </div>

        <button className="header__icon-btn header__icon-btn--edit" aria-label="Edit">
          <EditIcon />
        </button>

        <button className="header__icon-btn header__icon-btn--bell" aria-label="Notifications">
          <BellIcon />
          <span className="header__badge" />
        </button>

        <div className="header__avatar">
          <img
            className="header__avatar-img"
            src="/Images/avtar8.png"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}

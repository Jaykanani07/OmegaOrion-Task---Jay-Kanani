import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PeoplePage from "./components/PeoplePage";
import "./App.css";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((v) => !v)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />
      <div className="app__main">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        <PeoplePage />
      </div>
    </div>
  );
}

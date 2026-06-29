import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <div className="main-layout">

      <aside className="layout-sidebar">
        <Sidebar />
      </aside>

      <div className="layout-content">

        <Header />

        <main className="layout-main">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

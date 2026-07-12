import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Wallet from "../pages/Wallet";
import Portfolio from "../pages/Portfolio";
import Settings from "../pages/Settings";
import Transactions from "../pages/Transactions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Wallet from "../pages/Wallet";
import Portfolio from "../pages/Portfolio";
import Transactions from "../pages/Transactions";
import Settings from "../pages/Settings";
import Send from "../pages/Send";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/send" element={<Send />} />
    </Routes>
  );
}
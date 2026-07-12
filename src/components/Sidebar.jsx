import { Link } from "react-router-dom";
import {
  FaWallet,
  FaChartPie,
  FaHome,
  FaCog,
  FaExchangeAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-green-400 mb-10">
        Dashboard
      </h2>

      <ul className="space-y-3">
        <Link to="/">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-green-400 transition-all duration-300 cursor-pointer">
            <FaHome />
            <span>Home</span>
          </li>
        </Link>

        <Link to="/wallet">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-green-400 transition-all duration-300 cursor-pointer">
            <FaWallet />
            <span>Wallet</span>
          </li>
        </Link>

        <Link to="/portfolio">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-green-400 transition-all duration-300 cursor-pointer">
            <FaChartPie />
            <span>Portfolio</span>
          </li>
        </Link>

        <Link to="/transactions">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-green-400 transition-all duration-300 cursor-pointer">
            <FaExchangeAlt />
            <span>Transactions</span>
          </li>
        </Link>

        <Link to="/settings">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-green-400 transition-all duration-300 cursor-pointer">
            <FaCog />
            <span>Settings</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
}
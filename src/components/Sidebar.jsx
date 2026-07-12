import { Link } from "react-router-dom";

import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaExchangeAlt,
  FaCog,
  FaPaperPlane
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <aside className="w-64 bg-slate-900 min-h-screen p-6">

      <h2 className="text-2xl font-bold text-green-400">

        Dashboard

      </h2>

      <ul className="mt-10 space-y-5">

        <Link to="/">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaHome />
            Home
          </li>
        </Link>

        <Link to="/wallet">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaWallet />
            Wallet
          </li>
        </Link>

        <Link to="/portfolio">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaChartPie />
            Portfolio
          </li>
        </Link>

        <Link to="/transactions">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaExchangeAlt />
            Transactions
          </li>
        </Link>

        <Link to="/send">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaPaperPlane />
            Send
          </li>
        </Link>

        <Link to="/settings">
          <li className="flex gap-3 items-center hover:text-green-400">
            <FaCog />
            Settings
          </li>
        </Link>

      </ul>

    </aside>

  );

}
export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search coin..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full bg-slate-900 p-3 rounded-xl mb-6 outline-none"
    />
  );
}
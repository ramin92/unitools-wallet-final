export default function NewsCard({
  title,
  source
}) {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="font-bold">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        {source}
      </p>
    </div>
  );
}
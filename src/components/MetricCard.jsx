function MetricCard({ title, value, unit, icon, layout = "vertical" }) {
  if (layout === "horizontal") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 flex items-center justify-between shadow-inner">
        <div>
          <h3 className="text-[#e2e8b5] text-md font-medium mb-1">{title}</h3>
          <div className="text-2xl font-semibold">{value}{unit}</div>
        </div>
        {icon}
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between h-full shadow-inner">
      <h3 className="text-[#e2e8b5] text-lg font-medium mb-4">{title}</h3>
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <div className="text-3xl font-semibold">{value}</div>
          {unit && <div className="text-sm text-white/60">{unit}</div>}
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
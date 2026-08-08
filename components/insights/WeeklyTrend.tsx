export default function WeeklyTrend() {
  const data = [65, 82, 74, 90, 84, 96, 88];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Weekly Performance
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Fleet performance over the last 7 days
        </p>
      </div>

      <div className="flex h-56 items-end justify-between gap-3">
        {data.map((value, index) => (
          <div
            key={days[index]}
            className="flex h-full flex-1 items-end"
          >
            <div
              className="w-full rounded-t-lg bg-cyan-500 transition-all duration-500 hover:bg-cyan-400"
              style={{ height: `${value}%` }}
              title={`${days[index]}: ${value}%`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-500">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
}
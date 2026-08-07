import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold">RouteMind</h1>

      <p className="mt-4 text-gray-400">
        AI Powered Dynamic Route Optimization
      </p>

      <Link
        href="/dashboard"
        className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 hover:bg-cyan-400 transition"
      >
        Launch Dashboard →
      </Link>
    </main>
  );
}
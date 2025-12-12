import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="text-slate-600">
        Starter structure: React Router + Tailwind + Vite.
      </p>
      <Link
        to="/products"
        className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800"
      >
        View products
      </Link>
    </div>
  );
}

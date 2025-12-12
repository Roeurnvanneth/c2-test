import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Product detail</h1>
        <Link to="/products" className="text-sm underline text-slate-700">
          Back to products
        </Link>
      </div>

      <div className="rounded-xl border p-4">
        <div className="text-slate-600 text-sm">Product ID</div>
        <div className="text-lg font-medium">{id}</div>
      </div>
    </div>
  );
}

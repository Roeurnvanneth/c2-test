import { Link } from "react-router-dom";

export default function Products() {
  const items = [
    { id: 1, title: "Product 1", price: 25 },
    { id: 2, title: "Product 2", price: 40 },
    { id: 3, title: "Product 2", price: 40 },
    { id: 4, title: "Product 2", price: 30 },
    { id: 5, title: "Product 2", price: 60 },
    { id: 6, title: "Product 2", price: 90 },
    { id: 7, title: "Product 2", price: 10 },
    { id: 8, title: "Product 2", price: 40 },
    { id: 9, title: "Product 2", price: 20 },
    { id: 10, title: "Product 2", price: 40 },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-slate-600 text-sm">
          Click a product to view detail.
        </p>
      </div>

      <div className="grid gap-4 ">
        {items.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
            className="rounded-xl border p-4 hover:shadow-sm transition"
          >
            <div className="text-lg font-medium">{p.title}</div>
            <div className="text-slate-600 text-sm">${p.price}</div>
            <div className="mt-3 inline-flex text-sm font-medium text-slate-900 underline">
              View detail
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

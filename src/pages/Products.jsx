import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?limit=12&offset=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">Products</h1>
          <p className="text-sm md:text-base text-slate-600 mt-1">Manage your product catalog</p>
        </div>

        <Link
          to="/products/new"
          className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition shadow-sm"
        >
          + Add product
        </Link>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col gap-4">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="h-20 w-full bg-slate-100 animate-pulse rounded-2xl" />
           ))}
        </div>
      ) : (
        /* Product List */
        <div className="flex flex-col gap-4">
          {products.map((p) => (
            <Link
              key={p.id}
              /* ERROR FIXED: Fixed Template Literal syntax using backticks `` */
              to={`/products/${p.id}`}
              /* SMALL SCREEN: flex-col (Large Featured Card)
                 MD/LG SCREEN: md:flex-row (Sleek List Item) 
              */
              className="group flex flex-col md:flex-row md:items-center rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all p-0 md:p-4"
            >
              {/* Image: Large on Mobile, Small Thumbnail on Desktop */}
              <div className="h-56 w-full md:h-16 md:w-16 md:flex-shrink-0 overflow-hidden md:rounded-xl">
                <img
                  src={p.images?.[0] ?? "https://placehold.co/600x400"}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info Section */}
              <div className="p-5 md:p-0 md:ml-5 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {p.category?.name}
                  </p>
                  
                  {/* Description: Hidden on Desktop to keep the list sleek */}
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600 leading-relaxed md:hidden">
                    {p.description}
                  </p>
                </div>

                {/* Price: Far right on desktop */}
                <div className="text-xl md:text-lg font-black text-slate-900 md:min-w-[100px] md:text-right">
                  ${p.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
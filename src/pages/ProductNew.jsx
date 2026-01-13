import { useNavigate } from "react-router-dom";

export default function ProductNew() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // 1. Get data from the form
    const formData = new FormData(e.currentTarget);

    // 2. Format the data to match the API requirements
    const newProduct = {
      title: formData.get("title"),
      price: Number(formData.get("price")), // Must be a Number
      description: formData.get("description"),
      categoryId: Number(formData.get("categoryId")), // Must be a Number
      images: [formData.get("image")], // Must be an Array of strings
    };

    try {
      // 3. Send the POST request
      const response = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      // 4. Handle the response with your requested alerts
      if (response.ok) {
        alert("successfully save new products");
        navigate("/products"); // Goes back to the list view
      } else {
        // This triggers if the server rejects the data (e.g., wrong category ID)
        alert("Saved a new products failed");
      }
    } catch (error) {
      // This triggers if there is a network error
      console.error("Submission error:", error);
      alert("Saved a new products failed");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Add New Product</h1>
        <p className="text-sm text-slate-600">Enter product details to add it to the catalog</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-1">Product Title</label>
            <input name="title" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. Classic White Tee" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Price */}
            <div>
              <label className="block text-sm font-semibold mb-1">Price ($)</label>
              <input name="price" type="number" required min={1} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="0.00" />
            </div>

            {/* Category ID */}
            <div>
              <label className="block text-sm font-semibold mb-1">Category ID</label>
              <input name="categoryId" type="number" required min={1} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="1-5" />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold mb-1">Image URL</label>
            <input name="image" type="url" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="https://i.imgur.com/example.jpg" />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea name="description" rows={4} required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="Product details..." />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-4">
          <button type="button" onClick={() => navigate(-1)} className="text-sm font-medium text-slate-500 hover:text-slate-800">Cancel</button>
          <button type="submit" className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white hover:bg-slate-800 transition shadow-lg">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
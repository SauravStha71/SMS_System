import { useState } from "react";

const PreviewDataCard = () => {
  const initialData = [
    { id: 1, branchCode: "201", branch: "Branch A", scno: "201.16.007ABC", customerId: "24", name: "John Doe", address: "Address 1", mobile: "9876543210", days: 87, balance: 136, prepaidDate: "03-Mar-25", selected: false },
    { id: 2, branchCode: "202", branch: "Branch B", scno: "201.18.008DEF", customerId: "36", name: "Ram Smith", address: "Address 2", mobile: "9841234567", days: 64, balance: 200, prepaidDate: "05-Mar-25", selected: false },
    { id: 3, branchCode: "205", branch: "Branch A", scno: "201.16.007ABC", customerId: "24", name: "John Doe", address: "Address 1", mobile: "9876543210", days: 87, balance: 136, prepaidDate: "03-Mar-25", selected: false },
    { id: 4, branchCode: "208", branch: "Branch A", scno: "201.16.007ABC", customerId: "24", name: "John Doe", address: "Address 1", mobile: "9876543210", days: 87, balance: 136, prepaidDate: "03-Mar-25", selected: false },
  ];

  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({ minDays: "", maxDays: "", minBalance: "", maxBalance: "" });

  const applyFilters = () => {
    setData(
      initialData.filter((item) => {
        return (
          (filters.minDays === "" || item.days >= Number(filters.minDays)) &&
          (filters.maxDays === "" || item.days <= Number(filters.maxDays)) &&
          (filters.minBalance === "" || item.balance >= Number(filters.minBalance)) &&
          (filters.maxBalance === "" || item.balance <= Number(filters.maxBalance))
        );
      })
    );
  };

  const resetFilters = () => {
    setFilters({ minDays: "", maxDays: "", minBalance: "", maxBalance: "" });
    setData(initialData);
  };

  return (
    <div className="p-4">
      {/* Filters Section */}
      <div className="flex justify-center items-start mb-6">
        <div className="w-full max-w-5xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Overdue Days Section */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-2">Overdue Days</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minDays}
                  onChange={(e) => setFilters({ ...filters, minDays: e.target.value })}
                  className="border p-2 rounded w-24"
                />
                <span className="mt-2">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxDays}
                  onChange={(e) => setFilters({ ...filters, maxDays: e.target.value })}
                  className="border p-2 rounded w-24"
                />
                <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">
                  ✔ Apply
                </button>
              </div>
            </div>

            {/* Balance Amount Section */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-2">Balance Amount</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minBalance}
                  onChange={(e) => setFilters({ ...filters, minBalance: e.target.value })}
                  className="border p-2 rounded w-24"
                />
                <span className="mt-2">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxBalance}
                  onChange={(e) => setFilters({ ...filters, maxBalance: e.target.value })}
                  className="border p-2 rounded w-24"
                />
                <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">
                  ✔ Apply
                </button>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className="flex justify-end">
            <button onClick={resetFilters} className="bg-gray-500 text-white px-6 py-2 rounded flex items-center">
              🔄 Reset All Filters
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="w-full border border-gray-300 shadow-lg rounded-lg text-center">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-3">Select</th>
                <th className="border p-3">Branch Code</th>
                <th className="border p-3">Branch</th>
                <th className="border p-3">SCNO</th>
                <th className="border p-3">Customer ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Days</th>
                <th className="border p-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border even:bg-blue-100 odd:bg-white hover:bg-green-300">
                  <td className="border p-3"><input type="checkbox" /></td>
                  <td className="border p-3">{row.branchCode}</td>
                  <td className="border p-3">{row.branch}</td>
                  <td className="border p-3">{row.scno}</td>
                  <td className="border p-3">{row.customerId}</td>
                  <td className="border p-3">{row.name}</td>
                  <td className="border p-3">{row.days}</td>
                  <td className="border p-3">{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PreviewDataCard;

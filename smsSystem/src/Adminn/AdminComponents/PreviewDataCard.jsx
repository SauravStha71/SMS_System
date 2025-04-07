import React, { useState } from "react";

const PreviewDataCard = () => {
  const data = [
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.16.007CHA1KA", customerId: 24, name: "Aisha Kharel", address: "NOADD2", mobile: "9841784738", days: 87, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.18.007CHA1KA", customerId: 136, name: "Ismita Patel", address: "NOADD2", mobile: "9841938463", days: 64, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 201, branch: "RATNAPARK DC", scno: "201.19.008CHA1KA", customerId: 89, name: "Roshni Mehra", address: "NOADD2", mobile: "9841859394", days: 136, balance: 136, status: "Sent", sentAt: "03-Mar-25" },
    { branchCode: 203, branch: "LAGANKHEL DC", scno: "203.21.009LAG2", customerId: 312, name: "Rajesh Shrestha", address: "Lalitpur", mobile: "9801234567", days: 42, balance: 200, status: "Sent", sentAt: "01-Apr-25" },
    { branchCode: 204, branch: "NEWROAD DC", scno: "204.22.003NEW3", customerId: 219, name: "Mina Sharma", address: "Kathmandu", mobile: "9812345678", days: 120, balance: 85, status: "Sent", sentAt: "15-Mar-25" },
    { branchCode: 205, branch: "PUTALISADAK DC", scno: "205.24.005PUT1", customerId: 181, name: "Sita Karki", address: "Bhaktapur", mobile: "9847654321", days: 30, balance: 45, status: "Sent", sentAt: "25-Feb-25" },
    { branchCode: 206, branch: "MAITIDEVI DC", scno: "206.25.006MAI1", customerId: 142, name: "Bibek Tamang", address: "Kathmandu", mobile: "9823456789", days: 78, balance: 320, status: "Sent", sentAt: "05-Apr-25" },
    { branchCode: 207, branch: "KALIMATI DC", scno: "207.26.007KAL1", customerId: 167, name: "Rina Lama", address: "Pokhara", mobile: "9834567890", days: 56, balance: 175, status: "Sent", sentAt: "29-Mar-25" },
    { branchCode: 208, branch: "DHOBIGHAT DC", scno: "208.27.008DHO1", customerId: 198, name: "Kiran Adhikari", address: "Lalitpur", mobile: "9845678901", days: 110, balance: 220, status: "Sent", sentAt: "12-Mar-25" },
    { branchCode: 209, branch: "GONGABU DC", scno: "209.28.009GON1", customerId: 256, name: "Anita Joshi", address: "Butwal", mobile: "9856789012", days: 91, balance: 142, status: "Sent", sentAt: "20-Mar-25" },
    { branchCode: 210, branch: "KOTESHWOR DC", scno: "210.29.010KOT1", customerId: 300, name: "Sagar Bista", address: "Chitwan", mobile: "9867890123", days: 102, balance: 180, status: "Sent", sentAt: "18-Mar-25" },
    { branchCode: 211, branch: "THAMEL DC", scno: "211.30.011THA1", customerId: 350, name: "Reema Thapa", address: "Kathmandu", mobile: "9878901234", days: 73, balance: 95, status: "Sent", sentAt: "10-Mar-25" },
    { branchCode: 212, branch: "BANESHWOR DC", scno: "212.31.012BAN1", customerId: 275, name: "Sunil Chaudhary", address: "Bhaktapur", mobile: "9889012345", days: 58, balance: 210, status: "Sent", sentAt: "07-Mar-25" },
    { branchCode: 213, branch: "BALAJU DC", scno: "213.32.013BAL1", customerId: 390, name: "Sushma Gurung", address: "Pokhara", mobile: "9890123456", days: 82, balance: 160, status: "Sent", sentAt: "02-Mar-25" },
    { branchCode: 214, branch: "BHAKTAPUR DC", scno: "214.33.014BHA1", customerId: 410, name: "Ramesh Basnet", address: "Bhaktapur", mobile: "9801122334", days: 67, balance: 134, status: "Sent", sentAt: "04-Mar-25" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filters, setFilters] = useState({
    minDays: "",
    maxDays: "",
    minBalance: "",
    maxBalance: "",
  });

  const applyFilters = () => { };

  const resetFilters = () => {
    setFilters({
      minDays: "",
      maxDays: "",
      minBalance: "",
      maxBalance: "",
    });
  };

  const filteredData = data.filter((item) => {
    const days = item.days;
    const balance = item.balance;
    const minDays = filters.minDays ? parseInt(filters.minDays) : -Infinity;
    const maxDays = filters.maxDays ? parseInt(filters.maxDays) : Infinity;
    const minBalance = filters.minBalance ? parseFloat(filters.minBalance) : -Infinity;
    const maxBalance = filters.maxBalance ? parseFloat(filters.maxBalance) : Infinity;

    const matchesFilter = days >= minDays && days <= maxDays && balance >= minBalance && balance <= maxBalance;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobile.includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelectedIds([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4 overflow-y-auto">
      {/* Filters Section */}
      <div className="flex justify-center items-start mb-6 w-full">
        <div className="w-full max-w-5xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-2">Overdue Days</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" value={filters.minDays} onChange={(e) => setFilters({ ...filters, minDays: e.target.value })} className="border p-2 rounded w-24" />
                <span className="mt-2">to</span>
                <input type="number" placeholder="Max" value={filters.maxDays} onChange={(e) => setFilters({ ...filters, maxDays: e.target.value })} className="border p-2 rounded w-24" />
                <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">✔ Apply</button>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <label className="font-semibold text-blue-800 block mb-2">Balance Amount</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" value={filters.minBalance} onChange={(e) => setFilters({ ...filters, minBalance: e.target.value })} className="border p-2 rounded w-24" />
                <span className="mt-2">to</span>
                <input type="number" placeholder="Max" value={filters.maxBalance} onChange={(e) => setFilters({ ...filters, maxBalance: e.target.value })} className="border p-2 rounded w-24" />
                <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">✔ Apply</button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={resetFilters} className="bg-gray-500 text-white px-6 py-2 rounded flex items-center">🔄 Reset All Filters</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <input type="text" placeholder="🔍 Search contacts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-64" />
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-medium"><i className="mr-1">✔</i>{selectedIds.length} selected</span>
          <button className="text-red-500 border border-red-400 px-3 py-1 rounded hover:bg-red-100" onClick={clearSelection}>✖ Clear All</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto w-full max-w-6xl space-y-2">
        {/* Rows per page dropdown - moved to left side */}
        <div className="flex justify-start items-center gap-2 mb-2">
          <label htmlFor="rowsPerPage" className="text-gray-700 font-medium">Show rows:</label>
          <select id="rowsPerPage" value={rowsPerPage} onChange={(e) => setRowsPerPage(parseInt(e.target.value))} className="border border-gray-300 rounded px-2 py-1">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={filteredData.length}>All</option>
          </select>
        </div>

        {/* Table */}
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Select</th>
              <th className="p-3 border">Branch Code</th>
              <th className="p-3 border">Branch</th>
              <th className="p-3 border">SCNO</th>
              <th className="p-3 border">Customer Id</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Days</th>
              <th className="p-3 border">Balance</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Sent At</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, rowsPerPage).map((item) => (
              <tr key={item.customerId} className="even:bg-blue-50">
                <td className="p-3 border text-center">
                  <input type="checkbox" checked={selectedIds.includes(item.customerId)} onChange={() => toggleSelect(item.customerId)} />
                </td>
                <td className="p-3 border">{item.branchCode}</td>
                <td className="p-3 border">{item.branch}</td>
                <td className="p-3 border">{item.scno}</td>
                <td className="p-3 border">{item.customerId}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.address}</td>
                <td className="p-3 border">{item.mobile}</td>
                <td className="p-3 border">{item.days}</td>
                <td className="p-3 border">{item.balance}</td>
                <td className="p-3 border">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">{item.status}</span>
                </td>
                <td className="p-3 border">{item.sentAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewDataCard;

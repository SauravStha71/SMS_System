import React, { useState } from 'react';

const dummyData = [
  {
    id: 1,
    branchCode: '123',
    branch: 'Ratnapark',
    scno: '45678',
    consumerId: 'C123456',
    mobileNo: '9800000000',
    noOfDays: 30,
    balanceAmount: 'Rs. 1500',
    preparedDate: '2024-04-13',
  },
  // Add more dummy entries if needed
];

const YesterdayDataTable = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 flex flex-col items-center">
     
      <div className="overflow-x-auto shadow outline outline-1 outline-black">
        <table className="min-w-full bg-white outline outline-1 outline-black">
          <thead className="bg-blue-500 text-white text-sm font-semibold">
            <tr className="outline outline-1 outline-black">
              <th className="px-4 py-3 outline outline-1 outline-black">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(dummyData.map((item) => item.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                  checked={selectedIds.length === dummyData.length}
                />
              </th>
              <th className="px-4 py-3 outline outline-1 outline-black">BRANCH CODE</th>
              <th className="px-4 py-3 outline outline-1 outline-black">BRANCH</th>
              <th className="px-4 py-3 outline outline-1 outline-black">SCNO</th>
              <th className="px-4 py-3 outline outline-1 outline-black">CONSUMER ID</th>
              <th className="px-4 py-3 outline outline-1 outline-black">MOBILE NO</th>
              <th className="px-4 py-3 outline outline-1 outline-black">NO OF DAYS</th>
              <th className="px-4 py-3 outline outline-1 outline-black">BALANCE AMOUNT</th>
              <th className="px-4 py-3 outline outline-1 outline-black">PREPARED DATE</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {dummyData.map((data) => (
              <tr key={data.id} className="outline outline-1 outline-black">
                <td className="px-4 py-2 outline outline-1 outline-black">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(data.id)}
                    onChange={() => handleSelect(data.id)}
                  />
                </td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.branchCode}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.branch}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.scno}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.consumerId}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.mobileNo}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.noOfDays}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.balanceAmount}</td>
                <td className="px-4 py-2 outline outline-1 outline-black">{data.preparedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Preview Selected Customers
        </button>
      </div>
    </div>
  );
};

export default YesterdayDataTable;

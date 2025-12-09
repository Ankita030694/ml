"use client";
import React, { useEffect, useState } from "react";
import FirestoreService from "@/services/firestore-service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  persons: number;
  date: string;
  timeSlot: string;
  outlet: {
    title: string;
  };
  timing: string;
  createdAt: any;
}

const AdminReservationsPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Filters
  const [dateFilter, setDateFilter] = useState("");
  const [outletFilter, setOutletFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    filterReservations();
  }, [reservations, dateFilter, outletFilter, nameFilter]);

  const fetchReservations = async () => {
    try {
      const data = await FirestoreService.getAll("reservations");
      // Sort by date descending (newest first)
      const sortedData = data.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setReservations(sortedData as Reservation[]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setLoading(false);
    }
  };

  const filterReservations = () => {
    let temp = [...reservations];

    if (dateFilter) {
      temp = temp.filter((res) => res.date === dateFilter);
    }

    if (outletFilter) {
      temp = temp.filter((res) => 
        res.outlet?.title?.toLowerCase().includes(outletFilter.toLowerCase())
      );
    }

    if (nameFilter) {
      temp = temp.filter((res) =>
        res.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredReservations(temp);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await FirestoreService.delete("reservations", id);
        setReservations(reservations.filter((res) => res.id !== id));
      } catch (error) {
        console.error("Error deleting reservation:", error);
        alert("Failed to delete reservation");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const uniqueOutlets = Array.from(
    new Set(reservations.map((res) => res.outlet?.title).filter(Boolean))
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-[#3C1E03]">Reservations Dashboard</h1>
            <div className="flex gap-4">
              <Link 
                href="/admin/contacts"
                className="px-4 py-2 bg-white border border-[#3C1E03] text-[#3C1E03] rounded hover:bg-gray-50 transition-colors"
              >
                View Contacts
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Date</label>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#3C1E03] focus:border-[#3C1E03]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Outlet</label>
              <select
                value={outletFilter}
                onChange={(e) => setOutletFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#3C1E03] focus:border-[#3C1E03]"
              >
                <option value="">All Outlets</option>
                {uniqueOutlets.map((outlet, index) => (
                  <option key={index} value={outlet}>
                    {outlet}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
              <input
                type="text"
                placeholder="Search name..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#3C1E03] focus:border-[#3C1E03]"
              />
            </div>
            <div className="md:col-span-3 flex justify-end">
              <button
                onClick={() => {
                  setDateFilter("");
                  setOutletFilter("");
                  setNameFilter("");
                }}
                className="text-sm text-gray-600 hover:text-[#3C1E03] underline"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading reservations...</div>
            ) : filteredReservations.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No reservations found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outlet</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredReservations.map((res) => (
                      <tr key={res.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{res.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{res.email}</div>
                          <div>{res.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{res.persons} People</div>
                          <div>{res.timeSlot} ({res.timing})</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{res.outlet?.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDelete(res.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminReservationsPage;

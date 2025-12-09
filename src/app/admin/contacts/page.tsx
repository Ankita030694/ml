"use client";
import React, { useEffect, useState } from "react";
import FirestoreService from "@/services/firestore-service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: any;
}

const AdminContactsPage = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Filters
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, nameFilter]);

  const fetchContacts = async () => {
    try {
      const data = await FirestoreService.getAll("contact");
      // Sort by date descending (newest first)
      // Note: createdAt might be a Firestore Timestamp or a Date object depending on how it was saved.
      // If it's a Firestore Timestamp, it has .seconds. If it's a JS Date, it works with new Date().
      // The contact form saves it as `new Date()`, so it should be a Timestamp in Firestore.
      const sortedData = data.sort((a: any, b: any) => {
        const dateA = a.createdAt?.seconds ? new Date(a.createdAt.seconds * 1000) : new Date(a.createdAt);
        const dateB = b.createdAt?.seconds ? new Date(b.createdAt.seconds * 1000) : new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      setContacts(sortedData as ContactMessage[]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setLoading(false);
    }
  };

  const filterContacts = () => {
    let temp = [...contacts];

    if (nameFilter) {
      temp = temp.filter((contact) =>
        contact.fullName.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredContacts(temp);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await FirestoreService.delete("contact", id);
        setContacts(contacts.filter((c) => c.id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message");
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

  // Helper to format date
  const formatDate = (dateVal: any) => {
    if (!dateVal) return "N/A";
    const date = dateVal.seconds ? new Date(dateVal.seconds * 1000) : new Date(dateVal);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-[#3C1E03]">Contact Messages</h1>
            <div className="flex gap-4">
              <Link 
                href="/admin/reservations"
                className="px-4 py-2 bg-white border border-[#3C1E03] text-[#3C1E03] rounded hover:bg-gray-50 transition-colors"
              >
                View Reservations
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
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
              <input
                type="text"
                placeholder="Search name..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#3C1E03] focus:border-[#3C1E03]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading messages...</div>
            ) : filteredContacts.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No messages found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredContacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(contact.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {contact.fullName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{contact.email}</div>
                          <div>{contact.phone}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {contact.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDelete(contact.id)}
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

export default AdminContactsPage;

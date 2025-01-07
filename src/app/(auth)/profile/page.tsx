"use client";

import React, { useState } from "react";
import { Button } from "@/ui/ui/button";
import { Input } from "@/ui/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/ui/select";

type Staff = {
  name: string;
  email: string;
  phone: string;
  image: string;
};

const staffData: Staff[] = [
  {
    name: "Lila Hartman",
    email: "lila.hartman@example.com",
    phone: "+1 231 356 2345",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ethan Brooks",
    email: "ethan.brooks@example.com",
    phone: "+1 231 356 2345",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Liam Carter",
    email: "liam.carter@example.com",
    phone: "+1 231 356 2345",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Olivia Bennett",
    email: "olivia.bennett@example.com",
    phone: "+1 231 356 2345",
    image: "https://via.placeholder.com/150",
  },
];

const StaffListing: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Filtered staff list based on the search query
  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Staff Listing</h1>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={openSidebar}
        >
          Add Staff
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search by name, email, or phone"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-700">🔍</Button>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={staff.image}
                alt={staff.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {staff.name}
              </h2>
              <div className="bg-blue-50 p-2 rounded-md w-full text-center">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  📧 {staff.email}
                </p>
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  📞 {staff.phone}
                </p>
              </div>
              <Button className="mt-4 bg-blue-600 text-white w-full hover:bg-blue-700">
                View details
              </Button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No staff members found.
          </p>
        )}
      </div>

      {/* Full-page Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <Button variant="outline" onClick={closeSidebar}>
              Close
            </Button>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <Input type="text" placeholder="First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <Input type="text" placeholder="Last Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone number</label>
              <Input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Employee ID</label>
              <Input type="text" placeholder="Enter your employee id" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date of Birth</label>
              <Input type="text" placeholder="DD/MM/YYYY" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Gender</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nationality</label>
              <Input type="text" placeholder="Enter your nationality" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <Input type="text" placeholder="Enter full address here" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Designation</label>
              <Input type="text" placeholder="Enter your designation" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Languages Preferences
              </label>
              <Input type="text" placeholder="Select your preferred languages" />
            </div>
          </form>
          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" onClick={closeSidebar}>
              Cancel
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffListing;

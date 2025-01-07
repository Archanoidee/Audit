import React from "react";
import { Button } from "@/ui/ui/button";
import { Input } from "@/ui/ui/input";

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
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Staff Listing</h1>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Add Staff
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search Content"
          className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-700">🔍</Button>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffData.map((staff, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default StaffListing;

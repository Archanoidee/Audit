"use client";
// app/profile/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/ui/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Card } from "@/ui/ui/card";
import { useRouter } from "next/navigation";
const ProfilePage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <Card className="max-w-6xl mx-auto shadow-lg rounded-lg p-12">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          <img
            src="/placeholder-avatar.png"
            alt="Profile Avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">Olivia Bennett</h2>
            <p className="text-sm text-gray-600">Team: 003509-ce</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b mb-10 text-lg">
          <Button variant="link" className="py-3 px-6 text-blue-600 font-semibold border-b-4 border-blue-600">
            Profile
          </Button>
          <Button variant="link" className="py-3 px-6 text-gray-600 hover:text-blue-600">
            Skill Management
          </Button>
          <Button
                  variant="link"
                  className="py-3 px-6 text-gray-600 hover:text-blue-600"
                  onClick={() => router.push("/payroll")}
                >
                  Payrolls
                </Button>
          <Button variant="link" className="py-3 px-6 text-gray-600 hover:text-blue-600">
            Documents
          </Button>
        </div>

        {/* Personal Information Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
          <form className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <Input type="text" placeholder="First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <Input type="text" placeholder="Last Name" />
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
              <label className="block text-sm font-medium mb-2">Languages Preferences</label>
              <Input type="text" placeholder="Select your preferred languages" />
            </div>
          </form>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end gap-6 mt-10">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;

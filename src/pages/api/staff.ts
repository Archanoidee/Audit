import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize Prisma Client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Handle POST request: Add new staff
    try {
      const { firstName, lastName, email, phone, employeeId, dateOfBirth, gender, nationality, address, designation, languages } = req.body;

      // Create new staff record
      const staff = await prisma.staff.create({
        data: {
          profile: {
            id: "some-unique-id",  // You can generate a unique ID as needed
            gmail: email,
            password: "hashedpassword", // You should hash the password in real implementation
            contactNumber: phone,
            firstName,
            lastName,
            employeeId,
            dateOfBirth,
            gender,
            maritalStatus: "Single", // Static example data
            nationality,
            address,
            designation,
            region: "North America",  // Example region
            role: "Developer", // Example role
            languages,
            department: "Engineering", // Example department
          }
        }
      });

      return res.status(201).json({ message: "Staff added successfully", staff });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add staff" });
    }
  } else if (req.method === "GET") {
    // Handle GET request: Fetch all staff
    try {
      const staff = await prisma.staff.findMany();
      return res.status(200).json({ staff });
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch staff" });
    }
  } else {
    // If method is not POST or GET, return Method Not Allowed
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

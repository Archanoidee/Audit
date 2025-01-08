// pages/api/staff/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';

// Mock staff data
const staffDatabase = [
  { id: '677e3ca618ca442d5892814e', firstName: 'John', lastName: 'Doe' },
  { id: 'another-id', firstName: 'Jane', lastName: 'Smith' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id === 'string') {
    const staff = staffDatabase.find((staff) => staff.id === id);

    if (staff) {
      res.status(200).json({ staff });
    } else {
      res.status(404).json({ error: 'Staff not found' });
    }
  } else {
    res.status(400).json({ error: 'Invalid ID' });
  }
}

export const doctors = [
  { id: 1, name: "Dr. Sarah Chen", specialty: "Internal Medicine", experience: "12 years", rating: 4.9, reviews: 342, available: true, image: "/doctors/1.jpg", price: 39 },
  { id: 2, name: "Dr. Michael Torres", specialty: "Family Medicine", experience: "8 years", rating: 4.8, reviews: 289, available: true, image: "/doctors/2.jpg", price: 39 },
  { id: 3, name: "Dr. Emily Johnson", specialty: "Urgent Care", experience: "6 years", rating: 4.7, reviews: 198, available: false, image: "/doctors/3.jpg", price: 39 },
  { id: 4, name: "Dr. James Wilson", specialty: "Cardiology", experience: "15 years", rating: 5.0, reviews: 412, available: true, image: "/doctors/4.jpg", price: 59 },
  { id: 5, name: "Dr. Priya Patel", specialty: "Pediatrics", experience: "10 years", rating: 4.9, reviews: 367, available: true, image: "/doctors/5.jpg", price: 39 },
  { id: 6, name: "Dr. Robert Kim", specialty: "Dermatology", experience: "9 years", rating: 4.8, reviews: 221, available: false, image: "/doctors/6.jpg", price: 49 },
  { id: 7, name: "Dr. Lisa Rodriguez", specialty: "Mental Health", experience: "11 years", rating: 4.9, reviews: 445, available: true, image: "/doctors/7.jpg", price: 49 },
  { id: 8, name: "Dr. David Park", specialty: "General Practice", experience: "7 years", rating: 4.7, reviews: 156, available: true, image: "/doctors/8.jpg", price: 29 },
];

export const consultations = [
  { id: 1, doctor: "Dr. Sarah Chen", specialty: "Internal Medicine", date: "2024-01-15", type: "Video Visit", status: "Completed", diagnosis: "Upper respiratory infection" },
  { id: 2, doctor: "Dr. Priya Patel", specialty: "Pediatrics", date: "2024-01-10", type: "Chat", status: "Completed", diagnosis: "Routine checkup" },
  { id: 3, doctor: "Dr. Michael Torres", specialty: "Family Medicine", date: "2024-01-20", type: "Video Visit", status: "Upcoming", diagnosis: null },
];

export const prescriptions = [
  { id: 1, medication: "Amoxicillin 500mg", dosage: "3x daily", refills: 2, prescribedBy: "Dr. Sarah Chen", expiryDate: "2024-06-15", status: "Active" },
  { id: 2, medication: "Loratadine 10mg", dosage: "1x daily", refills: 5, prescribedBy: "Dr. Michael Torres", expiryDate: "2024-12-01", status: "Active" },
];

// Booking API endpoint - writes to Google Sheets
import type { NextApiRequest, NextApiResponse } from "next";
import { appendBookingToSheet, type BookingRow } from "../../../src/lib/googleSheets";

export interface BookingRequest {
  patientName: string;
  patientAge: string;
  gender: string;
  serviceType: string;
  diagnosis: string;
  visitDate: string;
  visitTime: string;
  preferredHospital: string;
  address: string;
  phoneNumber: string;
  email: string;
  additionalNotes: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const bookingData: BookingRequest = req.body;

    // Validate required fields
    const requiredFields = [
      "patientName",
      "patientAge",
      "gender",
      "serviceType",
      "diagnosis",
      "address",
      "phoneNumber",
    ];

    const missingFields = requiredFields.filter(
      (field) => !bookingData[field as keyof BookingRequest]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const formatTimestamp = (date: Date) =>
      date.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      });

    const formatDate = (raw: string) => {
      if (!raw) return "";
      const d = new Date(raw);
      if (isNaN(d.getTime())) return raw;
      return d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });
    };

    const formatTime = (raw: string) => {
      if (!raw) return "";
      const [h, m] = raw.split(":");
      if (!h || !m) return raw;
      const hour = parseInt(h, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const h12 = hour % 12 || 12;
      return `${h12}:${m} ${ampm}`;
    };

    const bookingRow: BookingRow = {
      Timestamp: formatTimestamp(new Date()),
      "Patient Name": bookingData.patientName,
      "Patient Age": bookingData.patientAge,
      Gender: bookingData.gender,
      "Service Type": bookingData.serviceType,
      Diagnosis: bookingData.diagnosis,
      "Visit Date": formatDate(bookingData.visitDate),
      "Visit Time": formatTime(bookingData.visitTime),
      "Preferred Hospital": bookingData.preferredHospital || "",
      Address: bookingData.address,
      "Phone Number": bookingData.phoneNumber,
      Email: bookingData.email || "",
      "Additional Notes": bookingData.additionalNotes || "",
    };

    // Write to Google Sheets
    await appendBookingToSheet(bookingRow);

    return res.status(200).json({
      message: "Booking request submitted successfully",
      data: bookingRow,
    });
  } catch (error: any) {
    console.error("Error processing booking request:", error);
    return res.status(500).json({
      message: "Failed to process booking request. Please try again later.",
      error: error.message,
    });
  }
}

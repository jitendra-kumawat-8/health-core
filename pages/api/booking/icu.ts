// ICU Booking API endpoint - writes to Google Sheets
import type { NextApiRequest, NextApiResponse } from "next";
import { appendBookingToSheet, type BookingRow } from "../../../src/lib/googleSheets";

export interface ICUBookingRequest {
  patientName: string;
  patientAge: string;
  gender: string;
  diagnosis: string;
  icuType: string;
  ventilatorRequired: string;
  oxygenSupportRequired: string;
  expectedDuration: string;
  admissionUrgency: string;
  preferredHospital: string;
  preferredCity: string;
  contactName: string;
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
    const bookingData: ICUBookingRequest = req.body;

    // Validate required fields
    const requiredFields = [
      "patientName",
      "patientAge",
      "gender",
      "diagnosis",
      "icuType",
      "ventilatorRequired",
      "oxygenSupportRequired",
      "admissionUrgency",
      "preferredCity",
      "contactName",
      "phoneNumber",
    ];

    const missingFields = requiredFields.filter(
      (field) => !bookingData[field as keyof ICUBookingRequest]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Prepare data for Google Sheets (matching Excel column order from PRD)
    const bookingRow: BookingRow = {
      Timestamp: new Date().toISOString(),
      "Patient Name": bookingData.patientName,
      "Patient Age": bookingData.patientAge,
      Gender: bookingData.gender,
      Diagnosis: bookingData.diagnosis,
      "ICU Type": bookingData.icuType,
      "Ventilator Required": bookingData.ventilatorRequired,
      "Oxygen Support Required": bookingData.oxygenSupportRequired,
      "Expected Duration (Days)": bookingData.expectedDuration || "",
      "Admission Urgency": bookingData.admissionUrgency,
      "Preferred Hospital": bookingData.preferredHospital || "",
      "Preferred City": bookingData.preferredCity,
      "Contact Name": bookingData.contactName,
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

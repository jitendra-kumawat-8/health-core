// Registration API endpoint - writes to Google Sheets (2nd sheet)
import type { NextApiRequest, NextApiResponse } from "next";
import {
  appendRegistrationToSheet,
  type RegistrationRow,
} from "../../../src/lib/googleSheets/registrations";

export interface RegistrationRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  areaOfOperation: string;
  medicalId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data: RegistrationRequest = req.body;

    // Validate required fields
    const requiredFields = [
      "fullName",
      "phoneNumber",
      "email",
      "gender",
      "areaOfOperation",
      "medicalId",
    ];

    const missingFields = requiredFields.filter(
      (field) => !data[field as keyof RegistrationRequest]
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

    const registrationRow: RegistrationRow = {
      Timestamp: formatTimestamp(new Date()),
      "Full Name": data.fullName,
      "Phone Number": data.phoneNumber,
      Email: data.email,
      Gender: data.gender,
      "Area of Operation": data.areaOfOperation,
      "Medical ID": data.medicalId,
    };

    // Write to Google Sheets (Registrations sheet)
    await appendRegistrationToSheet(registrationRow);

    return res.status(200).json({
      message: "Registration submitted successfully",
      data: registrationRow,
    });
  } catch (error: any) {
    console.error("Error processing registration:", error);
    return res.status(500).json({
      message: "Failed to process registration. Please try again later.",
      error: error.message,
    });
  }
}

import { google } from "googleapis";

// Extract sheet ID from the Google Sheets URL
// URL format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
export const GOOGLE_SHEET_ID = "18G6ewFA80FKaHqFX9q4eezvYXwZM82ea-JpdNJ3Hv08";
export const SHEET_NAME = "ICU_Bookings"; // Default sheet name - will use first sheet if this doesn't exist

// Expected column headers in exact order
export const EXPECTED_HEADERS = [
  "Timestamp",
  "Patient Name",
  "Patient Age",
  "Gender",
  "Service Type",
  "Diagnosis",
  "Visit Date",
  "Visit Time",
  "Preferred Hospital",
  "Address",
  "Phone Number",
  "Email",
  "Additional Notes",
];

export interface BookingRow {
  Timestamp: string;
  "Patient Name": string;
  "Patient Age": string;
  Gender: string;
  "Service Type": string;
  Diagnosis: string;
  "Visit Date": string;
  "Visit Time": string;
  "Preferred Hospital": string;
  Address: string;
  "Phone Number": string;
  Email: string;
  "Additional Notes": string;
}

/**
 * Initialize Google Sheets API client
 * Uses Service Account authentication (recommended for production)
 */
async function getSheetsClient() {
  // Service Account Authentication (Required)
  if (
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY
  ) {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  }

  // Alternative: Use service account JSON file path
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE) {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  }

  throw new Error(
    "Google Sheets authentication not configured. Please set either:\n" +
      "1. GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY, or\n" +
      "2. GOOGLE_SERVICE_ACCOUNT_KEY_FILE (path to service account JSON file)\n\n" +
      "See env.example for configuration details."
  );
}

/**
 * Append a new row to the Google Sheet
 */
export async function appendBookingToSheet(
  bookingData: BookingRow
): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    const actualSheetName = await getActualSheetName();

    // Ensure headers exist before appending
    await ensureHeadersExist();

    // Convert object to array in the correct column order (matching EXPECTED_HEADERS)
    const rowValues = [
      bookingData.Timestamp,
      bookingData["Patient Name"],
      bookingData["Patient Age"],
      bookingData.Gender,
      bookingData["Service Type"],
      bookingData.Diagnosis,
      bookingData["Visit Date"],
      bookingData["Visit Time"],
      bookingData["Preferred Hospital"],
      bookingData.Address,
      bookingData["Phone Number"],
      bookingData.Email,
      bookingData["Additional Notes"],
    ];

    // Append the row to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${actualSheetName}!A:Z`, // Append to the sheet
      valueInputOption: "USER_ENTERED", // Values will be parsed as if typed into the UI
      insertDataOption: "INSERT_ROWS", // Insert a new row
      requestBody: {
        values: [rowValues],
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to append row: ${response.statusText}`);
    }

    console.log(`Successfully appended booking to sheet: ${actualSheetName}`);
    return;
  } catch (error: any) {
    console.error("Error appending to Google Sheet:", error);
    throw new Error(`Failed to write to Google Sheet: ${error.message}`);
  }
}

/**
 * Get the actual sheet name (handles case where ICU_Bookings might not exist)
 */
async function getActualSheetName(): Promise<string> {
  try {
    const sheets = await getSheetsClient();

    // Get all sheets in the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEET_ID,
    });

    if (spreadsheet.data.sheets && spreadsheet.data.sheets.length > 0) {
      // First, try to find Bookings sheet
      const icuSheet = spreadsheet.data.sheets.find(
        (sheet) => sheet.properties?.title === SHEET_NAME
      );

      if (icuSheet?.properties?.title) {
        return icuSheet.properties.title;
      }

      // If not found, use the first sheet
      const firstSheet = spreadsheet.data.sheets[0];
      if (firstSheet?.properties?.title) {
        console.log(
          `Sheet "${SHEET_NAME}" not found. Using first sheet: "${firstSheet.properties.title}"`
        );
        return firstSheet.properties.title;
      }
    }

    // Fallback to default
    return SHEET_NAME;
  } catch (error: any) {
    console.error("Error getting sheet name:", error);
    return SHEET_NAME;
  }
}

/**
 * Get the header row from the sheet (to verify column structure)
 */
export async function getSheetHeaders(): Promise<string[]> {
  try {
    const sheets = await getSheetsClient();
    const actualSheetName = await getActualSheetName();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${actualSheetName}!1:1`, // Get first row
    });

    if (response.data.values && response.data.values.length > 0) {
      return response.data.values[0] as string[];
    }

    return [];
  } catch (error: any) {
    console.error("Error reading sheet headers:", error);
    return [];
  }
}

/**
 * Ensure headers exist in the sheet (create if missing)
 */
async function ensureHeadersExist(): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    const actualSheetName = await getActualSheetName();
    const existingHeaders = await getSheetHeaders();

    // Check if headers match expected headers
    const headersMatch =
      existingHeaders.length === EXPECTED_HEADERS.length &&
      EXPECTED_HEADERS.every(
        (header, index) => existingHeaders[index] === header
      );

    if (headersMatch) {
      console.log("Headers already exist and match expected format");
      return;
    }

    // If no headers exist or they don't match, create/update them
    if (existingHeaders.length === 0 || !headersMatch) {
      console.log("Creating/updating headers in sheet...");

      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: `${actualSheetName}!1:1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [EXPECTED_HEADERS],
        },
      });

      console.log("Headers created/updated successfully");
    }
  } catch (error: any) {
    console.error("Error ensuring headers exist:", error);
    // Don't throw - we'll try to append anyway
  }
}

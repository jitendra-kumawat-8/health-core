import { google } from "googleapis";
import { GOOGLE_SHEET_ID } from "./index";

export const REGISTRATION_SHEET_NAME = "Resgistration";

// Expected column headers in exact order
export const REGISTRATION_HEADERS = [
  "Timestamp",
  "Full Name",
  "Phone Number",
  "Email",
  "Gender",
  "Area of Operation",
  "Medical ID",
];

export interface RegistrationRow {
  Timestamp: string;
  "Full Name": string;
  "Phone Number": string;
  Email: string;
  Gender: string;
  "Area of Operation": string;
  "Medical ID": string;
}

/**
 * Initialize Google Sheets API client
 */
async function getSheetsClient() {
  if (
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY
  ) {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
  }

  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE) {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
  }

  throw new Error(
    "Google Sheets authentication not configured. Please set either:\n" +
      "1. GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY, or\n" +
      "2. GOOGLE_SERVICE_ACCOUNT_KEY_FILE (path to service account JSON file)"
  );
}

/**
 * Get the actual registration sheet name (uses 2nd sheet / index 1)
 */
async function getRegistrationSheetName(): Promise<string> {
  try {
    const sheets = await getSheetsClient();

    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEET_ID,
    });

    if (spreadsheet.data.sheets && spreadsheet.data.sheets.length > 0) {
      // First try to find a sheet named "Registrations"
      const regSheet = spreadsheet.data.sheets.find(
        (sheet) => sheet.properties?.title === REGISTRATION_SHEET_NAME
      );

      if (regSheet?.properties?.title) {
        return regSheet.properties.title;
      }

      // If not found by name, try the 2nd sheet (index 1)
      if (spreadsheet.data.sheets.length > 1) {
        const secondSheet = spreadsheet.data.sheets[1];
        if (secondSheet?.properties?.title) {
          console.log(
            `Sheet "${REGISTRATION_SHEET_NAME}" not found. Using second sheet: "${secondSheet.properties.title}"`
          );
          return secondSheet.properties.title;
        }
      }
    }

    return REGISTRATION_SHEET_NAME;
  } catch (error: any) {
    console.error("Error getting registration sheet name:", error);
    return REGISTRATION_SHEET_NAME;
  }
}

/**
 * Get the header row from the registration sheet
 */
async function getRegistrationSheetHeaders(): Promise<string[]> {
  try {
    const sheets = await getSheetsClient();
    const sheetName = await getRegistrationSheetName();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${sheetName}!1:1`,
    });

    if (response.data.values && response.data.values.length > 0) {
      return response.data.values[0] as string[];
    }

    return [];
  } catch (error: any) {
    console.error("Error reading registration sheet headers:", error);
    return [];
  }
}

/**
 * Ensure headers exist in the registration sheet
 */
async function ensureRegistrationHeadersExist(): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    const sheetName = await getRegistrationSheetName();
    const existingHeaders = await getRegistrationSheetHeaders();

    const headersMatch =
      existingHeaders.length === REGISTRATION_HEADERS.length &&
      REGISTRATION_HEADERS.every(
        (header, index) => existingHeaders[index] === header
      );

    if (headersMatch) {
      console.log("Registration headers already exist and match");
      return;
    }

    if (existingHeaders.length === 0 || !headersMatch) {
      console.log("Creating/updating registration headers...");

      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: `${sheetName}!1:1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [REGISTRATION_HEADERS],
        },
      });

      console.log("Registration headers created/updated successfully");
    }
  } catch (error: any) {
    console.error("Error ensuring registration headers exist:", error);
  }
}

/**
 * Append a new registration row to the Google Sheet
 */
export async function appendRegistrationToSheet(
  data: RegistrationRow
): Promise<void> {
  try {
    const sheets = await getSheetsClient();
    const sheetName = await getRegistrationSheetName();

    await ensureRegistrationHeadersExist();

    const rowValues = [
      data.Timestamp,
      data["Full Name"],
      data["Phone Number"],
      data.Email,
      data.Gender,
      data["Area of Operation"],
      data["Medical ID"],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${sheetName}!A:Z`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to append row: ${response.statusText}`);
    }

    console.log(`Successfully appended registration to sheet: ${sheetName}`);
  } catch (error: any) {
    console.error("Error appending registration to Google Sheet:", error);
    throw new Error(
      `Failed to write registration to Google Sheet: ${error.message}`
    );
  }
}

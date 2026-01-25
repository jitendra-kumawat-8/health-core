# Google Sheets API Setup Guide

This guide will help you set up Google Sheets API integration for the ICU booking functionality.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- The Google Sheet URL: https://docs.google.com/spreadsheets/d/18G6ewFA80FKaHqFX9q4eezvYXwZM82ea-JpdNJ3Hv08/edit

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - **Name**: `health-core-sheets` (or any name you prefer)
   - **Description**: Service account for Health Core booking system
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file

## Step 4: Extract Credentials from JSON

Open the downloaded JSON file. You'll need two values:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@project-id.iam.gserviceaccount.com",
  ...
}
```

- **client_email**: This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- **private_key**: This is your `GOOGLE_PRIVATE_KEY`

## Step 5: Share Google Sheet with Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/18G6ewFA80FKaHqFX9q4eezvYXwZM82ea-JpdNJ3Hv08/edit
2. Click the "Share" button (top right)
3. Add the service account email (from Step 4) as an **Editor**
4. Click "Send" (you don't need to notify them)

## Step 6: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Keep the quotes around the `GOOGLE_PRIVATE_KEY` value
- The `\n` characters in the private key are important - they represent newlines
- Never commit `.env.local` to version control (it's already in `.gitignore`)

## Step 7: Verify Sheet Structure

Make sure your Google Sheet has a sheet named **"ICU_Bookings"** with the following headers in row 1:

| Timestamp | Patient Name | Patient Age | Gender | Diagnosis | ICU Type | Ventilator Required | Oxygen Support Required | Expected Duration (Days) | Admission Urgency | Preferred Hospital | Preferred City | Contact Name | Phone Number | Email | Additional Notes |
|-----------|-------------|-------------|--------|-----------|----------|---------------------|-------------------------|-------------------------|-------------------|-------------------|----------------|--------------|---------------|-------|-----------------|

If the sheet doesn't exist or has a different name, the system will try to append to the first sheet in the spreadsheet.

## Step 8: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/booking` page
3. Fill out the booking form
4. Submit the form
5. Check your Google Sheet - you should see a new row with the booking data

## Troubleshooting

### Error: "Google Sheets authentication not configured"
- Make sure your `.env.local` file exists and has the correct variables
- Restart your development server after adding environment variables

### Error: "Failed to write to Google Sheet"
- Verify the service account email has Editor access to the Google Sheet
- Check that the Google Sheets API is enabled in Google Cloud Console
- Verify the sheet ID is correct: `18G6ewFA80FKaHqFX9q4eezvYXwZM82ea-JpdNJ3Hv08`

### Error: "The caller does not have permission"
- Make sure you shared the Google Sheet with the service account email
- Verify the service account has Editor permissions (not just Viewer)

### Private Key Format Issues
- Make sure the private key includes the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines
- Keep the `\n` characters in the private key - they represent newlines
- The entire private key should be in quotes in your `.env.local` file

## Security Best Practices

1. **Never commit credentials**: The `.env.local` file is already in `.gitignore`
2. **Use environment variables**: Never hardcode credentials in your code
3. **Limit permissions**: The service account only needs Editor access to the specific sheet
4. **Rotate keys**: Periodically rotate your service account keys for security
5. **Monitor access**: Regularly check who has access to your Google Sheet

## Alternative: Using Service Account JSON File

Instead of using environment variables, you can use the JSON file directly:

1. Place the JSON file in your project (e.g., `./config/service-account-key.json`)
2. Add to `.env.local`:
   ```env
   GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./config/service-account-key.json
   ```
3. Make sure the file path is in `.gitignore`

## Support

If you encounter any issues, check:
- Google Cloud Console logs
- Next.js server logs (terminal output)
- Browser console for client-side errors

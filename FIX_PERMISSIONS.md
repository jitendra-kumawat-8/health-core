# Fix Google Sheets Permission Error

## Error: "The caller does not have permission" (403)

This error means your Google Service Account doesn't have access to the Google Sheet.

## Quick Fix Steps

### Step 1: Find Your Service Account Email

Your service account email is in your `.env.local` file:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
```

Or check the JSON key file you downloaded - look for the `client_email` field.

### Step 2: Share Google Sheet with Service Account

1. Open your Google Sheet:
   https://docs.google.com/spreadsheets/d/18G6ewFA80FKaHqFX9q4eezvYXwZM82ea-JpdNJ3Hv08/edit

2. Click the **"Share"** button (top right corner)

3. In the "Share with people and groups" dialog:
   - Paste your **service account email** (from Step 1)
   - Set permission to **"Editor"** (not Viewer!)
   - **Uncheck** "Notify people" (service accounts don't need notifications)
   - Click **"Share"**

### Step 3: Verify Permissions

The service account email should now appear in the "Share" dialog with "Editor" access.

### Step 4: Test Again

Try submitting the booking form again. The error should be resolved.

## Common Issues

### "Can't find this user"
- Make sure you copied the **entire** service account email
- It should end with `@project-id.iam.gserviceaccount.com`
- Check for typos or extra spaces

### Still Getting 403 Error
1. Double-check the service account email matches exactly
2. Verify the permission is set to **"Editor"** (not "Viewer")
3. Make sure you clicked "Share" to save the changes
4. Wait a few seconds for permissions to propagate

### Service Account Email Not Found
If you don't have the service account email:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **"APIs & Services"** > **"Credentials"**
3. Find your service account and click on it
4. The email is shown at the top (e.g., `health-core-sheets@my-project.iam.gserviceaccount.com`)

## Security Note

⚠️ The service account only needs access to this specific Google Sheet. Don't give it access to your entire Google Drive.

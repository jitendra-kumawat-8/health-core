# How to Find Your Google Service Account Private Key

## Quick Guide

The private key is located in the **JSON key file** you download from Google Cloud Console.

## Step-by-Step Instructions

### Step 1: Download the Service Account JSON Key File

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **"APIs & Services"** > **"Credentials"**
3. Find your service account in the list
4. Click on the service account name
5. Go to the **"Keys"** tab
6. Click **"Add Key"** > **"Create new key"**
7. Select **"JSON"** format
8. Click **"Create"** - this downloads a JSON file (e.g., `your-project-12345-abcde.json`)

### Step 2: Open the JSON File

Open the downloaded JSON file in any text editor (Notepad, VS Code, etc.).

### Step 3: Find the Private Key

The JSON file will look like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n...many lines of characters...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@project-id.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

### Step 4: Extract the Values You Need

You need **TWO values** from this JSON file:

1. **`client_email`** → This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - Example: `health-core-sheets@my-project.iam.gserviceaccount.com`

2. **`private_key`** → This is your `GOOGLE_PRIVATE_KEY`
   - It's the entire value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - It will be a very long string with `\n` characters in it

### Step 5: Add to .env.local

Open your `.env.local` file and add:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n...\n-----END PRIVATE KEY-----\n"
```

## Important Notes

### ✅ DO:
- Copy the **entire** private key value (including BEGIN and END lines)
- Keep the quotes around the private key value
- Keep the `\n` characters - they represent newlines
- Make sure the private key is on a single line in your `.env.local` file

### ❌ DON'T:
- Don't remove the `-----BEGIN PRIVATE KEY-----` or `-----END PRIVATE KEY-----` lines
- Don't remove the `\n` characters
- Don't add actual line breaks in the `.env.local` file (keep it as one line)
- Don't share this file or commit it to version control

## Example

If your JSON file has:
```json
{
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7vbqajDhAgh2U\n...more lines...\n-----END PRIVATE KEY-----\n",
  "client_email": "my-service@my-project.iam.gserviceaccount.com"
}
```

Your `.env.local` should have:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=my-service@my-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7vbqajDhAgh2U\n...more lines...\n-----END PRIVATE KEY-----\n"
```

## Troubleshooting

### "Invalid private key" error
- Make sure you copied the entire key including BEGIN and END lines
- Make sure the quotes are around the entire value
- Check that `\n` characters are preserved (not converted to actual newlines)

### "The caller does not have permission" error
- Make sure you shared the Google Sheet with the service account email
- The service account email is the `client_email` value from the JSON file
- Give it **Editor** access (not just Viewer)

### Can't find the Keys tab
- Make sure you clicked on the service account name (not just the list)
- The Keys tab is on the service account details page

## Security Reminder

⚠️ **Never commit the JSON key file or `.env.local` to version control!**

The `.env.local` file is already in `.gitignore`, so it won't be committed. But always double-check before pushing code.

# Email Configuration Setup

The contact form is now configured to send emails to **Bunkyapp.ph@gmail.com** when users submit the form.

## Setup Instructions

### 1. Create Environment Variables File

Create a file named `.env.local` in the root of your project with the following content:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

### 2. Generate Gmail App Password

Since the email service uses Gmail, you need to generate an **App Password**:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Once 2-Step Verification is enabled, go back to Security
5. Under "How you sign in to Google", select **App passwords**
6. Select app: **Mail**
7. Select device: **Other (Custom name)** - enter "Bunky Contact Form"
8. Click **Generate**
9. Copy the 16-character password
10. Use this password as `EMAIL_PASSWORD` in your `.env.local` file

### 3. Update EMAIL_USER

Replace `your-gmail@gmail.com` with the Gmail account you want to use for sending emails.

**Note:** The emails will be sent FROM this account TO Bunkyapp.ph@gmail.com

### 4. Restart Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## How It Works

- Users fill out the contact form with their name, email, subject, and message
- The form submits to `/api/contact` endpoint
- The API sends an email to **Bunkyapp.ph@gmail.com** with:
  - The user's information
  - Their message
  - Reply-to set to the user's email (so you can reply directly)

## Testing

1. Start your development server
2. Navigate to the contact form section
3. Fill out all fields
4. Click "Send Message"
5. Check the Bunkyapp.ph@gmail.com inbox for the email

## Troubleshooting

- **"Failed to send email"**: Check that your `.env.local` file exists and has correct credentials
- **Gmail blocking**: Make sure you're using an App Password, not your regular password
- **Server not restarted**: Restart the dev server after creating `.env.local`

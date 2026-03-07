import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "Ashokamhealthcare@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

const resend = new Resend(RESEND_API_KEY);

interface BookingEmailData {
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

interface RegistrationEmailData {
  fullName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  areaOfOperation: string;
  medicalId: string;
}

function buildBookingEmailHtml(data: BookingEmailData): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0d7c66 0%, #0a6b58 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Booking Received</h1>
        <p style="color: #e0f2f1; margin: 8px 0 0; font-size: 14px;">A new service booking has been submitted</p>
      </div>
      <div style="padding: 24px;">
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #0d7c66;">
          <h3 style="margin: 0 0 12px; color: #0d7c66; font-size: 16px;">Patient Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.patientName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Age</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.patientAge}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Gender</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.gender}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Phone</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;"><a href="tel:${data.phoneNumber}" style="color: #0d7c66; text-decoration: none;">${data.phoneNumber}</a></td></tr>
            ${data.email ? `<tr><td style="padding: 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.email}</td></tr>` : ""}
          </table>
        </div>
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2196f3;">
          <h3 style="margin: 0 0 12px; color: #2196f3; font-size: 16px;">Service Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Service</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.serviceType}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Diagnosis</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.diagnosis}</td></tr>
            ${data.visitDate ? `<tr><td style="padding: 6px 0; color: #64748b;">Visit Date</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.visitDate}</td></tr>` : ""}
            ${data.visitTime ? `<tr><td style="padding: 6px 0; color: #64748b;">Visit Time</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.visitTime}</td></tr>` : ""}
            ${data.preferredHospital ? `<tr><td style="padding: 6px 0; color: #64748b;">Preferred Hospital</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.preferredHospital}</td></tr>` : ""}
          </table>
        </div>
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border-left: 4px solid #ff9800;">
          <h3 style="margin: 0 0 12px; color: #ff9800; font-size: 16px;">Visit Address</h3>
          <p style="margin: 0; color: #1e293b; line-height: 1.5;">${data.address}</p>
          ${data.additionalNotes ? `<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0;"><span style="color: #64748b; font-size: 13px;">Notes:</span><p style="margin: 4px 0 0; color: #1e293b; font-size: 14px;">${data.additionalNotes}</p></div>` : ""}
        </div>
      </div>
      <div style="padding: 16px 24px; background: #f1f5f9; text-align: center;">
        <p style="margin: 0; color: #94a3b8; font-size: 12px;">Ashokam Healthcare — Because We Care</p>
      </div>
    </div>
  `;
}

function buildRegistrationEmailHtml(data: RegistrationEmailData): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0d7c66 0%, #0a6b58 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Registration</h1>
        <p style="color: #e0f2f1; margin: 8px 0 0; font-size: 14px;">A new professional has registered on the platform</p>
      </div>
      <div style="padding: 24px;">
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border-left: 4px solid #0d7c66;">
          <h3 style="margin: 0 0 12px; color: #0d7c66; font-size: 16px;">Registration Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Full Name</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.fullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Phone</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;"><a href="tel:${data.phoneNumber}" style="color: #0d7c66; text-decoration: none;">${data.phoneNumber}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Gender</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.gender}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Area of Operation</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.areaOfOperation}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Medical ID</td><td style="padding: 6px 0; color: #1e293b; font-weight: 500;">${data.medicalId}</td></tr>
          </table>
        </div>
      </div>
      <div style="padding: 16px 24px; background: #f1f5f9; text-align: center;">
        <p style="margin: 0; color: #94a3b8; font-size: 12px;">Ashokam Healthcare — Because We Care</p>
      </div>
    </div>
  `;
}

export async function sendBookingNotification(
  data: BookingEmailData
): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured — skipping email notification");
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Booking: ${data.serviceType} — ${data.patientName}`,
      html: buildBookingEmailHtml(data),
    });

    if (error) {
      console.error("Failed to send booking notification email:", error);
      return;
    }

    console.log("Booking notification email sent successfully");
  } catch (error: any) {
    console.error("Failed to send booking notification email:", error.message);
  }
}

export async function sendRegistrationNotification(
  data: RegistrationEmailData
): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured — skipping email notification");
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Registration: ${data.fullName}`,
      html: buildRegistrationEmailHtml(data),
    });

    if (error) {
      console.error("Failed to send registration notification email:", error);
      return;
    }

    console.log("Registration notification email sent successfully");
  } catch (error: any) {
    console.error("Failed to send registration notification email:", error.message);
  }
}

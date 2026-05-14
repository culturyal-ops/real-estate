import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(lead: any) {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_EMAIL) {
    console.warn('Resend API key or admin email not configured');
    return;
  }

  try {
    await resend.emails.send({
      from: 'BuildBase <noreply@buildbase.com>',
      to: process.env.ADMIN_EMAIL,
      subject: `New ${lead.inquiryType} Inquiry - ${lead.name}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Inquiry Type:</strong> ${lead.inquiryType}</p>
        ${lead.relatedListing ? `<p><strong>Related Listing:</strong> ${lead.relatedListing}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${lead.message}</p>
        <hr />
        <p><small>Received at ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Send confirmation email to visitor
    await resend.emails.send({
      from: 'BuildBase <noreply@buildbase.com>',
      to: lead.email,
      subject: 'Thank you for your inquiry - BuildBase',
      html: `
        <h2>Thank you for contacting BuildBase</h2>
        <p>Dear ${lead.name},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p>${lead.message}</p>
        <hr />
        <p>Best regards,<br />BuildBase Team</p>
      `,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

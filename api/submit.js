// Vercel Serverless Function for lead capture form
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, practice, phone, email, message } = req.body || {};

  // Validate
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Log submission (in production you'd write to a database or send email)
  const submission = {
    timestamp: new Date().toISOString(),
    name,
    practice: practice || '',
    phone: phone || '',
    email,
    message: message || '',
    source: 'chiropractor-austin-tx'
  };

  console.log('🔥 NEW LEAD:', JSON.stringify(submission, null, 2));

  // TODO: Connect to your CRM or email service
  // e.g. SendGrid, Resend, Google Sheets via webhook

  return res.status(200).json({
    success: true,
    message: 'Thank you! We\'ll be in touch within 24 hours.'
  });
}

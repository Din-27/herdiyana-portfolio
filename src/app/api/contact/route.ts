import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // SMTP Configuration from Environment Variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser || "herdiyanafirmansyah27@gmail.com";

    // If SMTP credentials are not yet configured in .env, return clear instructions
    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured (SMTP_USER or SMTP_PASS missing).");
      return NextResponse.json(
        {
          error: "Konfigurasi SMTP belum diatur di server environment (SMTP_USER / SMTP_PASS).",
          fallbackToMailto: true,
        },
        { status: 503 }
      );
    }

    // Initialize Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailSubject = subject 
      ? `[Portfolio Contact] ${subject} - ${name}` 
      : `[Portfolio Contact] Pesan Baru dari ${name}`;

    // Send Mail via SMTP
    await transporter.sendMail({
      from: `"Portfolio Herdiyana" <${smtpUser}>`,
      to: targetEmail,
      replyTo: `"${name}" <${email}>`,
      subject: mailSubject,
      text: `Halo Herdiyana,\n\nAnda menerima pesan kontak baru dari portfolio:\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject || "-"}\n\nPesan:\n${message}\n\n---\nDikirim otomatis melalui SMTP Service Herdiyana Portfolio`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <div style="border-bottom: 2px solid #10b981; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 20px;">Pesan Baru dari Portfolio</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Dikirim melalui formulir kontak https://herdiyana.vercel.app</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;"><strong>Pengirim:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #10b981; font-size: 14px;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Subjek:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject || "Tanpa Subjek"}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Isi Pesan:</p>
            <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 12px; color: #94a3b8; text-align: center;">
            Tombol reply di email client Anda akan langsung mengarah ke ${email}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim via SMTP!",
    });
  } catch (error: unknown) {
    console.error("Error sending email via SMTP:", error);
    const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
    return NextResponse.json(
      { error: `Gagal mengirim email: ${errorMessage}`, fallbackToMailto: true },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { RegistrationData, RegistrationResponse } from "@/types/registration";
import fs from "fs/promises";
import path from "path";

const WHATSAPP_NUMBER = "917907318843"; // +91 7907318843

export async function POST(request: Request) {
  try {
    const body: RegistrationData = await request.json();

    // Validate incoming payload
    if (!body.fullName || !body.phone || !body.email || !body.upiReference) {
      return NextResponse.json<RegistrationResponse>(
        {
          success: false,
          message: "Missing required registration details or UPI reference",
          error: "All required fields (Full Name, Phone, Email, UPI Reference) must be provided.",
        },
        { status: 400 }
      );
    }

    const registrationId = `NARA-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Handle payment screenshot file storage if uploaded
    let screenshotUrl: string | undefined = undefined;
    if (body.screenshotBase64 && typeof body.screenshotBase64 === "string") {
      try {
        const matches = body.screenshotBase64.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
        let ext = "jpg";
        let base64Data = body.screenshotBase64;

        if (matches && matches.length === 3) {
          ext = matches[1].replace("+xml", "").toLowerCase();
          if (ext === "jpeg") ext = "jpg";
          base64Data = matches[2];
        }

        const buffer = Buffer.from(base64Data, "base64");
        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(uploadsDir, { recursive: true });

        const filename = `receipt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${ext}`;
        const filePath = path.join(uploadsDir, filename);
        await fs.writeFile(filePath, buffer);
        screenshotUrl = `/uploads/${filename}`;
      } catch (uploadErr) {
        console.error("[RECEIPT UPLOAD ERROR]", uploadErr);
      }
    }

    // Determine host for screenshot URL
    const hostHeader = request.headers.get("x-forwarded-host") || request.headers.get("host") || "localhost:3000";
    const proto = request.headers.get("x-forwarded-proto") || (hostHeader.includes("localhost") ? "http" : "https");
    const fullScreenshotUrl = screenshotUrl ? `${proto}://${hostHeader}${screenshotUrl}` : undefined;

    const record = {
      registrationId,
      timestamp: new Date().toISOString(),
      fullName: body.fullName.trim(),
      phone: body.phone.trim(),
      email: body.email.trim(),
      sessionBatch: body.sessionBatch || "General Outdoor Session",
      message: body.message?.trim() || "",
      amount: body.amount || 799,
      upiReference: body.upiReference.trim(),
      screenshotUrl: fullScreenshotUrl || screenshotUrl,
      screenshotName: body.screenshotName,
      status: "PENDING_VERIFICATION",
    };

    // Log structured event for easy indexing and server logs
    console.log("[TEAM NARA REGISTRATION]", JSON.stringify(record, null, 2));

    // Construct formatted WhatsApp message
    const messageLines = [
      "🔥 *TEAM NARA — SESSION BOOKING & PAYMENT PROOF*",
      "",
      `📋 *Registration ID:* ${registrationId}`,
      `👤 *Name:* ${body.fullName.trim()}`,
      `📞 *Phone:* ${body.phone.trim()}`,
      `✉️ *Email:* ${body.email.trim()}`,
      `🏃 *Session Batch:* ${body.sessionBatch || "General Outdoor Session"}`,
      `💰 *Amount:* ₹${body.amount || 799}`,
      `💳 *UPI Ref / UTR:* ${body.upiReference.trim()}`,
    ];

    if (body.message?.trim()) {
      messageLines.push(`📝 *Notes:* ${body.message.trim()}`);
    }

    if (body.screenshotName) {
      messageLines.push("", `📸 *Payment Screenshot:* ${body.screenshotName} (Attached)`);
    }

    const whatsappText = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

    return NextResponse.json<RegistrationResponse>({
      success: true,
      message: "Your registration is received. Our team will verify your payment and confirm your spot shortly.",
      registrationId,
      data: record,
      screenshotUrl: fullScreenshotUrl || screenshotUrl,
      whatsappUrl,
    });
  } catch (error: unknown) {
    console.error("[TEAM NARA REGISTRATION ERROR]", error);
    return NextResponse.json<RegistrationResponse>(
      {
        success: false,
        message: "Internal server error occurred while processing registration.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

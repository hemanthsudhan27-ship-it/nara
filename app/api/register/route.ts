import { NextResponse } from "next/server";
import { RegistrationData, RegistrationResponse } from "@/types/registration";

const WHATSAPP_NUMBER = "918593912936"; // +91 85939 12936

export async function POST(request: Request) {
  try {
    const body: RegistrationData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.phone || !body.email) {
      return NextResponse.json<RegistrationResponse>(
        {
          success: false,
          message: "Missing required registration details",
          error: "Full Name, Phone, and Email are required.",
        },
        { status: 400 }
      );
    }

    const registrationId = `NARA-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const record = {
      registrationId,
      timestamp: new Date().toISOString(),
      fullName: body.fullName.trim(),
      phone: body.phone.trim(),
      email: body.email.trim(),
      age: body.age?.trim() || "",
      sessionBatch: body.sessionBatch || "Outdoor Parkour & Freerunning (Mon, Wed & Fri 6:00 AM)",
      message: body.message?.trim() || "",
      riskAgreed: body.riskAgreed ?? true,
      status: "PENDING_CONTACT",
    };

    // Log structured event for server records
    console.log("[TEAM NARA REGISTRATION]", JSON.stringify(record, null, 2));

    // Construct formatted WhatsApp message
    const messageLines = [
      "🔥 *TEAM NARA — OUTDOOR CLASS ADMISSION*",
      "",
      `📋 *Registration ID:* ${registrationId}`,
      `👤 *Name:* ${body.fullName.trim()}`,
      `🔢 *Age:* ${body.age?.trim() || "N/A"}`,
      `📞 *Phone:* ${body.phone.trim()}`,
      `✉️ *Email:* ${body.email.trim()}`,
      `🏃 *Class:* ${body.sessionBatch || "Outdoor Parkour & Freerunning"}`,
      `💰 *Admission Fee:* ₹2,500 (Monthly: ₹2,000)`,
      `👟 *Coaching:* Team NARA Trainers`,
      `📅 *Schedule:* Mon, Wed & Fri • 6:00 AM – 7:30 AM`,
      `🧘 *Requirements:* Yoga mat & bottle of water`,
      "",
      `✅ *Risk Awareness:* Participant has acknowledged the physical risks of parkour and freerunning.`,
    ];

    if (body.message?.trim()) {
      messageLines.push("", `📝 *Notes:* ${body.message.trim()}`);
    }

    const whatsappText = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

    return NextResponse.json<RegistrationResponse>({
      success: true,
      message: "Registration details received. Our coach will reach out to you shortly.",
      registrationId,
      data: record,
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

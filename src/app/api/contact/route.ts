import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, company, phone, message } = body;

  if (!email || !message) {
    return NextResponse.json({ error: "Email va xabar majburiy" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "Telegram sozlanmagan" }, { status: 500 });
  }

  const text = [
    "📩 <b>Yangi murojaat — ZYRON.UZ</b>",
    "",
    `👤 <b>Ism:</b> ${firstName || "—"} ${lastName || ""}`.trim(),
    `📧 <b>Email:</b> ${email}`,
    company ? `🏢 <b>Kompaniya:</b> ${company}` : null,
    phone ? `📱 <b>Telefon:</b> ${phone}` : null,
    "",
    `💬 <b>Xabar:</b>`,
    message,
    "",
    `🕐 <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`,
    `🌐 <b>Manba:</b> zyron.uz`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", err);
    return NextResponse.json({ error: "Xabar yuborilmadi" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Foydalanuvchi yuborgan ma'lumotlar
    const { companyName, name, phone, projectType, description } = body;

    if (!companyName || !name || !phone || !projectType || !description) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to'ldirish shart!" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "coderkuchkarov@gmail.com", // Emailingiz
        pass: "qsfs esew hhws tlva", // Google App Password
      },
    });

    // Email opsiyalari
    const mailOptions = {
      from: "coderkuchkarov@gmail.com", // Sizning emailingizdan yuboriladi
      to: "coderkuchkarov@gmail.com", // Sizning emailingizga yuboriladi
      subject: `Yangi loyiha so'rovi - ${projectType}`,
      text: `
        Kompaniya nomi: ${companyName}
        Ismi: ${name}
        Telefon: ${phone}
        Loyihaning turi: ${projectType}
        Tavsif: ${description}
      `,
    };

    // Email yuborish
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email muvaffaqiyatli yuborildi!" });
  } catch (error) {
    console.error("Email yuborishda xatolik:", error);
    return NextResponse.json(
      { error: "Email yuborishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
};

export { POST };

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    console.log("API KEY VALUE:", process.env.GEMINI_API_KEY);
    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "dummy_key_if_not_set");
    const { message, history } = await req.json();

    const systemPrompt = `
      You are Habito AI, a preventive health assistant for young urban professionals in India.
      Your goal is to answer questions about preventive health briefly and professionally.
      Tone: Calm, intelligent, non-judgmental, encouraging micro-habits rather than massive overhauls. 
      Keep your responses under 3 sentences. Never diagnose medical conditions.
      Refer to the platform "Habito" as your creator. 
    `;

    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `${systemPrompt}\n\nUser: ${message}`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return NextResponse.json({
      text: text || "Sorry, I couldn't generate a response.",
    });

  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    return NextResponse.json(
      { text: error.message || JSON.stringify(error) },
      { status: 500 }
    );
  }
}

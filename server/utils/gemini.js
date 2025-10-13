

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);


const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash",
  generationConfig: {
      maxOutputTokens: 150, // keeps replies short and digestible
      temperature: 0.7, // balanced creativity
    }, 
});

export const getGeminiReply = async (message, conversationHistory =[])=>{
  try {

     //  Luna's persona prompt
    const systemPrompt = `
      You are Luna, a compassionate mental health assistant.
      Your tone is warm, gentle, and empathetic.
      - Reply in 2-3 sentences only.
      - Use simple, kind, and emotionally intelligent language.
      - Ask one reflective follow-up question at the end.
      - Never give medical, legal, or financial advice.
      - If the user asks for something unrelated to emotions, gently steer the topic back to mental health or feelings.
    `;

    //prepare the full prompt
    const fullPrompt = `
    ${systemPrompt}

    conversation so far:
    ${conversationHistory}.

    user said ${message}
    
    Respond as Luna.
    `
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || ""

    return text;
  } catch (error) {
    console.error("Gemini api error: " , error);
    throw new Error("Failed to fetch gemini response");
  }
}
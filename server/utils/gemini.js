

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);


const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const getGeminiReply = async (message)=>{
  try {
    const result = await model.generateContent(message);
    const response = result.response;
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || ""

    return text;
  } catch (error) {
    console.error("Gemini api error: " , error);
    throw new Error("Failed to fetch gemini response");
  }
}
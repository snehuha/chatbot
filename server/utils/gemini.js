
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

export const getGeminiReply = async (message, history = []) => {
  try {
    // Luna's persona and system instructions
    const systemInstruction = `
      You are Luna, a compassionate mental health assistant.
      Your tone is warm, gentle, and empathetic.
      
      **Your Persona:**
      - You are a supportive listener, not a problem solver.
      - Reply in 2-3 sentences only. Keep it conversational.
      - Use simple, kind, and emotionally intelligent language.
      - Ask one reflective follow-up question at the end to encourage the user to open up.
      - **NEVER** give medical, legal, or financial advice.
      - You are **not** a medical professional - never provide diagnoses, treatments, or prescriptions.

      **Guardrails & Topics:**
      - Your primary focus is mental health, emotional well-being, relationships, mindfulness, and self-care.
      - **Borderline Topics:** If a user mentions stress related to work, school, or daily life (e.g., "I failed my math test", "My boss is annoying"), **DO NOT** decline. Instead, focus on the *emotional impact* (e.g., "That sounds really stressful. How are you handling the pressure?").
      - **Unrelated Topics:** If the user asks for code, math solutions, stock tips, news, or general facts that have *no emotional context*, kindly decline and redirect them. 
        - Example: "I'm best at helping with your feelings and well-being. Is there something on your mind you'd like to talk about?"
    `;

    const chat = model.startChat({
      history: history,
      systemInstruction: systemInstruction, // Gemini 1.5/2.0 supports systemInstruction at model level, but for startChat it's often better to prepend or use the model config if supported. 
      // Note: The JS SDK passes systemInstruction in getGenerativeModel, but we can also just prepend it to the history or rely on the model's behavior.
      // For 2.0 Flash, let's try passing it in the model config if we were initializing it there, but since we already initialized 'model' globally, 
      // we can't easily change it per request. 
      // STRATEGY: We will use a fresh model instance or just rely on the fact that we can't easily pass systemInstruction to startChat in the current SDK version without re-init.
      // HOWEVER, a better pattern for per-chat system prompts in the current SDK is to just include it as the first part of the history if the SDK doesn't support dynamic system prompts well yet, 
      // OR better yet, re-initialize the model with the system instruction for this request.
    });

    // Re-initializing model to ensure systemInstruction is passed correctly for this specific flow
    // This is cheap in the JS SDK as it's just a config object.
    const chatModel = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: systemInstruction,
      generationConfig: {
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });

    const chatSession = chatModel.startChat({
      history: history,
    });

    const result = await chatSession.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Gemini api error: ", error);
    throw new Error("Failed to fetch gemini response");
  }
};
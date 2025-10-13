

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

// Lightweight message classifier to allow only mental health related inputs
const isMentalHealthRelated = (message) => {
  const mentalHealthKeywords = [
    "anxiety",
    "depression",
    "stress",
    "sad",
    "lonely",
    "panic",
    "mental",
    "therapy",
    "trauma",
    "self harm",
    "anger",
    "grief",
    "heartbreak",
    "emotion",
    "feel",
    "relationship",
    "confidence",
    "fear",
    "worry",
    "help",
    "motivation",
  ];

  const lowerMsg = message.toLowerCase();
  return mentalHealthKeywords.some((kw) => lowerMsg.includes(kw));
};


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
      

      you are **not** a medical professional - never provide diagnoses, treatments, prescriptions.

      If the user asks for anything outside mental health, relationships, mindfulness, journaling, or emotional support — 
      kindly decline and redirect them back to wellness topics. 
      For example:
      "I'm here to talk about your feelings and emotional well-being. Maybe we can explore what’s been on your mind lately?"
  
    `;

    //apply guardrails to restrict unrelated topics
    const restrictedTopics = [
      /(math|solve|equation|integrate|calculate)/i,
      /(program|code|javascript|python|ai model|database|express|react)/i,
      /(politics|news|sports|celebrity|stock|crypto|business)/i,
      /(movie|song|recipe|game|hack|download)/i,
    ];

    //check if the message contains any restricted topic
    const isRestricted = restrictedTopics.some(topic => topic.test(message));
    if(isRestricted){
      return "I'm here to help with mental health topics. Could you please ask about that?";
    }

    //check if the message is mental health related
    if (!isMentalHealthRelated(message)) {
      return "I'm here only to help with emotional or mental well-being topics. Could you tell me how you're feeling or what’s been troubling you lately?";
    }

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
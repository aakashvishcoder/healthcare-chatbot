// file for testing

const apiKey = "AIzaSyAphFh_0Rj4zGRZWwIhxnP_AXlOq5esOgo"; // Make sure this key is secured in production

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with your API key
const ai = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-1.5-pro", etc.

  const result = await model.generateContent([
    { role: "user", parts: [{ text: prompt }] }
  ]);

  const response = await result.response;
  console.log(response.text());
}

await main("I’ve been struggling with anxiety lately. Even small tasks feel overwhelming. What can I do to feel more in control?");

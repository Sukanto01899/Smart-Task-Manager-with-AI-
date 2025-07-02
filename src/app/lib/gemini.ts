import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getSubtasksFromGemini(taskTitle: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          parts: [
            {
              text: `Break down the following task into only 3-5 smaller actionable steps, per step include only 2/3 word and don't include command prompt: "${taskTitle}"`,
            },
          ],
        },
      ],
    });

    const output = response.candidates?.[0]?.content?.parts?.[0]?.text;

    return output?.split("\n").filter((line: string) => line.trim()) ?? [];
  } catch (err) {
    console.log(err)
    throw new Error("Gemini service failed")
  }
}

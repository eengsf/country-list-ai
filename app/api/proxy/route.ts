import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY!,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { query }: { query: string } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "meta/llama-3.1-405b-instruct",
      messages: [{ role: "user", content: query }],
      temperature: 0.2,
      top_p: 0.7,
      max_tokens: 1024,
      stream: false,
    });

    return NextResponse.json({
      response: completion.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ NVIDIA API Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.error("❌ Unexpected error:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

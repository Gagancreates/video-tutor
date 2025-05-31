import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { getEnv } from '@/lib/env';

// Initialize the Gemini API
const env = getEnv();
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json();
    
    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // For API key check from the frontend
    if (topic === 'test') {
      // Check if API key is configured
      if (!env.GEMINI_API_KEY) {
        return NextResponse.json(
          { error: 'Gemini API key is not configured' },
          { status: 500 }
        );
      }
      
      // API key exists, return success
      return NextResponse.json({ success: true });
    }

    // Check if environment is properly configured
    if (!env.isConfigured) {
      return NextResponse.json(
        { error: `Missing required environment variables: ${env.missingVars.join(', ')}` },
        { status: 500 }
      );
    }

    // Generate P5.js visualization code and script
    const prompt = `
    I need educational content about "${topic}". Please provide:
    
    1. P5.js code for a visualization that teaches about "${topic}". 
    The code should be well-commented, educational, and visually engaging.
    It should demonstrate concepts related to ${topic} in a visual way.
    The visualization should be animated and interactive where appropriate.
    
    2. A script for narration that explains what's happening in the visualization.
    The script should be educational, clear, and synchronized with the visualization.
    It should be broken down into sections/frames that correspond to stages in the visualization.
    
    Format your response as a JSON object with these properties:
    {
      "p5jsCode": "// Your complete P5.js code here",
      "script": {
        "intro": "Introduction text",
        "frames": [
          {
            "time": "0-5s",
            "narration": "What to say for this frame"
          },
          // More frames
        ],
        "conclusion": "Concluding remarks"
      }
    }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the response to extract JSON
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || 
                      text.match(/```\n([\s\S]*?)\n```/) ||
                      text.match(/{[\s\S]*}/);
    
    let parsedResponse;
    
    if (jsonMatch && jsonMatch[1]) {
      try {
        parsedResponse = JSON.parse(jsonMatch[1]);
      } catch (e) {
        // Try to parse the whole text as JSON
        try {
          parsedResponse = JSON.parse(text);
        } catch (e) {
          return NextResponse.json(
            { error: 'Failed to parse response from AI' },
            { status: 500 }
          );
        }
      }
    } else {
      try {
        // Try to parse the whole text as JSON
        parsedResponse = JSON.parse(text);
      } catch (e) {
        return NextResponse.json(
          { error: 'Failed to parse response from AI', rawText: text },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      p5jsCode: parsedResponse.p5jsCode,
      script: parsedResponse.script
    });
    
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
} 
import { NextRequest, NextResponse } from 'next/server';
import { getEnv } from '@/lib/env';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    const env = getEnv();
    
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Check if environment is properly configured
    if (!env.isConfigured) {
      return NextResponse.json(
        { error: `Missing required environment variables: ${env.missingVars.join(', ')}` },
        { status: 500 }
      );
    }
    
    // For API key check from the frontend
    if (text === 'test') {
      // API key exists, return success
      return NextResponse.json({ success: true });
    }
    
    // Use Rachel voice ID (or change to another voice as desired)
    const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';
    
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': env.ELEVEN_LABS_API_KEY || '',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Text-to-speech conversion failed', details: errorData },
        { status: response.status }
      );
    }

    // Get the audio data
    const audioArrayBuffer = await response.arrayBuffer();
    
    // Convert to base64 for easier handling in the frontend
    const audioBase64 = Buffer.from(audioArrayBuffer).toString('base64');
    
    return NextResponse.json({
      audioBase64,
      audioUrl: `data:audio/mpeg;base64,${audioBase64}`,
    });
    
  } catch (error) {
    console.error('Error in text-to-speech conversion:', error);
    return NextResponse.json(
      { error: 'Failed to convert text to speech' },
      { status: 500 }
    );
  }
} 
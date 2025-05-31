# 3-Hour Implementation Plan: AI Video Tutor Core Functionality

## Streamlined Goals
1. User enters a topic in the UI
2. Generate P5.js visualization code using LLM
3. Generate educational script using LLM
4. Convert script to audio with ElevenLabs
5. Display P5.js visualization with synchronized audio

## Step-by-Step Implementation (3 hours total)

### 1. API Setup (30 minutes)
- [x] Create a basic API route for the generate endpoint
- [x] Set up environment variables for API keys

### 2. OpenAI Integration (45 minutes)
- [x] Install OpenAI SDK
- [x] Create a prompt template for generating:
  - P5.js visualization code
  - Educational script

### 3. ElevenLabs Integration (30 minutes)
- [x] Install ElevenLabs SDK or use fetch API
- [x] Create a function to convert text to speech

### 4. P5.js Renderer (30 minutes)
- [x] Create a component to render P5.js code
- [x] Set up a sandboxed environment for executing the code

### 5. Frontend UI (45 minutes)
- [x] Create a simple form for topic input
- [x] Add loading states
- [x] Display the visualization and audio player

### 6. End-to-End Testing (30 minutes)
- [x] Test the complete flow
- [x] Fix any critical issues

## Technical Implementation Plan

### Frontend Components
- **TopicForm**: Simple input with submit button
- **P5Renderer**: Component to execute and display P5.js code
- **AudioPlayer**: Basic audio player for the generated speech
- **LoadingState**: Simple loading indicator

### Backend Routes
- **POST /api/generate**: Accepts a topic and returns P5.js code and audio URL

### Data Flow
1. User enters topic in TopicForm
2. Frontend sends request to /api/generate
3. Backend calls OpenAI to generate P5.js code and script
4. Backend sends script to ElevenLabs to generate audio
5. Backend returns P5.js code and audio URL to frontend
6. Frontend renders P5.js visualization and plays the audio

## Implementation Strategy
- Skip persistent storage, authentication, and advanced features
- Use client-side rendering for P5.js (no server-side video generation)
- Skip error handling and validation for the prototype
- Focus on a seamless demo flow for one or two example topics 
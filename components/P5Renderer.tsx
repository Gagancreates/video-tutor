'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

// Add p5 to Window interface
declare global {
  interface Window {
    p5: any;
  }
}

interface P5RendererProps {
  code: string;
  isPlaying: boolean;
}

const P5Renderer = ({ code, isPlaying }: P5RendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  
  useEffect(() => {
    if (!code || !containerRef.current) return;
    
    // Clear previous sketch if any
    if (scriptRef.current) {
      scriptRef.current.remove();
    }
    
    if (window.p5 && containerRef.current.querySelector('canvas')) {
      const canvases = containerRef.current.querySelectorAll('canvas');
      canvases.forEach(canvas => canvas.remove());
    }
    
    // Create a new script element for the P5.js sketch
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        let sketch = function(p) {
          ${code}
        };
        
        new p5(sketch, '${containerRef.current.id}');
      })();
    `;
    
    containerRef.current.appendChild(script);
    scriptRef.current = script;
    
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, [code]);
  
  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js" 
        strategy="beforeInteractive"
      />
      <div 
        id="p5-container" 
        ref={containerRef} 
        className="w-full h-96 flex items-center justify-center bg-gray-900"
      >
        {!code && (
          <div className="text-white text-center">
            <p>Enter a topic to generate a visualization</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default P5Renderer; 
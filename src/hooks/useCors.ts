import { useEffect } from 'react';
import { isOriginAllowed } from '../config/cors';

export function useCors() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      try {
        // Safety check for event source
        if (!event.source) {
          return;
        }
        
        // Check if the origin is allowed
        if (!isOriginAllowed(event.origin)) {
          console.warn(`Origin ${event.origin} is not allowed to access this application`);
          return;
        }

        // Handle specific messages from parent
        if (event.data.type === 'READY_CHECK') {
          try {
            // Use a try-catch block to handle potential frame removal
            event.source.postMessage({ type: 'READY_RESPONSE' }, { targetOrigin: event.origin });
          } catch (error) {
            console.warn('Could not post message back to source, frame may have been removed', error);
          }
        }
      } catch (error) {
        console.warn('Error handling message event', error);
      }
    }

    window.addEventListener('message', handleMessage);
    
    // Notify parent that the app is ready
    if (window.parent !== window) {
      try {
        window.parent.postMessage({ type: 'APP_READY' }, '*');
      } catch (error) {
        console.warn('Could not send APP_READY message to parent', error);
      }
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
}
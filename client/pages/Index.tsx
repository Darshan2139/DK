import { useEffect } from 'react';

// This component is not used anymore as we've replaced it with the Portfolio component
// Keeping it for compatibility, but it will redirect to the main portfolio
export default function Index() {
  useEffect(() => {
    // Since this is now the main route ("/"), we don't need to redirect
    // The App component now routes "/" to Portfolio directly
  }, []);

  return null;
}

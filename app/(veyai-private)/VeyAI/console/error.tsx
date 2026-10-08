"use client";
export default function ConsoleError({ reset }: { reset: () => void }) {
  return <section role="alert"><h1>Workspace temporarily unavailable</h1><p>Your records could not be loaded. No approval or workflow advancement has been assumed.</p><button onClick={reset}>Try again</button></section>;
}

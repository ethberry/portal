"use client";

// Replaces the root layout when it fails, so it brings its own html and body and uses no providers or theme.
export default function GlobalError(props: { error: Error & { digest?: string }; reset: () => void }) {
  const { reset } = props;

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 24, fontFamily: "sans-serif" }}>
        <h1>Something went wrong</h1>
        <p>An unexpected error stopped the page from loading.</p>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}

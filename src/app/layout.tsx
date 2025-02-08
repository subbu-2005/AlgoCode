import type { Metadata } from "next";
import "../styles/globals.css"; // Import global styles

export const metadata: Metadata = {
  title: "Tech Fest Site",
  description: "A website to showcase code and notes for the coding competition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

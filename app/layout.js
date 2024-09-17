import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Diego Vive Tour",
  description: "Experiencia inmersiva del 10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

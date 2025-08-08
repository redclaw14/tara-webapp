import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-espresso">
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

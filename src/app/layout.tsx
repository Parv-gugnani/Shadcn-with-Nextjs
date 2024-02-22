import { Inter as FontInter } from "next/font/google";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const fontInter = FontInter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            ${fontInter.style}
          }
        `}</style>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontInter.variable
        )}
      >
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  );
}

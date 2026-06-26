import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <div className="max-w-5xl mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

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
      <body className="bg-white text-slate-950 antialiased">
        <div className="page-shell">
          <Container>
            <Navbar />
          </Container>
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}

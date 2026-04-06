import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InstantDoctor.ai - AI Doctor & Telehealth Platform",
  description: "Get instant AI-powered medical guidance and connect with licensed physicians online. Symptom checker, online doctor visits, prescription renewal, and lab result analysis.",
  keywords: "AI doctor, telehealth, symptom checker, online doctor, prescription renewal, lab results",
  openGraph: {
    title: "InstantDoctor.ai - AI Doctor & Telehealth Platform",
    description: "Instant AI medical guidance and real physician consultations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

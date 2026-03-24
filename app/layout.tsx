import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameer Saxena — Data & Cloud Engineer",
  description:
    "Portfolio of Sameer Saxena. Data analytics, BI, and cloud engineering professional. MS Information Systems @ UMD, Ex-Deloitte.",
  metadataBase: new URL("https://sameersaxena.dev"),
  openGraph: {
    title: "Sameer Saxena — Data & Cloud Engineer",
    description:
      "3.5+ years at Deloitte. Multi-cloud certified. Building pipelines, dashboards, and ML workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Saxena — Data & Cloud Engineer",
    description:
      "3.5+ years at Deloitte. Multi-cloud certified. Building pipelines, dashboards, and ML workflows.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}

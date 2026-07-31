import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affan Khan — Portfolio",
  description:
    "Personal Portfolio of Affan Khan, a Computer Science Undergraduate at FAST-NUCES Islamabad. Systems Programming, DSA, and Database Architecture.",
  keywords: [
    "Affan Khan",
    "FAST-NUCES",
    "Software Engineer",
    "Low Level Programming",
    "Informix Database",
    "C++ SFML",
    "DSA",
  ],
  authors: [{ name: "Affan Khan" }],
  openGraph: {
    title: "Affan Khan — Editorial Portfolio",
    description:
      "Explore projects, work experience, and technical focus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-[#FAF7F0] text-[#2B2B28] antialiased selection:bg-[#C79A3C] selection:text-[#2B2B28]">
        {children}
      </body>
    </html>
  );
}

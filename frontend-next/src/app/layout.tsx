'use client'
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import TagHeader from "@/components/header";
import styled from "styled-components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding-top: 60px; 
  padding-bottom: 60px; 
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          <TagHeader /> 
          <ContentWrapper>{children}</ContentWrapper> {/* Área de conteúdo */}
          <Footer /> 
        </PageWrapper>
      </body>
    </html>
  );
}

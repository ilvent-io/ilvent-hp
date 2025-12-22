import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { AppProvider } from "@/providers/app";
import { Header, Footer } from "@/components/Layout";
import { DynamicBackground } from '@/components/Background';

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Ilvent Co., Ltd.",
  description: "Small but Professional IT Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        <AppProvider>
          <DynamicBackground />
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

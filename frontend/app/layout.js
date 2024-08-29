import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Invest with Us",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <NextTopLoader color="#4983f6" />
        <div
        className="min-h-screen"
          style={{
            background: "url('/assets/stars.svg')",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}

import Theme from "@/components/Theme";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeButton from "@/components/ThemeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shadcn ui pratice",
  description: "Shadcn ui pratice with next js app directory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 ${inter.className}`}
      >
        <main className="container">
          <Theme>
            <div className="sticky top-0 z-10">
              <div className="flex items-center justify-end h-20 pr-5 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-md">
                <ThemeButton />
              </div>
            </div>
            {children}
          </Theme>
        </main>
      </body>
    </html>
  );
}

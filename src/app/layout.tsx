import NavBar from "@/components/layout/NavBar";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Osama Malik ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar />
          {children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/EDM_Logo_2.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <div className="relative flex flex-col h-screen">
          <main className="">{children}</main>
          <footer className="w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="https://github.com/Foximite"
              title="Github"
            >
              <span className="text-default-600">
                Copyright © {new Date().getFullYear()}. Desenvolvido por
              </span>
              <p className="text-primary">Shaquil Mahomed Hanif</p>
            </Link>
          </footer>
        </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}

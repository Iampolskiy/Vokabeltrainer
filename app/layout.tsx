/* Globale Styles, die auf allen Seiten geladen werden.
Wenn man größere Mengen spezifischer Styles hat, kann man
auch in einzelnen page- bzw. Komponenten-Dateien css oder
scss-Dateien importieren.
*/
import { TranslationContextProvider } from "@/components/TranslationContext";
import "../sass/style.scss";

// https://beta.nextjs.org/docs/optimizing/fonts
import { Merriweather, Karla } from "next/font/google";
import Header from "@/components/Header";
// import SupabaseProvider from './supabase-provider';

const karlaStyles = Karla({
  subsets: ["latin"],
  weight: ["500", "800"],
  style: "normal",
  display: "swap",
  variable: "--font-karla",
});

const merriweatherStyles = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-merriweather",
});

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
  themeColor: [
    { color: "hotpink", media: "(prefers-color-scheme: light)" },
    { color: "purple", media: "(prefers-color-scheme: dark)" },
  ],
  icons: [
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      url: "/favicon.png",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${karlaStyles.variable} ${merriweatherStyles.variable}`}
    >
      {/* Mit Supabase die SupabaseProvider-Komponente um children ergänzen */}
      <body>
        <Header />
        <TranslationContextProvider>{children}</TranslationContextProvider>
      </body>
    </html>
  );
}

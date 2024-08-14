import type { Metadata } from "next";
import { Inter, Montserrat, Raleway, Roboto, Noto_Sans, Ubuntu } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/themeContext";
// import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const mot = Montserrat({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const nota = Noto_Sans({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const rale = Raleway({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const ubuntu = Ubuntu({ subsets: ["latin"] , weight:[ "300" , "400" , "500" , "700" ]})

export const metadata: Metadata = {
  title: "Shivesh Nandan : Portfolio",
  description: " Hello! I'm final-year CSE student at USICT, GGSIPU Delhi.Over the past year, I've immersed myself in web development, creating projects with frameworks like React.js and now focusing on Next.js. This portfolio showcases my work using Next.js, Tailwind CSS, and ShadCN to build dynamic, responsive applications. I'm eager to find internships or freelance opportunities to expand my skills further. Besides coding, I enjoy photography. Let's connect and create something amazing together!",
};

// export const [first, setfirst] = useState(false);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body
      //  className={roboto.className}
      //  className={Mot.className}
      //  className={ubuntu.className}
       className={`${rale.className}  `}
      //  className={nota.className}
       > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

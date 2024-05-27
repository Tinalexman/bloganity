import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Bloganity",
    template: "%s | Bloganity",
  },
  description: "A blog for you is a blog for me",
};

const myColor: MantineColorsTuple = [
  "#fff5e1",
  "#ffeacc",
  "#ffd39b",
  "#ffba64",
  "#ffa538",
  "#ff981b",
  "#ff9209",
  "#e37e00",
  "#ca6f00",
  "#b05e00",
];

const theme = createTheme({
  colors: { primary: myColor },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={raleway.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}

import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Providers from "./components/Providers";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Root, StyledContainer } from "./styled";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const DESCRIPTION = "Custom development of crypto and AI applications";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethberry.io"),
  title: { default: "EthBerry Portal", template: "%s | EthBerry" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "EthBerry",
    title: "EthBerry Portal",
    description: DESCRIPTION,
    images: [{ url: "/press-kit/logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "EthBerry Portal",
    description: DESCRIPTION,
    images: ["/press-kit/logo.png"],
  },
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <html lang="en">
      <head></head>
      <body className={`${roboto.variable}`} style={{ margin: 0 }}>
        <Providers>
          <Root>
            <Header />
            <StyledContainer maxWidth="xl">{children}</StyledContainer>
            <Footer />
          </Root>
        </Providers>
      </body>
    </html>
  );
}

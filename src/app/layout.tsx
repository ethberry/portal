import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Providers from "@/app/components/Providers";
import { Root, StyledContainer } from "./styled";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "EthBerry Portal",
  description: "Custom development of crypto and AI applications",
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
          {/*<Footer />*/}
        </Providers>
      </body>
    </html>
  );
}

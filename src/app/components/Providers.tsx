"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { PropsWithChildren } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider, localizationSlice } from "@ethberry/provider-localization";
import { createStore, ReduxProvider } from "@ethberry/redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { config } from "../wagmi.config";
import { theme } from "../theme";
import { EnabledLanguages, i18n } from "../i18n";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={createStore([localizationSlice])}>
      <WagmiProvider config={config}>
        <ReactQueryClientProvider>
          <RainbowKitProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <LocalizationProvider i18n={i18n} defaultLanguage={EnabledLanguages.EN}>
                  {children}
                </LocalizationProvider>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </RainbowKitProvider>
        </ReactQueryClientProvider>
      </WagmiProvider>
    </ReduxProvider>
  );
}

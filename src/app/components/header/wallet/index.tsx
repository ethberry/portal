"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { FC } from "react";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import { config } from "../../../wagmi.config";

// The only place that talks to a wallet, so wagmi and RainbowKit load with this button and not with every page.
export const Wallet: FC = () => {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

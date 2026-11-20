# 0001. Wallet stack stays on RainbowKit 2, wagmi 2, viem 2

## Context

The wallet button uses `@rainbow-me/rainbowkit` (`getDefaultConfig`, `ConnectButton`, `RainbowKitProvider`) on top of
`wagmi` and `viem`. RainbowKit is no longer developed: its latest release, 2.x, declares the peers `wagmi ^2.9.0` and
`viem 2.x`. With wagmi 3 the peer range is broken, and with `legacy-peer-deps` npm does not report it.

## Decision

`wagmi` stays on the latest 2.x, matching RainbowKit's peer range. Renovate does not propose majors of
`@rainbow-me/rainbowkit`, `wagmi` and `viem` (`renovate.json`, this repository only); minor and patch updates continue.

## Consequences

wagmi 3 and viem 3 are adopted only together with replacing RainbowKit by a maintained wallet UI. The portal uses
little of the wallet stack (one connect button on mainnet), so that switch is small when it is needed.

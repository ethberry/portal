"use client";

import { FC } from "react";
import { Typography, Paper, Box } from "@mui/material";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

import { Root } from "../components/common/styled";
import FitBurn from "./FB138.jpeg";
import THUB from "./Т-HUB 71.jpg";

export const EventsContent: FC = () => {
  return (
    <Root>
      <Typography
        component="h2"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        <FormattedMessage id={"pages.events.title"} />
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          FitBurn on FIBO
        </Typography>
        <Box component={Image} src={FitBurn} alt="FitBurn" width="100%" height="auto" />
      </Paper>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Product Review Meetup at T-HUB
        </Typography>
        <Box component={Image} src={THUB} alt="T-HUB" width="100%" height="auto" />
      </Paper>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          INTEGRAL ART - International NFT Conference
        </Typography>
        <iframe
          width="100%"
          height="640"
          src="https://www.youtube.com/embed/FI5vwZiem6g"
          title="INTEGRAL ART - International NFT Conference"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Paper>
    </Root>
  );
};

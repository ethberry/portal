"use client";

import { FC } from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

import { Root } from "../styled";

export interface IStatusPageProps {
  title: string;
  description: string;
  actionLabel: string;
  href?: string;
  onAction?: () => void;
}

export const StatusPage: FC<IStatusPageProps> = props => {
  const { title, description, actionLabel, href, onAction } = props;

  return (
    <Root>
      <Typography
        component="h1"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        {title}
      </Typography>
      <Typography sx={{ mb: 2 }}>{description}</Typography>
      {href ? (
        <Button component={Link} href={href} variant="contained">
          {actionLabel}
        </Button>
      ) : (
        <Button variant="contained" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Root>
  );
};

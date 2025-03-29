"use client";

import { FC } from "react";
import { Button, Card, CardActions, CardMedia, Grid, Typography, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../components/common/styled";

export const PressKitContent: FC = () => {
  const theme = useTheme();

  return (
    <Root>
      <Grid>
        <Typography
          component="h2"
          sx={[
            theme => ({
              ...theme.typography.h4,
              lineHeight: "52px",
            }),
          ]}
        >
          <FormattedMessage id={"pages.pressKit.title"} />
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <FormattedMessage id="pages.pressKit.description" />
        </Typography>

        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardMedia component="img" image="/press-kit/logo.png" title="logo" sx={{ p: 2 }} />
              <CardActions>
                <Button href="/press-kit/logo.png" target="_blank">
                  PNG
                </Button>
                <Button href="/press-kit/logo.svg" target="_blank">
                  SVG
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardMedia
                component="img"
                image="/press-kit/logo_mono.png"
                title="inverse logo"
                sx={{ p: 2, background: theme.palette.primary.main }}
              />
              <CardActions>
                <Button href="/press-kit/logo_mono.png" target="_blank">
                  PNG
                </Button>
                <Button href="/press-kit/logo_mono.svg" target="_blank">
                  SVG
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardMedia component="img" image="/press-kit/logo_text.png" title="logo" sx={{ p: 2 }} />
              <CardActions>
                <Button href="/press-kit/logo_text.png" target="_blank">
                  PNG
                </Button>
                <Button href="/press-kit/logo_text.svg" target="_blank">
                  SVG
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card>
              <CardMedia
                component="img"
                image="/press-kit/logo_text_mono.png"
                title="inverse logo"
                sx={{ p: 2, background: theme.palette.primary.main }}
              />
              <CardActions>
                <Button href="/press-kit/logo_text_mono.png" target="_blank">
                  PNG
                </Button>
                <Button href="/press-kit/logo_text_mono.svg" target="_blank">
                  SVG
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  );
};

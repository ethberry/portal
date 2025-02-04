import { Box, Button, Card, CardContent, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCardsWrapper = styled(Grid2)(({ theme }) => ({
  width: 1200,
  margin: theme.spacing(2, "auto"),
}));

export const StyledCardWrapper = styled(Grid2)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  marginTop: theme.spacing(2),
  padding: theme.spacing(2, 2, 0, 2),
  position: "relative",
  [theme.breakpoints.down("md")]: {
    "&:not(:first-of-type)": {
      marginTop: theme.spacing(9),
    },
  },
}));

export const StyledScrewNut = styled(Box)({
  position: "absolute",
}) as typeof Box;

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(6),
  boxShadow: "inset 0px 0px 20px 3px rgba(255, 255, 255, 0.2)",
  padding: theme.spacing(4),
  display: "flex",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    borderRadius: theme.spacing(4),
    boxShadow: "inset 0px 0px 15px 3px rgba(255, 255, 255, 0.2)",
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export const StyledCardContent = styled(CardContent)({
  textAlign: "center",
  display: "flex",
  height: "auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(8),
  fontSize: 36,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

export const FeaturesWrapper = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 21,
  fontWeight: 500,
  textAlign: "center",
  marginBottom: theme.spacing(7),
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    marginBottom: theme.spacing(4),
  },
}));

export const SubscribeButton = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.contrastText,
  backgroundColor: "transparent",
  border: `3px solid ${theme.palette.primary.contrastText}`,
  borderRadius: theme.spacing(3),
  boxShadow: "none",
  padding: theme.spacing(3, 4),
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "2.2px",
  zIndex: 1001,
  "&:hover": {
    fontWeight: 600,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: theme.spacing(2),
    letterSpacing: "2px",
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(2, 3),
  },
})) as typeof Button;

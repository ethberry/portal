import { styled } from "@mui/material/styles";
import { Box, SvgIcon, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: theme.spacing(7, "auto", 4),
  padding: theme.spacing(6, 4, 9, 5),
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(2),
  },
})) as typeof Box;

export const StyledHeader = styled(Typography)(({ theme }) => ({
  color: "#4286F5",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 34,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: 28,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
})) as typeof Typography;

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    gap: 32,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(3),
  },
})) as typeof Box;

export const StyledItems = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 64,
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 40,
  },
})) as typeof Box;

export const StyledItemTop = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fontSize: 21,
  marginTop: theme.spacing(-18),
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    fontSize: 18,
    marginTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
})) as typeof Typography;

export const StyledItemBottom = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fontSize: 21,
  marginTop: theme.spacing(-10),
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    fontSize: 18,
    marginTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
})) as typeof Typography;

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  flexShrink: 0,
  background: "#efefef",
  borderRadius: "50%",
  marginBottom: theme.spacing(5),
  boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down("md")]: {
    marginBottom: 0,
  },
})) as typeof Box;

export const StyledTextWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}) as typeof Box;

export const StyledIcon = styled(SvgIcon)(({ theme }) => ({
  width: 24,
  height: 24,
  [theme.breakpoints.down("md")]: {
    width: 21,
    height: 21,
  },
  [theme.breakpoints.down("sm")]: {
    width: 18,
    height: 18,
  },
})) as any;

export const StyledImage = styled(Box)({
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
}) as typeof Box;

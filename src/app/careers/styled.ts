import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const StyledJobs = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

export const StyledJobCard = styled(Link)(({ theme }) => ({
  display: "block",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  textDecoration: "none",
  color: "inherit",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  },
}));

export const StyledMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: 14,
}));

export const StyledSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledList = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(3),
  "& li": {
    marginBottom: theme.spacing(1),
  },
}));

export const StyledHireList = styled("ol")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(3),
  "& li": {
    marginBottom: theme.spacing(1),
  },
}));

export const StyledApply = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
})) as typeof Button;

export const StyledBack = styled(Link)(({ theme }) => ({
  display: "inline-block",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontSize: 14,
  "&:hover": {
    textDecoration: "underline",
  },
}));

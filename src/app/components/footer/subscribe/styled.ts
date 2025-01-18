import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    "& > div": {
      width: "100%",
    },
  },
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 500,
  margin: theme.spacing(0, 0, 2),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: 21,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

export const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 16,
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export const StyledEmailWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  "& .MuiInputBase-input": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.primary.contrastText,
    opacity: 0.6,
  },
  "& .MuiOutlinedInput-root:hover fieldset, .MuiOutlinedInput-root.Mui-focused fieldset": {
    borderColor: theme.palette.common.white,
  },
  "& fieldset": {
    borderColor: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledSubmitWrapper = styled(Box)(({ theme }) => ({
  width: 150,
  "& > .MuiButton-root": {
    marginTop: theme.spacing(1),
    "&:disabled": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      opacity: 0.6,
    },
  },
  [theme.breakpoints.down("lg")]: {
    flex: 0,
    width: "100%",
    "& > .MuiButton-root": {
      marginTop: 0,
    },
  },
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 500,
  margin: theme.spacing(1, 0),
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 0,
    textAlign: "center",
  },
})) as typeof Typography;

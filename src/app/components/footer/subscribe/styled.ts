import { Box, Typography, Button } from "@mui/material";
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
})) as typeof Box;

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
})) as typeof Typography;

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
})) as typeof Box;

export const StyledEmailWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(2),
  },
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
})) as typeof Box;

export const StyledSubmitWrapper = styled(Box)(({ theme }) => ({
  width: 150,
  "& > .MuiButton-root": {
    marginTop: theme.spacing(0),
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
})) as typeof Box;

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(2),
  height: 56,
})) as typeof Button;

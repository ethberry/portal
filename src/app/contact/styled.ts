import { Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.45fr) minmax(260px, 0.55fr)",
  gap: theme.spacing(5),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
  },
}));

export const StyledForm = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
})) as typeof Box;

export const StyledFields = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const StyledSubmit = styled(Button)({
  justifySelf: "start",
});

export const StyledSidebar = styled(Paper)(({ theme }) => ({
  alignSelf: "start",
  minWidth: 0,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

export const StyledActions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minWidth: 0,
}));

export const StyledAction = styled(Button)({
  width: "100%",
}) as typeof Button;

export const StyledHoneypot = styled("div")({
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
});

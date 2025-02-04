import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Root = styled(Box)({
  alignItems: "center",
  position: "relative",
});

export const MenuWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 8,
});

export const StyledImage = styled(Box)(({ theme }) => ({
  width: theme.spacing(2.25),
  height: theme.spacing(1.75),
  marginRight: theme.spacing(2),
})) as typeof Box;

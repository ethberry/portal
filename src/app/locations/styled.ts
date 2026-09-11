import { Box, List, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 220px",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const StyledMap = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 480,
  overflow: "hidden",
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.action.hover,
  [theme.breakpoints.down("md")]: {
    height: 320,
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  maxHeight: 480,
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
  },
}));

export const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
}));

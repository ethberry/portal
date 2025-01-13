import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(6),
  padding: theme.spacing(1, 4, 4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  "& label > span": {
    fontWeight: 600,
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1, 2, 3),
  },
}));

export const StyledBold = styled(props => <Box component="span" {...props} />)<BoxProps>({
  fontWeight: 700,
}) as typeof Box;

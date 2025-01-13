import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(5, 2),
  paddingBottom: theme.spacing(2),
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: theme.spacing(0, "auto"),
  paddingBottom: theme.spacing(2),
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: 56,
  fontWeight: 700,
  margin: theme.spacing(7, 0),
  maxWidth: 1200,
  [theme.breakpoints.down("md")]: {
    fontSize: 42,
    margin: theme.spacing(5, 0, 6),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    margin: theme.spacing(4, 0, 7),
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1, 5),
  transition: "all 0.3s linear",
  fontFamily: "'Montserrat', sans-serif",
  "&.Mui-expanded": {
    border: "none",
    outline: "1px solid #FFFFFF",
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(3),
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    paddingTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  "&::before": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  color: "#6A6A6A",
  fontSize: 18,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    fontSize: 26,
    fontWeight: 500,
    color: "#6a6a6a",
    alignSelf: "center",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginLeft: theme.spacing(2),
    transform: "rotate(45deg)",
    alignSelf: "center",
    opacity: 0.6,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
    opacity: 1,
  },
}));

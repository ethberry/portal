import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAccordion = styled(Accordion)({
  "&.MuiPaper-root": {
    "&:before": {
      display: "none",
    },
  },
});

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
  border: "none",
  "& .MuiButtonBase-root": {
    width: "100%",
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0),
  "& .MuiAccordionSummary-content": {
    "& .MuiButtonBase-root": {
      width: "100%",
      minHeight: 36,
    },
    padding: theme.spacing(0),
    margin: 0,
    borderRadius: 0,
    boxShadow: "none",
  },
}));

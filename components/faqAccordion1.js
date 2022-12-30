import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FaqAccordion1 = () => {
  const [expanded, setExpanded] = React.useState("panel5");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography color="text.secondary">Do której godziny jesteś na weselu?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Na weselu jestem do godziny pierwszej w nocy. Wszystkie najważniejsze atrakcje wieczoru dzieją się do tej chwili.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography color="text.secondary">Na jakim terenie pracujesz?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Mieszkam w Krakowie. Mogę jednak uwiecznić Waszą uroczystość (lub też wykonać sesję plenerową) w dowolnym miejscu w południowej Polsce.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography color="text.secondary">Ile wynosi dopłata za dojazd?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            W moim pakiecie oferuję dojazd w dniu ślubu GRATIS. Jeżeli natomiast Wasz plener ślubny odbywa się w oddalonym od Krakowa miejscu to musimy doliczyć dopłatę za dojazd 1,72 PLN/km (zawsze
            jeździmy moim autem).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqAccordion1;

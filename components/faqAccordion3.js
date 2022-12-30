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
  padding: theme.spacing(2)
}));

const FaqAccordion3 = () => {
  const [expanded, setExpanded] = React.useState("panel11");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography color="text.secondary">Jak długo trwa plener? Jak wygląda taka sesja plenerowa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Na sesję zarezerwujcie sobie minimum trzy godziny - wszystko zależy od tego gdzie jest sesja i czy musimy daleko dojeżdżać.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography color="text.secondary">Czy mówisz w innych językach, niż polski?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Tak, swobodnie porozumiewam się w języku angielskim. Mam zdany First Certificate in English.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography color="text.secondary">Czy prowadzisz legalną działalność gospodarczą?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Tak, mam zarejestrowaną działalność gospodarczą i odprowadzam podatki.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
          <Typography color="text.secondary">Jak wcześnie trzeba rezerwować termin?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Zasada jest prosta, im szybciej tym lepiej, jeżeli jesteście zdecydowani abym to ja uwiecznił Waszą uroczystość - wypełnijcie poniższy formularz i skontaktujcie się ze mną jak najwcześniej. Warunkiem pełnej rezerwacji terminu jest podpisanie umowy.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqAccordion3;

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

const FaqAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="text.secondary">Czy posiadasz zaświadczenie z kurii zezwalające na fotografowanie podczas ślubów?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Tak przeszedłem kurs w kurii i posiadam zaświadczenie zezwalające na wykonanie reportażu z uroczystości ślubnej.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="text.secondary">Czy posiadasz zapasowy aparat w przypadku awarii?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Zawsze posiadam drugi aparat na wypadek awarii.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography color="text.secondary">Czy fotoksiążka jest wliczona w cenę pakietu i czy można zobaczyć przykładową książkę przed ślubem?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            Fotoksiążka jest produktem finalnym naszej współpracy i jest wliczona w cenę pakietu. Przykładową książkę możecie zobaczyć na spotkaniu ze mną w Krakowie. Na spotkaniu odpowiem też na
            wszystkie Wasze pytania.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography color="text.secondary">Jakiego sprzętu fotograficznego używasz w swojej pracy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Zdjęcia wykonuję bezlusterkowymi aparatami pełnoklatkowymi systemu Nikon Z i jasnymi obiektywami Nikkor Z.
          </Typography>
        </AccordionDetails>
      </Accordion>     
    </>
  );
};

export default FaqAccordion;

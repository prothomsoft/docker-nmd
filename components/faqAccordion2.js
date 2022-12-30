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

const FaqAccordion2 = () => {
  const [expanded, setExpanded] = React.useState("panel8");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography color="text.secondary">Czy obrabiasz zdjęcia?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Oczywiście. Każde zdjęcie wykonuję w formacie RAW - traktuję je jako półprodukt, z którego powstanie fotografia.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography color="text.secondary">Czy ze zdjęć, które od Ciebie dostaniemy możemy sobie wywołać odbitki o dużym rozmiarze?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Tak, zdjęcia otrzymujecie w dużej rozdzielczości 3520px (300 dpi).</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography color="text.secondary">Kiedy robisz plener ślubny?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Z reguły sesję ślubną robimy w tygodniu po Waszym ślubie, jednak bez problemu przesuniemy ją na termin późniejszy.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqAccordion2;

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = ({ idPrefix, q1, a1, q2, a2, q3, a3, q4, a4 }) => {
  return (
    <>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls={`${idPrefix}-content1`}
          id={`${idPrefix}-header1`}
        >
          <Typography>{q1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{a1}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls={`${idPrefix}-content2`}
          id={`${idPrefix}-header2`}
        >
          <Typography>{q2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{a2}</Typography>
        </AccordionDetails>
      </Accordion>
      {q3 && (
        <Accordion sx={{ backgroundColor: "black", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`${idPrefix}-content3`}
            id={`${idPrefix}-header3`}
          >
            <Typography>{q3}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{a3}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
      {q4 && (
        <Accordion sx={{ backgroundColor: "black", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`${idPrefix}-content4`}
            id={`${idPrefix}-header4`}
          >
            <Typography>{q4}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{a4}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default FaqAccordion;

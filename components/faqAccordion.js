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

const FaqAccordion = ({q1,a1,q2,a2,q3,a3,q4,a4}) => {
  const [expanded, setExpanded] = React.useState("panel1");
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let faq4 = "";
  if(q4 != "") {
    faq4 = (<Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography color="text.secondary">{q4}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{a4}</Typography>
            </AccordionDetails>
          </Accordion>)     
  }

  return (
    <>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="text.secondary">{q1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">{a1}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="text.secondary">{q2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">{a2}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography color="text.secondary">{q3}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">{a3}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {faq4}
 
    </>
  );
};

export default FaqAccordion;

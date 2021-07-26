import React from "react";
import "./Reason.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    padding: 100,
    background: "#339cff",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Reason = ({ section }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1
        className="Toptitle"
        style={{
          marginBottom: 70,
          textAlign: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Top 10 Reasons To Choose Us
      </h1>

      <div className="image-container">
        <img
          src="/assets/reason.jpg"
          alt=""
          style={{
            width: "100%",
          }}
        />
      </div>
      <div
        className="section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {section.map((item) => (
          <Accordion style={{ margin: 20, background: "cyan" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <strong>{item.title}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ width: 100, fontSize: 12 }}>
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Reason;

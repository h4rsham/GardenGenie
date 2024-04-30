import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const tooltipText =
  "If we know your region, we can recommend plants that can thrive in the microclimate of your location.";

const Region = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="step-title">
        <span className="bloom-font">R</span>egion
        <OverlayTrigger
          className="step-title"
          placement="right-end"
          overlay={<Tooltip id="tooltip">{tooltipText}</Tooltip>}
        >
          <sup>
            <i className="fas fa-info-circle ml-2"></i>
          </sup>
        </OverlayTrigger>
      </h2>
      <p>What is your location?</p>
      <Form.Group controlId="region" className="w-75 mt-4">
        <Form.Check
          value="north"
          type="radio"
          label="North"
          onChange={handleChange("region")}
          checked={values.region === "north"}
          aria-labelledby="Radio button choice for North"
        ></Form.Check>
        <Form.Check
          value="midlands"
          type="radio"
          label="Midlands"
          onChange={handleChange("region")}
          checked={values.region === "midlands"}
          aria-labelledby="Radio button choice for Midlands"
        ></Form.Check>
        <Form.Check
          value="south"
          type="radio"
          label="South"
          onChange={handleChange("region")}
          checked={values.region === "south"}
          aria-labelledby="Radio button choice for South"
        ></Form.Check>
      </Form.Group>
    </div>
  );
};

export default Region;

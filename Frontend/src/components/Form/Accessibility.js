import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const tooltipText =
  "If you have limited mobility, we can recommend low maintenance and smaller plants to help you get started effortlessly.";

const Accessibility = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="step-title">
        <span className="bloom-font">M</span>obility
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
      <p>Do you have any mobility difficulties?</p>
      <Form.Group controlId="accessibility" className="w-75 mt-4">
        <Form.Check
          value="yes"
          type="radio"
          label="Yes"
          onChange={handleChange("accessibility")}
          checked={values.accessibility === "yes"}
          aria-labelledby="Radio button choice for mobility issues yes"
        />
        <Form.Check
          value="no"
          type="radio"
          label="No"
          onChange={handleChange("accessibility")}
          checked={values.accessibility === "no"}
          aria-labelledby="Radio button choice for mobility issues no"
        />
      </Form.Group>
    </div>
  );
};

export default Accessibility;

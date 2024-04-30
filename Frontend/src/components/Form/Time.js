import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const tooltipText =
  "If you only have limited time, we can recommend low maintenance plants that don't require frequent watering.";

const Time = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="step-title">
        <span className="bloom-font">T</span>ime
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
      <p>How much time do you have to maintain a garden?</p>
      <Form.Group className="w-75 mt-4">
        <Form.Check
          value="minimum"
          type="radio"
          label="Minimum (1 to 2 hours per week)"
          onChange={handleChange("time")}
          checked={values.time === "minimum"}
          aria-labelledby="Radio button choice for Minimum (1 to 2 hours per week)"
        ></Form.Check>
        <Form.Check
          value="moderate"
          type="radio"
          label="Moderate (2 to 4 hours per week)"
          onChange={handleChange("time")}
          checked={values.time === "moderate"}
          aria-labelledby="Radio button choice for Moderate (2 to 4 hours per week)"
        ></Form.Check>
        <Form.Check
          value="noTimeConstraints"
          type="radio"
          label="I don't have time constraints"
          onChange={handleChange("time")}
          checked={values.time === "noTimeConstraints"}
          aria-labelledby="Radio button choice for I don't have time constraints"
        ></Form.Check>
      </Form.Group>
    </div>
  );
};

export default Time;

import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const tooltipText =
  "Depending on your available space, we can recommend indoor or outdoor plants, or plants that can be kept in pots.";

const Space = ({ handleChange, values }) => {
  return (
    <div className="space-container d-flex flex-column align-items-center">
      <h2 className="step-title text-center">
        <span className="bloom-font">S</span>pace
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
      <p>What type of space do you have available?</p>

      <Form.Group className="w-75 mt-4">
        <Form.Check
          value="indoors"
          type="radio"
          label="Indoors"
          onChange={handleChange("space")}
          checked={values.space === "indoors"}
          aria-labelledby="Radio button choice for indoor space"
        ></Form.Check>
        <Form.Check
          value="outdoors pots"
          type="radio"
          label="Outdoors pots"
          onChange={handleChange("space")}
          checked={values.space === "outdoors pots"}
          aria-labelledby="Radio button choice for Outdoor space pots"
        ></Form.Check>
        <Form.Check
          value="outdoors garden"
          type="radio"
          label="Outdoors garden"
          onChange={handleChange("space")}
          checked={values.space === "outdoors garden"}
          aria-labelledby="Radio button choice for Outdoor garden space"
        ></Form.Check>
      </Form.Group>
    </div>
  );
};

export default Space;

// PlantInfo.js

import logo from "../../images/Logo.png";
import "./PlantInfo.css";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function PlantInfo(props) {
  const { plantid } = useParams();

  let plantIndex = 0;

  for (let i = 0; i < props.plants.length; i++) {
    if (props.plants[i]._id === plantid) {
      plantIndex = i;
    }
  }

  const plant = props.plants[plantIndex];

  const [collapseOneOpen, setCollapseOneOpen] = useState(false);
  const [collapseTwoOpen, setCollapseTwoOpen] = useState(false);
  const [collapseThreeOpen, setCollapseThreeOpen] = useState(false);
  const [collapseFourOpen, setCollapseFourOpen] = useState(false);
  const [collapseFiveOpen, setCollapseFiveOpen] = useState(false);
  const [collapseSixOpen, setCollapseSixOpen] = useState(false);
  const [collapseSevenOpen, setCollapseSevenOpen] = useState(false);
  const [collapseEightOpen, setCollapseEightOpen] = useState(false);
  const [collapseNineOpen, setCollapseNineOpen] = useState(false);
  const [collapseTenOpen, setCollapseTenOpen] = useState(false);
  const [collapseElevenOpen, setCollapseElevenOpen] = useState(false);

  console.log(plant);

  return (
    <div className="home">
      <img
        src={logo}
        alt="Logo"
        className="logo-plant-info img-fluid"
        onClick={props.handleLogoClick}
      />

      <div className="plant-info-header">
        <h2>Click on any option below to expand</h2>
      </div>

      <div className="row-align-items-center">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${
                  collapseOneOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseOneOpen(!collapseOneOpen)}
                aria-expanded={collapseOneOpen}
                aria-controls="collapseOne"
              >
                When To Plant
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${
                collapseOneOpen ? "show" : ""
              }`}
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">{plant.InfoPage.WhenToPlant}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${
                  collapseTwoOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseTwoOpen(!collapseTwoOpen)}
                aria-expanded={collapseTwoOpen}
                aria-controls="collapseTwo"
              >
                Sun Requirements
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${
                collapseTwoOpen ? "show" : ""
              }`}
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.SunRequirements}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button ${
                  collapseThreeOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseThreeOpen(!collapseThreeOpen)}
                aria-expanded={collapseThreeOpen}
                aria-controls="collapseThree"
              >
                Soil Conditions
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${
                collapseThreeOpen ? "show" : ""
              }`}
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.SoilConditions}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className={`accordion-button ${
                  collapseFourOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseFourOpen(!collapseFourOpen)}
                aria-expanded={collapseFourOpen}
                aria-controls="collapseFour"
              >
                Watering Frequency
              </button>
            </h2>
            <div
              id="collapseFour"
              className={`accordion-collapse collapse ${
                collapseFourOpen ? "show" : ""
              }`}
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.WateringFreq}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className={`accordion-button ${
                  collapseFiveOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseFiveOpen(!collapseFiveOpen)}
                aria-expanded={collapseFiveOpen}
                aria-controls="collapseFive"
              >
                Outdoor Planting
              </button>
            </h2>
            <div
              id="collapseFive"
              className={`accordion-collapse collapse ${
                collapseFiveOpen ? "show" : ""
              }`}
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.OutdoorPlanting}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className={`accordion-button ${
                  collapseSixOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseSixOpen(!collapseSixOpen)}
                aria-expanded={collapseSixOpen}
                aria-controls="collapseSix"
              >
                Indoor Planting
              </button>
            </h2>
            <div
              id="collapseSix"
              className={`accordion-collapse collapse ${
                collapseSixOpen ? "show" : ""
              }`}
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.IndoorPlanting}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className={`accordion-button ${
                  collapseSevenOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseSevenOpen(!collapseSevenOpen)}
                aria-expanded={collapseSevenOpen}
                aria-controls="collapseSeven"
              >
                Harvesting
              </button>
            </h2>
            <div
              id="collapseSeven"
              className={`accordion-collapse collapse ${
                collapseSevenOpen ? "show" : ""
              }`}
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">{plant.InfoPage.Harvesting}</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className={`accordion-button ${
                  collapseEightOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseEightOpen(!collapseEightOpen)}
                aria-expanded={collapseEightOpen}
                aria-controls="collapseEight"
              >
                Common Problems
              </button>
            </h2>
            <div
              id="collapseEight"
              className={`accordion-collapse collapse ${
                collapseEightOpen ? "show" : ""
              }`}
              aria-labelledby="headingEight"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">
                {plant.InfoPage.CommonProblems}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className={`accordion-button ${
                  collapseNineOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseNineOpen(!collapseNineOpen)}
                aria-expanded={collapseNineOpen}
                aria-controls="collapseNine"
              >
                Mulching
              </button>
            </h2>
            <div
              id="collapseNine"
              className={`accordion-collapse collapse ${
                collapseNineOpen ? "show" : ""
              }`}
              aria-labelledby="headingNine"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">{plant.InfoPage.Mulching}</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className={`accordion-button ${
                  collapseTenOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseTenOpen(!collapseTenOpen)}
                aria-expanded={collapseTenOpen}
                aria-controls="collapseTen"
              >
                Feeding
              </button>
            </h2>
            <div
              id="collapseTen"
              className={`accordion-collapse collapse ${
                collapseTenOpen ? "show" : ""
              }`}
              aria-labelledby="headingTen"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">{plant.InfoPage.Feeding}</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className={`accordion-button ${
                  collapseElevenOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => setCollapseElevenOpen(!collapseElevenOpen)}
                aria-expanded={collapseElevenOpen}
                aria-controls="collapseEleven"
              >
                Pruning
              </button>
            </h2>
            <div
              id="collapseEleven"
              className={`accordion-collapse collapse ${
                collapseElevenOpen ? "show" : ""
              }`}
              aria-labelledby="headingEleven"
              data-parent="#accordionExample"
            >
              <div className="accordion-body">{plant.InfoPage.Pruning}</div>
            </div>
          </div>
          {/* Add more accordion items for other dropdown items */}
        </div>
        <Link to="../results">
          <button id="get-started-plant" aria-label="Button that leads to Form">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PlantInfo;

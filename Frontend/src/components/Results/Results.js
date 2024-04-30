import logo from "../../images/Logo.png";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Results.css";
import Card from "./Cards.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/*
Making a filter based on time

user inputs:
- minimum
- moderate
- noTimeConstraints

Database choices:
- Watering
- Maintenance

1. Get information from database
  - async function that get uses fetch() ✔

2. Compare userInput to database information
  - The data recieved from the database will enter a state variable - it will become objects within an array
    - Depending on the user input, we need to find plants that have specific properties
    -

3. Return plants index that go through filter for further selection

*/

function Results(props) {
  const navigate = useNavigate();

  function filterTime(item) {
    if (props.values.time === "minimum") {
      return (
        item.Properties.Maintenance === "Low" &&
        item.Properties.Watering === "Low"
      );
    } else if (props.values.time === "moderate") {
      return (
        (item.Properties.Maintenance === "Low" &&
          item.Properties.Watering === "Low") ||
        (item.Properties.Maintenance === "Medium" &&
          item.Properties.Watering === "Moderate") ||
        (item.Properties.Maintenance === "Medium" &&
          item.Properties.Watering === "Low") ||
        (item.Properties.Maintenance === "Low" &&
          item.Properties.Watering === "Moderate")
      );
    }
    return true;
  }

  function filterSpace(item) {
    if (props.values.space === "indoors") {
      return (
        item.Properties.Size === "Small" &&
        item.Properties.GrowInPot === true &&
        item.Properties.Indoor === true
      );
    } else if (props.values.space === "outdoors pots") {
      return (
        (item.Properties.Size === "Small" &&
          item.Properties.GrowInPot === true) ||
        (item.Properties.Size === "Medium" &&
          item.Properties.GrowInPot === true) ||
        (item.Properties.Size === "Medium" &&
          item.Properties.GrowInPot === false)
      );
    }
    return true;
  }

  function filterRegion(item) {
    let plantRegion = item.Properties.Region;
    let userRegion = props.values.region;
    if (userRegion === "north") {
      return plantRegion === "North" || plantRegion === "All";
    } else if (userRegion === "midlands") {
      return plantRegion === "Midlands" || plantRegion === "All";
    } else if (userRegion === "south") {
      return plantRegion === "South" || plantRegion === "All";
    }
    return true;
  }

  function filterMobility(item) {
    let plantMaint = item.Properties.Maintenance;
    let plantSize = item.Properties.Size;
    let userChoice = props.values.accessibility;
    if (userChoice === "yes") {
      return plantSize === "Small" && plantMaint !== "High";
    }
    return true;
  }

  let filteredArray = props.plants
    .filter(filterTime)
    .filter(filterSpace)
    .filter(filterRegion)
    .filter(filterMobility);

  let indexArray = [];
  let randomIndex = 0;
  while (indexArray.length < 3) {
    randomIndex = Math.floor(Math.random() * filteredArray.length);
    if (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }

  // console.log('This is the index array:')
  // console.log(indexArray);
  //console.log(props.plants[indexArray[0]]);

  //console.log('props.plants.length:')
  //console.log(props.plants.length)

  // console.log("filteredArray[indexArray[0]].Name");
  // console.log(filteredArray[indexArray[0]].Name);

  // || original: navigate(`/plant-info?plantid=${props.plants[0]._id}`);

  return (
    <div className="home">
      <img
        src={logo}
        alt="Logo"
        className="logo img-fluid"
        onClick={props.handleLogoClick}
      />
      <div className="header">
        <h2>Presenting your personalised gardening findings:</h2>
      </div>

      <div className="row justify-content-center">
        <div className="card-group2 centered-row">
          <div className="card-1 col-md-4 align-items-center">
            <Card
              indexArray
              imgSrc={filteredArray[indexArray[0]].CardInfo.Image}
              imgAlt={filteredArray[indexArray[0]].CardInfo.Name}
              plantName={filteredArray[indexArray[0]].CardInfo.Name}
              onClick={() => {
                navigate(`/plant-info/${filteredArray[indexArray[0]]._id}`);
              }}
              value={filteredArray[indexArray[0]].Name}
              aria-label="clickable card for first recommended plant"
            />
          </div>
          <div className="card-2 col-md-4 align-items-center">
            <Card
              indexArray
              imgSrc={filteredArray[indexArray[1]].CardInfo.Image}
              imgAlt={filteredArray[indexArray[1]].CardInfo.Name}
              plantName={filteredArray[indexArray[1]].CardInfo.Name}
              onClick={() => {
                navigate(`/plant-info/${filteredArray[indexArray[1]]._id}`);
              }}
              value={filteredArray[indexArray[1]].Name}
              aria-label="clickable card for second recommended plant"
            />
          </div>
          <div className="card-3 col-md-4 align-items-center">
            <Card
              indexArray
              imgSrc={filteredArray[indexArray[2]].CardInfo.Image}
              imgAlt={filteredArray[indexArray[2]].CardInfo.Name}
              plantName={filteredArray[indexArray[2]].CardInfo.Name}
              onClick={() => {
                navigate(`/plant-info/${filteredArray[indexArray[2]]._id}`);
              }}
              value={filteredArray[indexArray[2]].Name}
              aria-label="clickable card for third recommended plant"
            />
          </div>
        </div>
      </div>

      <Link to="../form">
        <button
          id="get-started"
          className="centered-button btn btn-primary btn-lg larger-button green-button results-back-button"
          aria-label="Button that leads back to the beginning of the Form"
        >
          Back
        </button>
      </Link>
    </div>
  );
}

export default Results;
